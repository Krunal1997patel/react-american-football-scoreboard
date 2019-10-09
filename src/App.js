//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  let [home, setHome] = useState(0);
  let [away, setAway] = useState(0);
  let [quarter, setQuarter] = useState(0);
  let [down, setDown] = useState(0);
  let [toGo, setToGO] = useState(100);

  function rest(){
    setAway(0);
    setHome(0);
    setQuarter(0);
    setDown(0);
    setToGO(100);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow  quarter={quarter} down={down} toGo={toGo}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHome(home + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHome(home + 3)}>Home Field Goal</button>
          <br></br>
          <button className="awayButtons__fieldGoal" onClick={() => setDown(down + 1)}>Down</button>
          <button className="awayButtons__fieldGoal" onClick={() => setToGO(toGo - 1)}>To Go</button>
        </div>
        <div>
          <button onClick={()=> rest()}>Rest Everything</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAway(away + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAway(away + 3)}>Away Field Goal</button>
          <br></br>
          <button className="awayButtons__fieldGoal" onClick={() => setQuarter(quarter+ 1)}>Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
