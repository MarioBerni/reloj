import React from 'react';
import './../styles/TimerControls.css';

function TimerControls({ resetTimer, timerRunning, setTimerRunning }) {
  const startStopTimer = () => {
    setTimerRunning(!timerRunning);
  };

  return (
    <div id='button'>
      <button id="start_stop" onClick={startStopTimer}>
        {timerRunning ? 'Stop' : 'Start'}
      </button>
      <button id="reset" onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default TimerControls;
