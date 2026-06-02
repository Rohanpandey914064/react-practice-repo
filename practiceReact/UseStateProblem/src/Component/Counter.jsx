import {useState} from "react";
function Counter(){
    const [count , setCount] = useState(100);
    const [text , setText] = useState("OFF");
    const [name , setName] = useState("");
    return (
        <>
            {/* <h1>{count}</h1>
            <button onClick={()=>((count < 7)?setCount(count+1):setCount(18))}>Add (+)</button>
            <button onClick={()=>((count > 0)?setCount(count-1):setCount(count))}>subtract (-)</button> */}

            {/* <p>{text}</p>
            <button onClick={()=>((text === "OFF")? setText("ON"):setText("OFF"))}>change</button> */}

            {/* <input 
                value={name} 
                placeholder="Enter your name"
                onChange={(e)=>{
                    setName(e.target.value)                
                }}
            />
            <button 
                onClick={()=>{
                        setName("")
                }}
            >
            Clear
            </button>
            <h1>Output : </h1>
            <p>{name}</p> */}

            <h1>{count}</h1>
            <button onClick={()=>(setCount(count - 10))}>Decrease</button>


        </>
    )
}
export default Counter;