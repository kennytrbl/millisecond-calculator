import React, { useState } from "react";
import "./App.css";

function App() {
  const [milliseconds, setMilliseconds] = useState("");
  const [result, setResult] = useState({ days: "", hours: "", minutes: "", seconds: "" });

  function millisecondConverter(ms) {
    if (!ms || isNaN(ms)) {
      return { days: "", hours: "", minutes: "", seconds: "" };
    }

    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return {
      days: days.toString(),
      hours: hours.toString(),
      minutes: minutes.toString(),
      seconds: seconds.toString(),
    };
  }

  const handleInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setMilliseconds(inputValue);
    setResult(millisecondConverter(inputValue));
  };

  const handleInputChange2 = (event) => {
    const inputValue = parseInt(event.target.value);
    const ms =
      inputValue * 24 * 60 * 60 * 1000 +
      (result.hours !== "" ? parseInt(result.hours) : 0) * 60 * 60 * 1000 +
      (result.minutes !== "" ? parseInt(result.minutes) : 0) * 60 * 1000 +
      (result.seconds !== "" ? parseInt(result.seconds) : 0) * 1000;
    setMilliseconds(ms);
    setResult(millisecondConverter(ms));
  };

  const handleInputChange3 = (event) => {
    const inputValue = parseInt(event.target.value);
    const ms =
      (result.days !== "" ? parseInt(result.days) : 0) * 24 * 60 * 60 * 1000 +
      inputValue * 60 * 60 * 1000 +
      (result.minutes !== "" ? parseInt(result.minutes) : 0) * 60 * 1000 +
      (result.seconds !== "" ? parseInt(result.seconds) : 0) * 1000;
    setMilliseconds(ms);
    setResult(millisecondConverter(ms));
  };

  const handleInputChange4 = (event) => {
    const inputValue = parseInt(event.target.value);
    const ms =
      (result.days !== "" ? parseInt(result.days) : 0) * 24 * 60 * 60 * 1000 +
      (result.hours !== "" ? parseInt(result.hours) : 0) * 60 * 60 * 1000 +
      inputValue * 60 * 1000 +
      (result.seconds !== "" ? parseInt(result.seconds) : 0) * 1000;
    setMilliseconds(ms);
    setResult(millisecondConverter(ms));
  };

  const handleInputChange5 = (event) => {
    const inputValue = parseInt(event.target.value);
    const ms =
      (result.days !== "" ? parseInt(result.days) : 0) * 24 * 60 * 60 * 1000 +
      (result.hours !== "" ? parseInt(result.hours) : 0) * 60 * 60 * 1000 +
      (result.minutes !== "" ? parseInt(result.minutes) : 0) * 60 * 1000 +
      inputValue * 1000;
    setMilliseconds(ms);
    setResult(millisecondConverter(ms));
  };

  return (
    <div className="App">
      <form>
        <label>
          time in milliseconds
          <input type="number" value={milliseconds} onChange={handleInputChange} placeholder="ms" />
        </label>
      </form>
      <form>
        <label>
          days
          <input type="number" value={result.days} onChange={handleInputChange2} placeholder="days" />
        </label>
      </form>
      <form>
        <label>
          hours
          <input type="number" value={result.hours} onChange={handleInputChange3} placeholder="hrs" />
        </label>
      </form>
      <form>
        <label>
          minutes
          <input type="number" value={result.minutes} onChange={handleInputChange4} placeholder="min" />
        </label>
      </form>
      <form>
        <label>
          seconds
          <input type="number" value={result.seconds} onChange={handleInputChange5} placeholder="sec" />
        </label>
      </form>
    </div>
  );
}

export default App;
