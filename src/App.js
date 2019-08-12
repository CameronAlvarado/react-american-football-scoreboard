//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

// const homeStateHook =  

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeCount, setCountH] = useState(0); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValue
  const [awayCount, setCountA] = useState(0); // Give these better names, and decide whether you want to pass an initial score into the state hook as the initialValue
  // const [quartCount, setCountQ] = useState(0);

  const [quartCount, setCountQ] = useState(0);

  function addQuarter() {
      if (quartCount < 4) {
      return quartCount + 1
    }
    else if (quartCount === 4) {
      return quartCount - 3
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow quartCount = {quartCount}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setCountH(homeCount + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setCountH(homeCount + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"  onClick={() => setCountA(awayCount + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"  onClick={() => setCountA(awayCount + 3)}>Away Field Goal</button>
        </div>
        <div className="quarterButton">
          <button className="quarterButton__advance"  onClick={() => setCountQ(addQuarter())}>Advance Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;