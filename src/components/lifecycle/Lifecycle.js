import React, { Component } from 'react';
import './Lifecycle.css';

export default class Lifecycle extends Component {
  constructor() {
    console.log('1. constructor');
    super();
    this.state = {
      counter: 0,
      show: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2., 5. getDerivedStateFromProps');
    console.log('props', props);
    console.log('state', state);

    if (state.counter > 9) {
      return { ...state, counter: 9 };
    } else if (state.counter < 0) return { ...state, counter: 0 };

    return null;
  }
  componentDidMount() {
    console.log('4. componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('6. shouldComponentUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);

    return nextState.counter <= 9 && nextState.counter >= 0;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('7. getSnapshotBeforeUpdate');
    return 'set value for snapshot or return null';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('8. componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('9. componentWillUnmount');
  }

  incrementCounterHandler = () => {
    this.setState({ ...this.state, counter: this.state.counter + 1 });
  };
  decrementCounterHandler = () => {
    this.setState({ ...this.state, counter: this.state.counter - 1 });
  };

  render() {
    console.log('3., 7. render');
    return (
      <div onClick={this.counterHandler}>
        <div className='text-center'>
          <h2>{this.props.message}</h2>
          <p>Counter = {this.state.counter}</p>
          <button onClick={this.incrementCounterHandler}>+</button>
          <button onClick={this.decrementCounterHandler}>-</button>
        </div>
      </div>
    );
  }
}
