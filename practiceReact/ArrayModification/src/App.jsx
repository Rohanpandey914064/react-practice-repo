import { useState } from "react"

function App() {
  const [lists , setLists] = useState([]);
  const [list,setList] = useState("");
  const [updates,setupdate] = useState("");

  function handel(){
    const word = list.trim();
    if(word === ""){
      alert("Enter data");
      setList("");
      return;
    }

    setLists([...lists,word]);
    setList("");
  }

  function remove(index){
    const newArr = lists.filter((_,id)=>id!==index);
    setLists(newArr);
  }

  function update(elem){
    const newArr = lists.map((data)=>
        (data === elem)?
                updates:
                data
    )
    setLists(newArr);
    setupdate("");
  }

  return (
    <>
      <input
        type="text"
        value={list}
        placeholder="Enter your name"
        onChange={(e)=>setList(e.target.value)}  
      />

      <button onClick={handel}>add</button>

      <ul>
        {
          lists.map((data,index)=>(
            <div key={index}>
              <li>{data}</li>
              <button onClick={()=>remove(index)}>remove</button>
              <button onClick={()=>update(data)}>update</button>
            </div>
          ))
        }
      </ul>
      <h1>update input first enter update and then which element you want to update just click update icon </h1>
      <input
        type="text"
        placeholder="Enter you update"
        value={updates}
        onChange={(e)=>setupdate(e.target.value)}
      />
    </>
  )
}

export default App
