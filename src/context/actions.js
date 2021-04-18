import * as actiontypes from './actionTypes'
export const testContextAction = () =>{
  return {
    type: actiontypes.TEST_CONTEXT
  }
}
export const testContextActionByVale = (message) =>{
  return {
    type: actiontypes.TEST_CONTEXT_BY_VALUE,
    value: message
  }
}