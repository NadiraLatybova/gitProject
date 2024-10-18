import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(prev => prev + 1);
  }

  function handleDecrement() {
    setCount(prev => prev - 1);
  }

  function handleMultiply() {
    setCount(prev => prev * 2);
  }

  function handleDivide() {
    setCount(prev => prev / 2);
  }

  return (
      <div className="wrapper">
        <h1 className="heading">{count}</h1>
        <div className="buttons">
          <button className="button" onClick={handleIncrement}>+</button>
          <button className="button" onClick={handleDecrement}>-</button>
          <button className="button" onClick={handleMultiply}>*</button>
          <button className="button" onClick={handleDivide}>/</button>
        </div>
        <h2 className="heading2">Я БЭТМЕН</h2>
      </div>
  );
}

export default App;