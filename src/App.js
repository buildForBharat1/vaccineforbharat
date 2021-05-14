import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router";
import * as _ from 'lodash';
import { SECRET_KEYS, PROCESS_STAGE, API_URLS, ERROR_CODE, COWIN_ERROR_CODE, OTP_RETRY_TIME } from './constants';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makePostCall } from './utils/network';
import { fetchBenficiaries } from './booking/beneficiary';
import { fetchSlots } from './booking/slot';
import { getSearchParamsFromUrl } from './utils/queryParams';
import { triggerCallback } from './webCallback';
import Image from './assests/build4bharat.jpg';
import Box from '@material-ui/core/Box';
import { renderOtpStage, renderCaptchStage, renderSuccessStage, renderExistingBookingStage,
renderBookingFailedStage, renderVaccinatedStage, renderErrorStage } from './stateView';
const shajs = require('sha.js');

const useStyles = makeStyles({
  root: {
    backgroundColor: '#B2EBFE'
  },
  image: {
    overflow: 'hidden',
    maxWidth: '100%'
  },
  card: {
    flexGrow: 1,
    width: '100%',
    minHeight: '25%',
    maxWidth: 320,
    margin: 'auto',
    padding: 15,
    position: 'absolute',
    bottom: 0
  },
  button: {
    marginTop: 10
  },
  body: {
    marginTop: '5%',
  }
});

function getRandomSecretKey() {
  const index = parseInt((Math.random()*10))%6;
  return SECRET_KEYS[index];
}

