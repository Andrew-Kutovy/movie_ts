import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const changeCount = (type:string):number => {
    setCount(type === 'increment'? count+1: count-1)
    return count
  }
  return (
    <div>
      count: {count}
      <button onClick={()=>changeCount('increment')}>+1</button>
      <button onClick={()=>changeCount('decrement')}>-1</button>
    </div>
  );
}

export default App;
