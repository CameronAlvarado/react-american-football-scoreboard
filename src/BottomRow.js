import React from "react";
import "./App.css";

function BottomRow(props) {

  // const [quartCount, setCountQ] = useState(0);

  // function addQuarter() {
  //     if (quartCount < 4) {
  //     return quartCount + 1
  //   }
  //   else if (quartCount === 4) {
  //     return quartCount - 3
  //   }
  // }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{props.quartCount}</div>
        {/* <button className="buttons"  onClick={() => setCountQ(addQuarter())}>Advance Quarter</button> */}
      </div>
    </div>
  );
};

export default BottomRow;