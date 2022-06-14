import "./App.css";

function App() {

  const [counter, setCounter] = useState(0);

  let handleChange = (event) => {
    setCounter(event.target.value);
  }

  return (
    <div className="App">
      <h2 data-testid="counter-value">X</h2>
      <button data-testid="counter-decrement-button" onClick={()}>+</button>
      <button data-testid="counter-increment-button" onClick={()}>-</button>
    </div>
  );
}

export default App;
