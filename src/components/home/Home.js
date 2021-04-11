import React from 'react';

export default function Home() {
  const myFunction = (min, max) => {
    const RND = min + Math.floor(Math.random() * (max - min));

    console.log(RND);

    const sum = (x, y) => {
      return x * y + RND;
    };

    console.log(sum(5, 2));

    return sum;
  };

  const test = () => {
    const result = myFunction(25, 50);
    console.log(result);

    console.log(result(5, 2));
    console.log(result(3, 4));
  };

  const counter = (initCounter) => {
    let counter = initCounter;

    const increment = () => {
      counter++;
      return counter;
    };

    const decrement = () => {
      counter--;
      return counter;
    };

    return { increment, decrement };
  };

  const myCounter = counter(25);
  console.log(myCounter);

  const { increment, decrement } = myCounter;

  const incrementCounterHandler = () => {
    let c = increment();
    console.log(c);
  };
  const decrementCounterHandler = () => {
    let c = decrement();
    console.log(c);
  };
  return (
    <div className={['container', 'mt-5'].join(' ')}>
      <h3 className='title'>
        <span>Home</span>
      </h3>
      <button onClick={test}>Test</button>
      <button onClick={incrementCounterHandler}>Increment</button>
      <button onClick={decrementCounterHandler}>Decrement</button>
      <p>This is a react case study project.</p>
    </div>
  );
}
