import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Timer from './Timer';
import 'bootstrap/dist/css/bootstrap.css';
import pauseTimer from "./Timer.js"

function App() {

  let [numTimers, setNumTimers] = useState(1)
  let [currentTimer, setCurrentTimer] = useState(0)

  function getTimers(){
    const array = []
    for (let i = 0; i<numTimers; i++){
      array.push(<div className="col-sm"><Timer key={i} id={i} isDisabled={!(i===currentTimer)}></Timer></div>)
    }
    if (document.getElementById(currentTimer).h2=="0"){
      setCurrentTimer(currentTimer+1)
    }
    return array
  }

  return (
    <div id="renderDiv" className="container">
      <h2>Add or Remove Exercise</h2>
      <button className="btn btn-outline-secondary" disabled={!pauseTimer} onClick={()=>setNumTimers(numTimers+1)}>+</button>{numTimers}<button className="btn btn-outline-secondary" disabled={!pauseTimer} onClick={()=>{numTimers>1?setNumTimers(numTimers-1):setNumTimers(numTimers)}}>-</button>
      <div className='row'>
      {getTimers()}
      </div>
    </div>
  );
}

export default App;
