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

/****************/
export const loadAllAlbums = () => {
  return {
    type: actionTypes.ALBUMS_LOAD_ALL,
  };
};

export const loadAllAlbumsAsync = () => {
  return async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const allAlbums = await response.json();
    dispatch({ type: actionTypes.ALBUMS_LOAD_ALL_ASYNC, value: allAlbums });
  };
};

export const deleteAlbum = (id) => {
  return {
    type: actionTypes.ALBUMS_DELETE_ITEM,
    value: id,
  };
};

export const deleteAlbumAsync = (id) => {
  return async (dispatch, getState) => {
    /**** */
    // async opertors
    /**** */
    let newAlbums = getState().albums.filter((album) => album.id !== id)
   
    dispatch({
      type: actionTypes.ALBUMS_DELETE_ITEM_ASYNC,
      value: newAlbums,
    })
  };
};
