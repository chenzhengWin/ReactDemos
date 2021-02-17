import React, { useState , useEffect } from 'react';
function Example2(){
    const [ count , setCount ] = useState(0);
    const [name,setName]=useState('清颖');
    //---关键代码---------start-------
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
    })
    useEffect(()=>{
      console.log('清颖')
    })
    //---关键代码---------end-------

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <p>不做改变的state:{name}</p>
        </div>
    )
}
export default Example2;