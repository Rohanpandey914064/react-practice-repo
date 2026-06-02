import { useState } from "react"

function App(){
  const [task , setTask] = useState("");
  const [tasks , setTasks] = useState([]);

  function handel(){
    const word = task.trim();
    if(word === ""){
      alert("raunak san task to add 😘 karo please")
      setTask("");
      return;
    }

    setTasks([...tasks,word]);
    setTask("");
  }

  function remove(index){
    const newArr = tasks.filter((_,id)=>id !== index);
    setTasks(newArr);
  }

  return(
    <>
    <input
      type="text"
      value={task}
      placeholder="Enter your task raunak san"
      onChange={(e)=>setTask(e.target.value)}
    />

    <button onClick={handel}>+</button>

    {
      tasks.map((data,index)=>(
        <div key={index}>
           {
            (index % 2 === 0)?
               <h1>{data}</h1>
               :<p>{data}</p>
           }
           <button onClick={()=>remove(index)}>remove</button>
        </div>
      ))
    }
    </>
  )
}

export default App