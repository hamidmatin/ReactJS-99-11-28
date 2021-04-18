import React from 'react';
import { useTestContext } from '../../context/TestContext';
import { testContextAction, testContextActionByVale } from '../../context/actions';
import PageTitle from '../pageTitle/PageTitle';

export default function TestContextPage() {
  console.log(useTestContext());

  const { testState, dispatch } = useTestContext();

  return (
    <div className='container'>
      <PageTitle title='Test For Context' />

      <p>Test Context : {testState.testContext}</p>
      <hr />
      <button onClick={()=>{
        dispatch(testContextAction())
      }}>Change</button>
      <button onClick={()=>{
        dispatch(testContextActionByVale('Hello again Context'))
      }}>Change</button>
    </div>
  );
}
