const initState = {
  testRedux: 'Empty',
};

const reducer = (state = initState, action) => {
  console.log('IN REDUCER', state);
  console.log('IN REDUCER', action);

  if (action.type === 'test') {
    return {
      ...state,
      testRedux: <b>{action.value}</b>,
    };
  } else if (action.type === 'test-dispatch') {
    return {
      ...state,
      testRedux: <i>{action.value}</i>,
    };
  }
  return state;
};

export default reducer;
