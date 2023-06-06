import React from 'react';
import './../styles/SessionController.css';

function SessionController({ sessionLength, setSessionLength }) {
  const decrementSessionLength = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  };

  const incrementSessionLength = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
  };

  return (
    <div id="session-label">
      <h2>Session Length</h2>
      <button id="session-decrement" onClick={decrementSessionLength}>-</button>
      <span id="session-length">{sessionLength}</span>
      <button id="session-increment" onClick={incrementSessionLength}>+</button>
    </div>
  );
}

export default SessionController;
