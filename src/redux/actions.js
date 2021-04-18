import * as actionTypes from './actiontypes';

export const testDispatchWithAction = (value) => {
  return {
    type: actionTypes.TEST_DISPATCH,
    value: value,
  };
};

export const testDispatchWithActionHook = (value) => {
  return {
    type: actionTypes.TEST_DISPATCH_HOOK,
    value: value,
  };
};

export const SetLoadingOn = () => {
  return {
    type: actionTypes.LOADING_ON,
  };
};
export const SetLoadingOff = () => {
  return {
    type: actionTypes.LOADING_OFF,
  };
};
