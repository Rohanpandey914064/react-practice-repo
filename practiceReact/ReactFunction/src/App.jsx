// import Header from "./Component/Header"
// import Footer from "./Component/Footer";
// import Student from "./Component/Student";

// function App() {
//   const name = "rohan";
//   const age = "19";
//   return (
//     <> 
//     {/* <Header name={age}>{name}</Header> */}
//     <Student name={name} age={age}/>
//     </>
//   )
// }

// export default App



// import Header from "./Component/Header"
// import Footer from "./Component/Footer";
// import Student from "./Component/Student";

// function App() {
//   const name = "rohan";
//   const age = "19";
//   return (
//     <> 
//     <Header name={age}>{name}</Header>
//     <Student name={name} age={age}/>
//     <Footer age={age}/>
//     </>
//   )
// }

// export default App


// function Header() {
//   return (
//     <h1>Header</h1>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   )
// }

// export default App;

import Header from "./Component/Header"
import Footer from "./Component/Footer";
import Student from "./Component/Student";
import Card from "./Component/Card";

function App() {
  const name = "rohan";
  const age = "19";

  const products = [
    {name : "car", price: 40},
    {name : "coder", price: 400},
    {name : "space ", price: 890},
    {name : "rohan", price: 67},
    {name : "bike", price: 2342},
  ]
  return (
    <>
        {
          products.map((product,index)=>(
              <>
                <h1>-----------------------------------------</h1>
                <Card key={index} name={product.name} price={product.price}/>
                <h1>-----------------------------------------</h1>
              </>
          ))
        }
        <Footer/>
    </>
  )
}

export default App