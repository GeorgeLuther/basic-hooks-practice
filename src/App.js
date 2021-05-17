import React, {useState, useEffect} from 'react';

function App(){
  const [count, setCount] = useState(0);

  useEffect(()=> {
    document.title = `clicked ${count} times`;
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=> setCount(count+1)}>
        Increment me
      </button>
      <button onClick={()=> setCount(count-1)}>
        Decrement me
      </button>
    </div>
  )
}

export default App;
