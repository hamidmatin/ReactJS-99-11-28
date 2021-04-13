import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../pageTitle/PageTitle';

class Admin extends Component {
  render() {
    return (
      <div className='container'>
        <PageTitle title='Admin Page' />
        <hr />
        <p>Test Redux : {this.props.testRedux}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testRedux: state.testRedux,
  };
};
export default connect(mapStateToProps)(Admin);
