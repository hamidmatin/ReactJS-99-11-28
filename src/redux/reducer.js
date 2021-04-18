import * as actionTypes from './actiontypes';

const initState = {
  testRedux: 'Empty',
  isLoading: true,
  albums: [],
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
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    case actionTypes.ALBUMS_LOAD_ALL:
      const newState = { ...state };
      fetch('https://jsonplaceholder.typicode.com/albums')
        .then((resp) => resp.json())
        .then((result) => {
          newState.albums = result;
        });
      return newState;

    case actionTypes.ALBUMS_LOAD_ALL_ASYNC:
      console.log(action.value);
      return {
        ...state,
        albums: action.value,
      };

    case actionTypes.ALBUMS_DELETE_ITEM:
      return {
        ...state,
        albums: state.albums.filter((album) => album.id !== action.value),
      };
    case actionTypes.ALBUMS_DELETE_ITEM_ASYNC:
      return {
        ...state,
        albums: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
