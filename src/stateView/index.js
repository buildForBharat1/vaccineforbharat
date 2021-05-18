import React from 'react';
import * as _ from 'lodash';
import { OTP_RETRY_TIME, MAX_BOOKING_ATTEMPT, ERROR_CODE, COWIN_ERROR_CODE } from '../constants';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getMinuteString } from '../utils/stringUtils';
import Box from '@material-ui/core/Box';

const getRedirectElement = (classes) => {
  return (<div className={classes.body}>
    <Typography>
    ⌛ Taking you back...
    </Typography>
  </div>)
};

const getRetryElement = (classes) => {
  return (<div className={classes.body}>
    <Typography>
    ⌛ Retrying some other slot...
    </Typography>
  </div>)
};

export const renderOtpStage = ({state, retryTime, classes, changeOtp, submitOtp, triggerOtp}) => {
  const retryEnabled = (retryTime < 1);
  const retryTimeString = getMinuteString(retryTime);
  return (
    <Grid alignItems="center" justify="center">
      <Grid item lg={12}>
        <Typography variant="body2">
          <Box fontWeight="fontWeightBold">
            LOGIN
          </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography variant="h6">
        <Box fontWeight="fontWeightBold">
          Enter OTP
        </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <TextField maxLength={6} type="number" id="otp" label="6-digit OTP" variant="outlined" value={state.otp} onChange={e => changeOtp(e.target.value)} />
      </Grid>
      <Grid container justify="space-between">
        <Grid item lg={6}>
        <Button className={classes.button} id="otp" variant="contained" color="primary" onClick={submitOtp}
          disabled={state.isLoading}>
          Submit OTP
        </Button>
        </Grid>
        <Grid item lg={6}>
        <Button className={classes.button} id="otp" variant="contained"
          color={retryEnabled?"primary":"default"}
          onClick={triggerOtp}
          disabled={!retryEnabled || state.isLoading}>
          {`Retry ${retryEnabled?'':'('+retryTimeString+')'}`}
        </Button>
        </Grid>
      </Grid>
    </Grid>
  )
};

export const renderCaptchStage = (state, classes, changeCaptcha, submitCaptcha) => {
  if (!state.svg) {
    return undefined;
  }
  const buff = new Buffer(state.svg);
  const base64data = buff.toString('base64');
  return (
    <Grid alignItems="center" justify="center">
      <Grid item lg={12}>
        <Typography variant="body2">
          <Box fontWeight="fontWeightBold">
            Book Slot
          </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography variant="h6">
        <Box fontWeight="fontWeightBold">
          Enter the characters you see in the image
        </Box>
      </Typography>
    </Grid>
    <Grid item lg={12}>
      <img src={`data:image/svg+xml;base64,${base64data}`} />
    </Grid>
    <Grid item lg={12}>
      <TextField maxLength={6} id="captcha" variant="outlined" type="text" maxLength={6} name="Enter Captcha" value={state.captcha} onChange={e => changeCaptcha(e.target.value)} />
    </Grid>
    <Grid item lg={12}>
      <Button className={classes.button} id="captcha" onClick={submitCaptcha} variant="contained" color="primary"
        disabled={state.isLoading}>
        Book Vaccination
      </Button>
    </Grid>
  </Grid>
  )
};

export const renderSuccessStage = (classes) => {
  return (
    <Grid alignItems="center" justify="center">
      <Grid item lg={12}>
        <Typography variant="body2">
          <Box fontWeight="fontWeightBold" color="success.main">
            SLOT BOOKED
          </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography variant="h6">
        <Box fontWeight="fontWeightBold">
          Your vaccinated slot has been booked
        </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        {getRedirectElement(classes)}
      </Grid>
    </Grid>
  )
};

export const renderVaccinatedStage = (classes) => {
  return (
    <Grid alignItems="center" justify="center">
      <Grid item lg={12}>
        <Typography variant="body2">
          <Box fontWeight="fontWeightBold" color="success.main">
            VACCINATED
          </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography variant="h6">
        <Box fontWeight="fontWeightBold">
          You have been vaccinated
        </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        {getRedirectElement(classes)}
      </Grid>
    </Grid>
  )
};

export const renderExistingBookingStage = (classes) => {
  return (
    <Grid alignItems="center" justify="center">
      <Grid item lg={12}>
        <Typography variant="body2">
          <Box fontWeight="fontWeightBold" color="success.main">
            SLOT BOOKED
          </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography variant="h6">
        <Box fontWeight="fontWeightBold">
          You have a slot booking
        </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        {getRedirectElement(classes)}
      </Grid>
    </Grid>
  )
};

const getBookingActionElement = (bookingAttempt, classes) => {
  if (bookingAttempt < MAX_BOOKING_ATTEMPT) {
    return getRetryElement(classes);
  }
  return getRedirectElement(classes);
}

export const renderBookingFailedStage = (state, bookingAttempt, classes) => {
  const bookingActionElement = getBookingActionElement(bookingAttempt, classes);

  return (
    <Grid alignItems="center" justify="center">
      <Grid item lg={12}>
        <Typography variant="body2">
          <Box fontWeight="fontWeightBold" color="secondary.main">
            BOOKING FAILED
          </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography variant="h6">
        <Box fontWeight="fontWeightBold">
          All slots booked before your booking
        </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        {bookingActionElement}
      </Grid>
    </Grid>
  )
};

const getErrorMessage = (state) => {
  const errCode = _.get(state.errorObj, 'code');
  if (errCode === ERROR_CODE.NO_BENEFICIARY || errCode === COWIN_ERROR_CODE.NO_BENEFICIARY) {
    return (<Typography variant="h6">
    <Box fontWeight="fontWeightBold">
      Your registration on CoWin Portal is pending.
      Please register first so that you can book slots.
    </Box>
    </Typography>);
  }
  return (<Typography variant="body2">
    <Box fontWeight="fontWeightBold" color="secondary.main">
      SOMETHING WENT WRONG
    </Box>
  </Typography>);
};

export const renderErrorStage = (state, classes) => {
  const errorMessage = getErrorMessage(state);
  return (
    <Grid alignItems="center" justify="center">
      <Grid item lg={12}>
        {errorMessage}
      </Grid>
      <Grid item lg={12}>
        {getRedirectElement(classes)}
      </Grid>
    </Grid>
  )
};

export const renderRegisteredStage = (classes) => {
  return (
    <Grid alignItems="center" justify="center">
      <Grid item lg={12}>
        <Typography variant="body2">
          <Box fontWeight="fontWeightBold" color="success.main">
            STATUS CONFIRMED
          </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography variant="h6">
        <Box fontWeight="fontWeightBold">
          You have registered on CoWin portal. Please book a slot for vaccination soon.
        </Box>
        </Typography>
      </Grid>
      <Grid item lg={12}>
        {getRedirectElement(classes)}
      </Grid>
    </Grid>
  )
};