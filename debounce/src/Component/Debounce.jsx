import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";



export default function Debounce(){

    let [value,setValue] = useState("");
    let [items,setItems] = useState([]);

    useEffect(() => {

        let delayDebounce = setTimeout(()=>{
            axios.get(`https://demo.dataverse.org/api/search?q=${value}`)
            // .then((res)=> {
            //     return res.json(); 
            // })
            .then((data)=>{
                let res = data;
                console.log(res.data.data.items)
                // console.log(res.data.items)
                setItems(res.data.data.items)

            })
            // console.log(value)
            // console.log(items)
        },1000);
        return () => clearTimeout(delayDebounce);
        

    },[value]);

    const handleChange = (e) =>{
        setValue(e.target.value);
        // setItems(e.target.items)

    }

    
    return (
        <>
            <input type ='text' values ={value} onChange={handleChange}/>
            
            <div>
            { items !== undefined &&
                items.map((item) => {
                return(
                <li>{item.name}</li>
                    ); 
                })
        }    
      </div>
      </>
    )
}




// let a = [2,64,6,3,7,7,3];
// let b = 3
