import * as actionTypes from './actionTypes';

const contextReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TEST_CONTEXT:
      return {
        ...state,
        testContext: 'Hello Context',
      };
    case actionTypes.TEST_CONTEXT_BY_VALUE:
      return {
        ...state,
        testContext: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};

export default contextReducer;
