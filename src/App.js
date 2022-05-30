import './App.css';
import { InputForm } from './InputForm.tsx';

function App() {


  return (
    <div className="App">
      
        <button onClick={() => alert("hello react")}>ClickMe!</button>
        <a href='https://github.com/Janek9709/React-kurs'>LinkDoRepo</a>


        <header className='App-header'>
            <InputForm defaultValue={'hello form'} />
        </header>


    </div>
  );
}

export default App;
