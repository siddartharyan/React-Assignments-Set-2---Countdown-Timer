import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  let [time, setTime] = useState(0);
  const handleKeydown = (event) => {
    const input = document.getElementById("timeCount").value;
    if (input.length === 0) {
      return;
    }
    if (Number(input) === 0) {
      return;
    }
    const key = event.keyCode;
    if (key !== 13) {
      return;
    }
    setTime(Number(input));
  };

  const tick = () => {
    if (time === 0) {
      return;
    }
    setTime(time - 1);
  };

  useEffect(() => {
    const id = setInterval(tick, 1000);
    return () => {
      clearInterval(id);
    };
  }, [time]);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeydown} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
