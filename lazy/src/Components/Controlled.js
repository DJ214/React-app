import { useState } from "react"


export default function Controlled(){ // Controlling the input with state 
    let [text,setText] = useState("");
    let handleChange = (e)=>{
        setText(e.target.value)
    }
    return (
        <div>
            <input type = "text" placeholder="Controlled"
            value = {text} onChange={handleChange}></input>
        </div>
    )
}