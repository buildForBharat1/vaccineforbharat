import { getUrlParamsFromObj } from '../utils/queryParams';
import { ERROR_CODE, PROCESS_STAGE, MAX_BENEFICIARY_ALLOWED } from '../constants';
import * as _ from 'lodash';

export const triggerCallback = (state, callbackDelay=3000) => {
  const callbackParams = getCallbackParams(state);
  const appState = getAppState(state.stage);
  const requestBody = {
    ...callbackParams,
    auth_key: state.auth_key,
    phone: state.phone || state.registeredPhone,
    alternatePhone: state.registeredPhone,
    app_state: appState
  }
  const queryString = getUrlParamsFromObj(requestBody);
  window.setTimeout(function() {
    window.location.href = `${state.callback}?${queryString}`;
  }, callbackDelay);
};

const getCallbackParams = (state) => {
  const { beneficiaryDetails={} } = state;
  const errorObj = getErrorParams(state);
  const metaData = getMetaDataParams(state);
  const baseState = {
    beneficiary_id: beneficiaryDetails.beneficiary_reference_id,
    name: beneficiaryDetails.name,
    vaccine: beneficiaryDetails.vaccine,
    vaccination_status: beneficiaryDetails.vaccination_status,
    dose_1_date: beneficiaryDetails.dose1_date,
    dose_2_date: beneficiaryDetails.dose2_date,
    err_code: errorObj.code,
    err_message: errorObj.message,
    meta_data: JSON.stringify(metaData)
  };

  switch(state.stage) {
    case PROCESS_STAGE.EXISTING_BOOKING:
      const { appointments=[] } = beneficiaryDetails;
      const lastAppointment = _.last(appointments) || {};
      return {
        ...baseState,
        center_id: lastAppointment.center_id,
        center_name: lastAppointment.name,
        slot: lastAppointment.slot,
        session_id: lastAppointment.session_id,
        date: lastAppointment.date,
        dose: lastAppointment.dose,
        appointment_id: lastAppointment.appointment_id
      };
    case PROCESS_STAGE.SLOT_BOOKED:
      const { vaccineSlot={}, appointmentId } = state;
      const vaccineFee = getVaccineFee(vaccineSlot);
      return {
        ...baseState,
        appointment_id: appointmentId,
        center_id: vaccineSlot.center_id,
        center_name: vaccineSlot.name,
        center_address: vaccineSlot.address,
        center_district_name: vaccineSlot.district_name,
        center_pincode: vaccineSlot.pincode,
        slot: vaccineSlot.slot_time,
        session_id: vaccineSlot.session_id,
        date: vaccineSlot.date,
        vaccine_fee: vaccineFee,
        vaccine: vaccineSlot.vaccine,
        dose: state.doseToBook,
      };
    default:
      return baseState;
  }
};

const getErrorParams = (state) => {
  if (state.stage === PROCESS_STAGE.SLOT_BOOKED) {
    return {};
  }

  if (state.stage === PROCESS_STAGE.NOT_REGISTERED) {
    return !_.isEmpty(state.errorObj) ? state.errorObj : {
      code: ERROR_CODE.NO_BENEFICIARY,
      message: _.join(_.map(state.registeredBeneficiaryList, 'name'), ',')
    };
  }
  return state.errorObj || {};
};

const getAppState = (stage) => {
  if (stage === PROCESS_STAGE.NOT_REGISTERED) {
    return PROCESS_STAGE.ERROR;
  }

  return stage
};

const getVaccineFee = (vaccineSlot = {}) => {
  const vaccineFeeRates = _.get(vaccineSlot, 'vaccine_fees', []);
  const selectedVaccineRate = _.find(vaccineFeeRates, (entry = {}) => {
    return entry.vaccine === vaccineSlot.vaccine;
  });
  return _.get(selectedVaccineRate, 'fee', '0');
};

const getMetaDataParams = (state) => {
  if (state.stage === PROCESS_STAGE.NOT_REGISTERED) {
    return { available_beneficiaries: _.slice(state.registeredBeneficiaryList, 0, MAX_BENEFICIARY_ALLOWED) };
  }
  return {};
}
