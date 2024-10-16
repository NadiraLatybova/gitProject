import {useState} from "react";
import './App.css'

function App() {

  const [count,setCount] = useState(0)

  function handleIncrement() {
    setCount(prev => prev + 1)

  }
  function handleDecrement() {
    setCount(prev => prev - 1)

  }
  return (
    <div className='wrapper'>
    <h1 className='heading'>{count}</h1>
      <div className="buttons">
        <button onClick={handleIncrement} className='button'>+</button>
        <button onClick={handleDecrement} className='button'>-</button>
        <h2 className='heading2'>это каунтер</h2>
      </div>
    </div>
  );
}

export default App;
