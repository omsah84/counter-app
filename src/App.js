import React, { useState } from 'react';
import './App.css';

function App() {

  let [count, setCount] = useState(0);

  const onClickReset = () => {
    setCount(0);
  };

  const onClickInc = () => {
    // let int = 1;
    setCount(count + 1);
  }

  const onClickDec = () => {
    // let dec = 1;
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      setCount(0);
    }
  }
  return (
    <>
    <div className='container'>
      <div className='app'>
        <div className='reset_btn'>
          <button onClick={onClickReset} className='btn1'>Reset</button>
        </div>
        <div className="counter_section">
          <span className='result_style'>{count}</span>
        </div>
        <div className='increment_decrement'>
          <button className='btn' onClick={onClickInc}>+</button>
          <button className='btn' onClick={onClickDec}>-</button>
        </div>
      </div>
    </div>
    <h2 className='center'>OM SAH</h2>
    </>
  )

}

export default App;
