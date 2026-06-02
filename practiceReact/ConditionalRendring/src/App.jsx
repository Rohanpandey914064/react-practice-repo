import { useState } from "react"

function App() {

  // const [mode , setMode] = useState(true)

  const [marks,setMarks] = useState(0);
  const [click,setClick] = useState(false);
  const [name,setName] = useState("");
  const [result , setResult] = useState("");

  // const login = true;

  // if(login){
  //   return (
  //     <h1>rohan op</h1>
  //   )
  // }else{
  //   return (
  //     <h1>you don't know rohan</h1>
  //   )
  // }

  function hendler(e){
    if(marks === 0 || marks > 100 || marks < 0 || name ==="") {
      alert("take proper input")
      return ;
    }

    setClick(!click);
    (click && (marks >= 80)? 
              setResult(`Hii,${name} you are pass , now party`):
              setResult(`sale, ${name} tu fail ho gya but koi bat nhi ab tu apne 1 year wali gf ke sath padhega.`))

              

  }

  return (
    // <div>
    //     {/* {
    //     (login) ? 
    //     <h1>rohan is the best</h1>
    //     : <h1>no</h1>
    //     } */}


    //     {login && <h1>just login</h1>}
    // </div>

    // <>
    //   <button onClick={()=>setMode(!mode)}>change mode</button>

    //   {
    //     mode ? <h1>light mode</h1> : <h1>dark mode</h1>
    //   }
    // </>
    

    <>
      <input
        type="number"
        value={marks}
        placeholder="enter your marks"
        onChange={(e)=>setMarks(e.target.value)}
      />
      <input
        type="text"
        value={name}
        placeholder="enter your Name"
        onChange={(e)=>setName(e.target.value)}
      />
      <button onClick={hendler}>check pass/fail</button>

      {
        click && <h1>{result}</h1>
      }

    </>
  )
}

export default App
