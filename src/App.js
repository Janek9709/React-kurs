import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [message, setMessage] = useState(null);

useEffect(() => {
  if(message !== null)
    alert(message);
}, [message])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setMessage("hello react")}>ClickMe!</button>
        <a href='https://github.com/Janek9709/React-kurs'>LinkDoRepo</a>
      </header>
    </div>
  );
}

export default App;
