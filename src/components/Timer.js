import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

function Timer(steps) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [nextTime, setNextTime] = useState(0); 

  //step of steps? 
  function test() {
    for (let step of steps.steps) {
      console.log("Current Step " + step[0]);
      if (parseInt(step[0]) === currentStep) {
      }
    }
  }

  test(); 

  const buttonActiveStyle =
    "button-primary-" + (isActive ? "active" : "inactive");

  function toggleIsActive() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  function updateStep(seconds) {
    if (steps) {
        console.log("steps " + steps[0]); 
    }

    // if (seconds < 45) {
    //   setStep("Bloom phase");
    // } else if (seconds >= 45 && seconds < 75) {
    //   setStep("Pour 60%");
    // }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        updateStep(seconds);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);


  return (
    <div className={styles.timer}>
      <h1>{currentStep}</h1>
      <div className={styles.time}>{seconds}s</div>
      <div className="row">
        <button
          className={`${styles.button} ${styles[buttonActiveStyle]}`}
          onClick={toggleIsActive}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className={styles.button} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
