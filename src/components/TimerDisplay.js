import React from 'react';
import './../styles/TimerDisplay.css';

function TimerDisplay({
  timerLabel,
  timeRemaining,
  setTimerRunning,
  setCurrentTimer,
  setTimeRemaining,
  sessionLength,
  breakLength,
}) {
  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    return `${minutes}:${seconds}`;
  };

  const playBeep = () => {
    document.getElementById('beep').play();
  };

  if (timeRemaining === 0) {
    playBeep();
    setTimerRunning(false);
    if (timerLabel === 'session') {
      setCurrentTimer('break');
      setTimeRemaining(breakLength * 60);
    } else {
      setCurrentTimer('session');
      setTimeRemaining(sessionLength * 60);
    }
  }

  return (
    <div id="timer-label">
      <h2>{timerLabel}</h2>
      <p id="time-left">{formatTime(timeRemaining)}</p>
    </div>
  );
}

export default TimerDisplay;
