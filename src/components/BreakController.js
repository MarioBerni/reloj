import React from 'react';
import './../styles/BreakController.css';

function BreakController({ breakLength, setBreakLength }) {
  const decrementBreakLength = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const incrementBreakLength = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };

  return (
    <div id="break-label">
      <h2>Break Length</h2>
      <button id="break-decrement" onClick={decrementBreakLength}>-</button>
      <span id="break-length">{breakLength}</span>
      <button id="break-increment" onClick={incrementBreakLength}>+</button>
    </div>
  );
}

export default BreakController;
