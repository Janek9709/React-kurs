import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => alert("hello react")}>ClickMe!</button>
        <a href='https://github.com/Janek9709/React-kurs'>LinkDoRepo</a>
      </header>
    </div>
  );
}

export default App;
