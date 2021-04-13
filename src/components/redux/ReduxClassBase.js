import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testDispatchWithAction } from '../../redux/actions';
import { TEST } from '../../redux/actiontypes';
import PageTitle from '../pageTitle/PageTitle';

class ReduxClassBase extends Component {
  render() {
    return (
      <div className='container'>
        <PageTitle title='Redux Class Base' />
        <p>Test Redux : {this.props.testRedux}</p>
        <hr/>
        <button onClick={this.props.testDispatch}>Test Dispatch</button>
        <button onClick={this.props.testDispatchWithAction}>Test Dispatch With Action</button>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  console.log('IN COMPONENT', state)

  return {
    testRedux: state.testRedux
  }
}


const mapDispatchToProps = (dispatch) =>{
  console.log('IN COMPONENT', dispatch)

  return {
    testDispatch : () =>{
      dispatch({type: TEST, value: 'Test dispatch'})
    },
    testDispatchWithAction: ()=>{
      dispatch(testDispatchWithAction('Test dispatch Width Action'))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxClassBase);
