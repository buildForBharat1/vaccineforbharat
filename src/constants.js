
export const SECRET_KEYS = [
  'U2FsdGVkX1/fkazU2I2Rdz3hI7iWT6HRzThZj16rpyn4xYM6wcbd84k4CpJimxC0YpG3kFn9qog6LhmaRoS14g==',
  'U2FsdGVkX19I0TpTI50qTW+0o+LEWSBPYIcivZR4gvANVyLhRhP+rwapNMmyE3tE7e2EeEIV8X6YVfOODlCUbg==',
  'U2FsdGVkX181DnPRmCbp6NePNHeHRfh3dAO9dMMSApKdvNpIEcK11CYuqjyI04DU4TRuktcSduxWej8OGCz9ZA==',
  'U2FsdGVkX19NYwIf1jzNr2ghhC7bH1/H36TLGsiUKSopzfhdHB4aSa2RczWmSdN35ZwZXJ18cha9qX1vLO1BpQ==',
  'U2FsdGVkX18kqQVkl8zGUA8schCVAm6NWNM0q/bCV7dHyUJoy8JPbRms4IIsFNU4Ahx6ffx0FVYsOIatS98WjA==',
  "U2FsdGVkX18y9RiV+sdQG+dNc09ETZfLddhx6sEu10zP07S14C9X4cdXXRtwJ+Pa+x2zycwllBLV9opSgQ9Cjg=="
];

export const PROCESS_STAGE = {
  INIT: 'INIT',
  VALIDATE_OTP: 'VALIDATE_OTP',
  FETCH_BENEFICIARY: 'FETCH_BENEFICIARY',
  FETCH_SLOTS: 'FETCH_SLOTS',
  TRIGGER_CAPTCHA: 'TRIGGER_CAPTCHA',
  SCHEDULE: 'SCHEDULE',
  SLOT_BOOKED: 'SLOT_BOOKED',
  ERROR: 'ERROR',
  EXISTING_BOOKING: 'EXISTING_BOOKING',
  BOOKING_FAILED: 'BOOKING_FAILED',
  VACCINATED: 'VACCINATED'
};

export const API_URLS = {
  [PROCESS_STAGE.INIT]: 'https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP',
  [PROCESS_STAGE.VALIDATE_OTP]: 'https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp',
  [PROCESS_STAGE.FETCH_BENEFICIARY]: 'https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries',
  [PROCESS_STAGE.TRIGGER_CAPTCHA]: 'https://cdn-api.co-vin.in/api/v2/auth/getRecaptcha',
  [PROCESS_STAGE.SCHEDULE]: 'https://cdn-api.co-vin.in/api/v2/appointment/schedule',
  [PROCESS_STAGE.FETCH_SLOTS]: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict'
};

export const ALLOWED_NAME_EDITS = 3;

export const SLOT_FILTER = {
  MIN_AGE: 45,
  MIN_CAPACITY: 10
};

export const ERROR_CODE = {
  NO_BENEFICIARY: 'NO_BENEFICIARY',
  NO_SLOT: 'NO_SLOT',
  INVALID_OTP: 'INVALID_OTP',
  INVALID_CAPTCHA: 'INVALID_CAPTCHA',
  EXISTING_BOOKING: 'EXISTING_BOOKING',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

export const COWIN_ERROR_CODE = {
  [ERROR_CODE.EXISTING_BOOKING]: 'APPOIN0022',
  [ERROR_CODE.INVALID_OTP]: 'USRAUT0014',
  [ERROR_CODE.INVALID_CAPTCHA]: 'APPOIN0045',
  [ERROR_CODE.NO_BENEFICIARY]: 'APPOIN0001'
};

export const OTP_RETRY_TIME = 120;

export const MAX_BOOKING_ATTEMPT = 2;

export const ID_TYPE = {
  'Aadhaar Card': 'aadhaar_card',
  'PAN Card': 'pan_card'
};