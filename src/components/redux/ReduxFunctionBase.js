import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTestContext } from '../../context/TestContext';
import { testDispatchWithActionHook } from '../../redux/actions';
import { TEST_HOOK } from '../../redux/actiontypes';

import PageTitle from '../pageTitle/PageTitle';

export default function ReduxFunctionBase() {
  const testRedux = useSelector((state) => state.testRedux);
  const dispatch = useDispatch();

  
  const { testState } = useTestContext();
  return (
    <div className='container'>
      <PageTitle title='Redux Function Base' />

      <p>Test Redux : {testRedux}</p>
      
      <p>Test Context : {testState.testContext}</p>
      <hr />
      <button
        onClick={() => {
          dispatch({
            type: TEST_HOOK,
            value: 'Test dispatch in function base',
          });
        }}
      >
        Test Dispatch
      </button>
      <button
        onClick={() => {
          dispatch(
            testDispatchWithActionHook(
              'Test dispatch Width Action in function base'
            )
          );
        }}
      >
        Test Dispatch With Action
      </button>
    </div>
  );
}
