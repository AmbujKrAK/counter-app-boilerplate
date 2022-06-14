import "./App.css";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  let handleChange = (event) => {
    setCount(event.target.value);
  }

  return (
    <div className="App">
      <h2 data-testid="counter-value">{count}</h2>
      <button data-testid="counter-decrement-button" onClick={()=> setCount(count + 1)}>+</button>
      <button data-testid="counter-increment-button" onClick={()=> setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
