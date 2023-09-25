import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // let counter = 5;

  const addValue = () => {
    // console.log("clicked", counter);
    // counter = counter + 1;

    // value is increment but ui is not updated
    if (counter === 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  };

  const subValue = () => {
    if (counter === 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  const resetValue = () => {
    setCounter(0);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <div className="outer-div">
        <button className="button" onClick={addValue}>
          Add value
        </button>
        <br />
        <button className="button" onClick={subValue}>
          remove value
        </button>
        <br />
        <button className="button" onClick={resetValue}>
          reset value
        </button>
      </div>
    </>
  );
}

export default App;
