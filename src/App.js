import logo from './logo.svg';
import './App.css';
import Welcome from "./pages/welcome/welcome"
import Clock from "./pages/clock/clock"
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* test部分 */}
      <main>
        <Welcome name="lanjuan" />
        <Clock />
      </main>
    </div>
  );
}

export default App;