function App(props) {
  const searchParams = getSearchParamsFromUrl(props.location.search);
  const [state, setState] = useState({...searchParams,
    stage: PROCESS_STAGE.INIT, otp: '', captcha: '' });
  const [retryTime, setRetryTime] = useState(OTP_RETRY_TIME);
  const stateCallback = (updatedState) => {
    setState({...state, ...updatedState});
  };
  const changeOtp = (otp) => {
    setState({...state, otp});
  };
  const changeCaptcha = (captcha) => {
    setState({...state, captcha});
  };
  const triggerOtp = async () => {
    const secretKey = getRandomSecretKey();
    setRetryTime(OTP_RETRY_TIME);
    try {
      const data = await makePostCall(API_URLS.INIT, {
        "mobile": state.phone,
        "secret": secretKey
      }, stateCallback);
      setState({...state, txnId: data.txnId, stage: PROCESS_STAGE.VALIDATE_OTP});
    } catch(err) {
      
    }
  };
  const submitOtp = async () => {
    const otpHash = shajs('sha256').update(state.otp).digest('hex');
    try {
      const data = await makePostCall(API_URLS.VALIDATE_OTP, {
        "otp": otpHash,
        "txnId": state.txnId
      }, stateCallback);
      setState({...state, token: data.token, stage: PROCESS_STAGE.FETCH_BENEFICIARY });
    } catch(err) {
    }
  };
  const submitCaptcha = async () => {
    try {
      const data = await makePostCall(API_URLS.SCHEDULE, {
        "captcha": state.captcha,
        "beneficiaries": [state.beneficiaryDetails.beneficiary_reference_id],
        "center_id": state.vaccineSlot.center_id,
        "slot": state.vaccineSlot.slots[0],
        "session_id": state.vaccineSlot.session_id,
        "dose": _.isEmpty(state.beneficiaryDetails.dose1_date)?1:2
      }, stateCallback, state.token);
      const appointmentId = _.get(data, 'appointment_confirmation_no');
      setState({...state, stage: PROCESS_STAGE.SLOT_BOOKED, appointmentId })
    } catch(err) {
    }
  };
  const triggerCaptcha = async () => {
    try {
      const data = await makePostCall(API_URLS.TRIGGER_CAPTCHA, {},
      stateCallback, state.token);
      const svg = _.get(data, 'captcha');
      setState({...state, stage: PROCESS_STAGE.SCHEDULE, svg })
    } catch(err) {

    }
  };
  const renderErrorItem = () => {
    if (_.isEmpty(_.get(state.errorObj, 'message'))) {
      return null;
    }
    return (
      <Grid alignItems="center" justify="center">
        <Grid item lg={12}>
        <Typography color="error">
          <Box fontWeight="fontWeightBold">
            {_.get(state.errorObj, 'message', '').substr(0, 40)}
          </Box>
          </Typography>
        </Grid>
      </Grid>
    )
  };
  const getRenderView = (classes) => {
      switch(state.stage) {
      case PROCESS_STAGE.SCHEDULE:
        return renderCaptchStage(state, classes, changeCaptcha, submitCaptcha);
      case PROCESS_STAGE.SLOT_BOOKED:
        return renderSuccessStage(classes);
      case PROCESS_STAGE.VACCINATED:
        return renderVaccinatedStage(classes);  
      case PROCESS_STAGE.EXISTING_BOOKING:
        return renderExistingBookingStage(classes);    
      case PROCESS_STAGE.BOOKING_FAILED:
        return renderBookingFailedStage(classes);      
      case PROCESS_STAGE.ERROR:
        return renderErrorStage(classes);
      default:
        return renderOtpStage({state, retryTime, classes, changeOtp, submitOtp, triggerOtp});
    }
  }
  useEffect(() => {
    if (state.phone && state.stage === PROCESS_STAGE.INIT) {
      triggerOtp();
    }
  }, []);
  useEffect(() => {
    console.log(state);
  }, [state]);
  useEffect(() => {
    switch(state.stage) {
      case PROCESS_STAGE.TRIGGER_CAPTCHA:
        triggerCaptcha();
        break;
      case PROCESS_STAGE.FETCH_BENEFICIARY:
        fetchBenficiaries(state, stateCallback);
        break;
      case PROCESS_STAGE.FETCH_SLOTS:
        fetchSlots(state, stateCallback);
        break;
      case PROCESS_STAGE.SLOT_BOOKED:
      case PROCESS_STAGE.VACCINATED:
      case PROCESS_STAGE.EXISTING_BOOKING:
      case PROCESS_STAGE.BOOKING_FAILED:
      case PROCESS_STAGE.ERROR:
        triggerCallback(state);
        break;
      default:
        break;
    }
    setState({...state, errorObj: { code: undefined, message: undefined }});
  }, [state.stage]);
  useEffect(() => {
    const code = _.get(state.errorObj, 'code');
    if (!code) {
      return;
    }
    switch(state.errorObj.code) {
      case COWIN_ERROR_CODE[ERROR_CODE.INVALID_OTP]:
        return;
      case COWIN_ERROR_CODE[ERROR_CODE.INVALID_CAPTCHA]:
        triggerCaptcha();
        return;  
      case COWIN_ERROR_CODE[ERROR_CODE.EXISTING_BOOKING]:
        setState({...state, stage: PROCESS_STAGE.EXISTING_BOOKING });
        return;
      case ERROR_CODE.NO_SLOT:
        setState({...state, stage: PROCESS_STAGE.BOOKING_FAILED });
        return;
      case ERROR_CODE.NO_BENEFICIARY:
        setState({...state, stage: PROCESS_STAGE.ERROR });
        return;  
      default:
        if (state.stage === PROCESS_STAGE.SCHEDULE) {
          setState({...state, stage: PROCESS_STAGE.BOOKING_FAILED});
        } else {
          setState({...state, stage: PROCESS_STAGE.ERROR });
        }
       return;
    };
  }, [state.errorObj]);
  useEffect(() => {
    if (!retryTime) return;
    const intervalId = setTimeout(() => {
      setRetryTime(retryTime-1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [retryTime])

  const classes = useStyles();
  const renderView = getRenderView(classes);
  const errorItem = renderErrorItem(); 
  return (
    <div className={classes.root}>
      <img src={`${Image}`} className={classes.image} />
      <Card className={classes.card}>
        {errorItem}
        {state.isLoading && <CircularProgress />}
        {renderView}
      </Card>
    </div>
  );
}

export default withRouter(App);
