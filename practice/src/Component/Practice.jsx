import { useEffect } from "react";
import { useState } from "react";


export default function Practice(){
    // State: a counter value
    let [count,setCount] = useState(0);


    // Action: code that causes an update to the state when something happens
    const handleIncrement = ()=>{
        setCount(count + 1)
    }
    const handleDecrement =()=>{
        if(count===0){
            return
        }
        setCount(count - 1)
    }

    useEffect(()=>{
        document.title = `Updated count :${count}`

    },[count])


    // View: the UI definition
    return (
        <>
        <h2>Counter : {count}</h2>
         <button onClick={handleIncrement}>+</button>
         <button onClick={handleDecrement}>-</button>

        </>
       
    )
}
