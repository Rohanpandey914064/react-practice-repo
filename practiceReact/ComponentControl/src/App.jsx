import { useState } from "react"

function App() {

  const [name , setName] = useState("");
  const [gmail , setGmail] = useState("");

  return (
    <>
      {/* <input
          type="password"
          value={name}
          onChange={(e)=>setName(e.target.value)}
      /> */}

      {/* <select value={name} onChange={(e)=>setName(e.target.value)}>
        <option>raunak</option>
        <option>raj</option>
        <option>puja</option>
      </select> */}

      <input
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <br></br>
      <input
        type="gmail"
        value={gmail}
        onChange={(e)=>setGmail(e.target.value)}
      />

      <h1>{name}</h1>
      <h1>{gmail}</h1>
    </>
  )
}

export default App
