import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <p>
        This project was coded by Samaneh Mokhtari and it is <a>open-sourced</a>
      </p>
    </div>
  );
}

export default App;
