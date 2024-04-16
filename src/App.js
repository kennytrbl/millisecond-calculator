import React, { useState } from "react";
import "./App.css";

function App() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [result, setResult] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  function millisecondConverter(m) {
    const days = Math.floor(m / (1000 * 60 * 60 * 24));
    const hours = Math.floor((m % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((m % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((m % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const convertedResult = millisecondConverter(milliseconds);
    setResult(convertedResult);
  };

  const handleInputChange = (event) => {
    setMilliseconds(event.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          how many milliseconds?
          <br></br>
          <input type="number" value={milliseconds} onChange={handleInputChange} />
        </label>
        <button className="submitButton" type="submit">
          submit
        </button>
      </form>
      <p className="output">
        {" "}
        {result.days} days, {result.hours} hours, {result.minutes} minutes, and {result.seconds} seconds
      </p>
    </div>
  );
}

export default App;
