import React, { useState, useEffect } from 'react';
import './App.css';
import TimerDisplay from './components/TimerDisplay';
import SessionController from './components/SessionController';
import BreakController from './components/BreakController';
import TimerControls from './components/TimerControls';

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerRunning, setTimerRunning] = useState(false);
  const [currentTimer, setCurrentTimer] = useState('session');
  const [timeRemaining, setTimeRemaining] = useState(sessionLength * 60);

  useEffect(() => {
    if (timerRunning && timeRemaining > 0) {
      const intervalId = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      
      return () => clearInterval(intervalId);
    } else if (timeRemaining === 0) {
      if (currentTimer === 'session') {
        setCurrentTimer('break');
        setTimeRemaining(breakLength * 60);
      } else {
        setCurrentTimer('session');
        setTimeRemaining(sessionLength * 60);
      }
    }
  }, [timerRunning, timeRemaining, sessionLength, breakLength, currentTimer]);

  const handleReset = () => {
    setTimerRunning(false);
    setCurrentTimer('session');
    setTimeRemaining(sessionLength * 60);
    setSessionLength(25);
    setBreakLength(5);
    // Reset the audio element
    const audioElement = document.getElementById('beep');
    audioElement.pause();
    audioElement.currentTime = 0;
  };

  return (
    <div className="App">
      <header className="App-header">
        <SessionController
          sessionLength={sessionLength}
          setSessionLength={setSessionLength}
        />
        <BreakController
          breakLength={breakLength}
          setBreakLength={setBreakLength}
        />
        <TimerDisplay
          sessionLength={sessionLength}
          breakLength={breakLength}
          timerLabel={currentTimer}
          timeRemaining={timeRemaining}
          timerRunning={timerRunning}
          setTimerRunning={setTimerRunning}
          setCurrentTimer={setCurrentTimer}
          setTimeRemaining={setTimeRemaining}
        />
        <TimerControls
          resetTimer={handleReset}
          timerRunning={timerRunning}
          setTimerRunning={setTimerRunning}
        />
        <audio
          id="beep"
          src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        />
      </header>
    </div>
  );
}

export default App;
