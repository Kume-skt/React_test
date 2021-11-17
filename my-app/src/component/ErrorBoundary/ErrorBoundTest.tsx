import React, { useState } from 'react';
import ErrorBoundary from '.';

export const ErrorBoundaryTester = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Red />
      <Green />
      <Blue />
    </div>
  );
};

const BadComponent = () => {
  throw new Error('something went wrong');
};

const Red = () => {
  const [count, setCount] = useState(0);
  const setData = () => {
    if (count == 5) throw new Error('something went wrong');
    setCount(count + 1);
  };
  console.log(count);

  return (
    <div style={{ backgroundColor: 'red', flex: 1, height: 100 }}>
      Red Area
      <ErrorBoundary>
        <button onClick={() => setData()}>+++++++</button>
        {count}
      </ErrorBoundary>
    </div>
  );
};

const Green = () => {
  return (
    <div style={{ backgroundColor: 'green', flex: 1, height: 100 }}>
      Green Area
    </div>
  );
};
const Blue = () => {
  return (
    <div style={{ backgroundColor: 'blue', flex: 1, height: 100 }}>
      Blue Area
    </div>
  );
};
