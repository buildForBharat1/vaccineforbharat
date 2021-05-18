import * as _ from 'lodash';
import { makeGetCall, makePostCall } from '../utils/network';
import { getCurrentDateString, getSlotDateString } from '../utils/stringUtils';
import { PROCESS_STAGE, API_URLS, SLOT_FILTER, ERROR_CODE } from '../constants';

const getTargetSlotTime = (availableSession) => {
  const slotDate = availableSession.date;
  const currentDateString = getCurrentDateString();

  if (currentDateString !== slotDate) {
    return availableSession.slots[0];
  }
  return _.last(availableSession.slots);
};

const getAvailableVaccineSlot = (centerList) => {
  let availableSlot = undefined;
  _.forEach(centerList, (center) => {
    const { sessions } = center;
    const availableSession = _.find(sessions, (session) => {
      // TODO: Update to param based dose check later
      const centerAvailability = _.get(session, 'available_capacity', 0);
      const dose1Availability = _.get(session, 'available_capacity_dose1', 0);
      return centerAvailability > 0 && dose1Availability >= SLOT_FILTER.MIN_CAPACITY &&
        session.min_age_limit === SLOT_FILTER.MIN_AGE;
    });
    if (availableSession) {
      const targetSlot = getTargetSlotTime(availableSession);
      availableSlot = {
        ...center,
        ...availableSession,
        slot_time: targetSlot
      };
      return false;
    }
  });
  return availableSlot;
};

export const fetchSlots = async(state, stateCallback) => {
  const { district } = state;
  if (!district) {
    stateCallback({ stage: PROCESS_STAGE.REGISTERED });
    return;
  }
  const dateString = getSlotDateString();
  try {
    const data = await makeGetCall(`${API_URLS.FETCH_SLOTS}?district_id=${district}&date=${dateString}`,
     stateCallback, state.token);
    const centerList = _.get(data, 'centers', []);
    const vaccineSlot = getAvailableVaccineSlot(centerList);
    if (_.isEmpty(vaccineSlot)) {
      stateCallback({errorObj: { code: ERROR_CODE.NO_SLOT, message: `No available slot found for district ${district}`} })
      return;
    }
    stateCallback({ stage: PROCESS_STAGE.TRIGGER_CAPTCHA, vaccineSlot })
  } catch(err) {

  }
};