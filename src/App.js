import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Norfolk" />
        <footer>
          <a
            href="https://github.com/LavRed/react-weather-app.git"
            target="noopener"
          >
          Open Source Code {" "}
          </a>
          by LaVisha Redmon
        </footer>
      </div>
    </div>
  );
}

export default App;
