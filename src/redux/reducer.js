import * as actionTypes from './actiontypes';

const initState = {
  testRedux: 'Empty',
  isLoading: true
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
    case actionTypes.TEST_HOOK:
      return {
        ...state,
        testRedux: <b className='text-danger'>{action.value}</b>,
      };
    case actionTypes.TEST_DISPATCH_HOOK:
      return {
        ...state,
        testRedux: <i className='text-primary'>{action.value}</i>,
      };

    case actionTypes.LOADING_ON:
      return{
        ...state,
        isLoading: true
      }

    case actionTypes.LOADING_OFF:
      return{
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};

export default reducer;
