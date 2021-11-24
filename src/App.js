import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

   function  onDecrement() {
        if(counter > 0) {
          setCounter(counter - 1);
        }
   }
  return (
    <div className="App">

        <h1>This is counter app</h1>
        <div id="counter-value">{counter}</div>
        <button id="increment-btn" onClick={()=> {setCounter(counter + 1)}}>Increment</button>
        <button id="decrement-btn" onClick={onDecrement}>Decrement</button>
    </div>
  );
}

export default App;
