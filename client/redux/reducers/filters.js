import { DATE_RANGES, INTERNAL_DATE_SPEC, USER_DATE_SPEC } from '@components/common/CONSTANTS';
import moment from 'moment';

export const types = {
  UPDATE_START_DATE: 'UPDATE_START_DATE',
  UPDATE_END_DATE: 'UPDATE_END_DATE',
  UPDATE_REQUEST_TYPES: 'UPDATE_REQUEST_TYPES',
  UPDATE_REQUEST_STATUS: 'UPDATE_REQUEST_STATUS',
  UPDATE_NEIGHBORHOOD_COUNCIL: 'UPDATE_NEIGHBORHOOD_COUNCIL',
  SELECT_ALL_REQUEST_TYPES: 'SELECT_ALL_REQUEST_TYPES',
  DESELECT_ALL_REQUEST_TYPES: 'DESELECT_ALL_REQUEST_TYPES',
};

export const updateStartDate = startDate => ({
  type: types.UPDATE_START_DATE,
  payload: startDate,
});

export const updateEndDate = endDate => ({
  type: types.UPDATE_END_DATE,
  payload: endDate,
});

export const updateRequestTypes = typeId => ({
  type: types.UPDATE_REQUEST_TYPES,
  payload: typeId,
});

export const updateNcId = ncId => ({
  type: types.UPDATE_NEIGHBORHOOD_COUNCIL,
  payload: ncId,
});

export const updateRequestStatus = status => ({
  type: types.UPDATE_REQUEST_STATUS,
  payload: status,
});

const initialState = {
  // dateRange: null,
  // Always store dates using the INTERNAL_DATE_SPEC.
  startDate: moment(DATE_RANGES[0].startDate, USER_DATE_SPEC).format(INTERNAL_DATE_SPEC),
  endDate: moment(DATE_RANGES[0].endDate, USER_DATE_SPEC).format(INTERNAL_DATE_SPEC),
  councilId: null,
  requestTypes: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
  },
  requestStatus: {
    open: true,
    closed: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_START_DATE: {
      return {
        ...state,
        startDate: action.payload,
      };
    }
    case types.UPDATE_END_DATE: {
      return {
        ...state,
        endDate: action.payload,
      };
    }
    case types.UPDATE_REQUEST_TYPES:
      return {
        ...state,
        requestTypes: {
          ...state.requestTypes,
          [action.payload]: !state.requestTypes[action.payload],
        },
      };
    case types.UPDATE_NEIGHBORHOOD_COUNCIL:
      return {
        ...state,
        councilId: action.payload,
      };
    case types.UPDATE_REQUEST_STATUS:
      return {
        ...state,
        requestStatus: {
          ...state.requestStatus,
          [action.payload]: !state.requestStatus[action.payload],
        },
      };
    default:
      return state;
  }
};
