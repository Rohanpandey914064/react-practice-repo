import Header from "./Header";
import {useState} from "react";

function Counter(){
    const [count , setcount] = useState(0);
    const [name , setname] = useState("Rohan");
    const [age, setage] = useState(19);

    function changeName(){
        (name == "Rohan")? setname("virat") : setname("Rohan");
        (age == 19)? setage(36):setage(19);
    }

    const addFunction = ()=>{
        setcount(count + 1);
    }

    const removeFunction = ()=>{
        if(count <=0){
        setcount(0);
        }else{
        setcount(count - 1);
        }
    }
    return (
        <div> 
        <Header name={name} age={age}></Header>
        <h1>Total count {count}</h1>
        <button onClick={addFunction}>^</button>
        <button onClick={removeFunction}>v</button>

        <button onClick={changeName}>change the name</button>
        </div>
    )
}

export default Counter