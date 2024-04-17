import React, { useState } from "react";
import "./App.css";

function App() {
  const [milliseconds, setMilliseconds] = useState("");
  const [result, setResult] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  function millisecondConverter(ms) {
    if (!ms || isNaN(ms)) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setMilliseconds(inputValue);
    setResult(millisecondConverter(inputValue));
  };

  return (
    <div className="App">
      <form>
        time in milliseconds
        <label>
          <input type="number" value={milliseconds} onChange={handleInputChange} placeholder="ms" />
        </label>
      </form>
      <p className="output">
        {result.days} days, {result.hours} hours, {result.minutes} minutes, and {result.seconds} seconds
      </p>
    </div>
  );
}

export default App;
