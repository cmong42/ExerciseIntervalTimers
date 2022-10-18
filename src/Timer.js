import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { ProgressPlugin } from 'webpack';
import { isDisabled } from '@testing-library/user-event/dist/utils';


function Timer(props) {
  let audio = new Audio("http://www.hithergatemusic.com/iamsd/baegcdthipc.wav")
  let [timer, setTimer] = useState(30)
  let [pauseTimer, setPauseTimer] = useState(true)

    useEffect(()=>{
      if (timer>0 && !pauseTimer){
          setTimeout(() => {
          setTimer(timer-1)
          console.log(timer)
        }, 1200)
      }else{
        setTimer(timer)
        setPauseTimer(true)
        return () => clearTimeout(timer);
      }

      if (timer<=1){
        audio.play()
      }
    }, [timer, pauseTimer, audio])

function pauseTimerOnClick(){
  setPauseTimer(!pauseTimer)
}

  return (
    <form>
    <fieldset disabled={props.isDisabled}>
    <div className="timerDiv text-center">
      <h1 contentEditable="true">Title</h1>
      <h2>{timer}<br/>seconds</h2>
      <button className="btn btn-outline-secondary" disabled={!pauseTimer} onClick={()=>setTimer(timer+1)}>+</button><button className="btn btn-outline-secondary" disabled={!pauseTimer} onClick={()=>setTimer(timer-1)}>-</button>
      <br/>
      <button className={pauseTimer?"btn btn-success":"btn btn-danger"} id="pauseButton" onClick={pauseTimerOnClick}>{pauseTimer?"Start":"Stop"}</button>
    </div>
    </fieldset>
    </form>
  );
}

export default Timer;
