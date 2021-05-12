import React,{useState,useEffect} from 'react';
import {Button} from 'antd'

const HooksDemoFirst=()=>{
  const [count,setCount]=useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log('更新')
  });
  return(
    <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    </div>
  )
}

export default HooksDemoFirst;