import * as actionTypes from './actiontypes'

export const testDispatchWithAction = (value) => {
  return {
    type: actionTypes.TEST_DISPATCH,
    value: value,
  };
};
