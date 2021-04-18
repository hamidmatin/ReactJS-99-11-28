import { createContext, useReducer, useContext } from 'react';
import contextReducer from './reducer';


const initState = {
  testContext: 'Empty',
};

export const TestContext = createContext();

const TestContextProvider = (props) => {
  const [testState, dispatch] = useReducer(contextReducer, initState);
  return (
    <TestContext.Provider  value={{ testState, dispatch }}>
      {props.children}
    </TestContext.Provider>
  );
};

export const useTestContext = () => useContext(TestContext);
export default TestContextProvider;