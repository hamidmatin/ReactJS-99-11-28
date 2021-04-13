import * as actionTypes from './actiontypes';

const initState = {
  testRedux: 'Empty',
};

const reducer = (state = initState, action) => {
  console.log('IN REDUCER', state);
  console.log('IN REDUCER', action);

  switch (action.type) {
    case actionTypes.TEST:
      return {
        ...state,
        testRedux: <b>{action.value}</b>,
      };

    case actionTypes.TEST_DISPATCH:
      return {
        ...state,
        testRedux: <i>{action.value}</i>,
      };
    default:
      return state;
  }
};

export default reducer;
