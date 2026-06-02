import { useState } from "react"

// function App() {
//   const [Aname, setAname] = useState([]);
//   const [name , setName] = useState("");
//   const [data , setdata] = useState("");
//   const [click , setClick] = useState(false);
 
//   function save(){
//     setAname([...Aname,name])
//     localStorage.setItem("name",Aname);
//     setName("")
//   }

//   function getData(){
//     setdata(localStorage.getItem("name"));
//     setClick(!click);
//   }

//   function remove(){
//     localStorage.removeItem("name");
//   }

//   return (

//     <>
//       <input
//         type="text"
//         value={name}
//         placeholder="enter your name"
//         onChange={(e)=>setName(e.target.value)}
//       />

//       <button onClick={save}>save data</button>
//       <button onClick={remove}>remove data</button>

//       <button onClick={getData}>get data</button>

//       {click && <h1>{data}</h1>}


//     </>
    
//   )
// }

// export default App


function App() {
  const init = Number(localStorage.getItem("count"));
  const [theme , setTheme] = useState(localStorage.getItem("theme"));
  const [count , setCount] = useState(init);


  function Theme(){
    const newtheme = (theme === "light")?"dark":"light";
    setTheme(newtheme);
    localStorage.setItem("theme",theme);
  }

  function Count(){
    setCount(count + 1);
    localStorage.setItem("count",count);
  }


  return (

    <>
      <button onClick={Theme}>change theme</button>
      <h1>{theme}</h1>

      <button onClick={Count}>+</button>
      <h1>{count}</h1>
    </>
    
  )
}

export default App
