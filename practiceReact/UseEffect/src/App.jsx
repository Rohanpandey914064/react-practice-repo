import { useState } from "react"
import { useEffect } from "react"
// function App() {
//   const [count , setCount] = useState(0);
//   useEffect(()=>console.log("run all time"),[count])
//   return (
//     <>
//       <button onClick={()=>setCount(count + 1)}>+</button>
//       <h1>{count}</h1>
//     </>
    
//   )
// }


// function App() {

//   const [count, setCount] = useState(0);
//   // useEffect(()=>(
//   //   console.log("website started")
//   // ))
//   useEffect(()=>(
//     console.log("count updates")
//   ),[count])
//   return (
//     <div>

//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count + 1)}>+</button>

//     </div>
//   );
// }

function App() {

  useEffect(() => {
    console.log("Hello");
  },[]);

  return <h1>React</h1>;
}

export default App
