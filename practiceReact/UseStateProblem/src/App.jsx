// import Counter from "./Component/Counter"

// function App() {

//   return (
//     <>
//       <Counter/>
//     </>
//   )
// }

// export default App


// import { useState } from "react";

// function App() {

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={()=>setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";

function App() {

  const [name, setName] = useState("");

  return (
    <div>

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <h1>{name}</h1>

    </div>
  );
}

export default App;