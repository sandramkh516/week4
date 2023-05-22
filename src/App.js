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
        This project was coded by Samaneh Mokhtari and it is{" "}
        <a
          href="https://github.com/sandramkh516/week4"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </p>
    </div>
  );
}

export default App;
