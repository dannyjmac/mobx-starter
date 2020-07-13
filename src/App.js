import React from "react";
import { observer } from "mobx-react";
import { store } from "./store";
import "./App.css";

const App = observer(() => {
  const { count, increment, doubleCount } = store;
  return (
    <div className="App">
      <header className="App-header">
        <p>Mobx competency</p>
        <button onClick={increment}>Increment count</button>
        <p>
          Current count: <span>{count}</span>
        </p>
        <p>
          Double count is: <span>{doubleCount}</span>
        </p>
      </header>
    </div>
  );
});

export default App;
