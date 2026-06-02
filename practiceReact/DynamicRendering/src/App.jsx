function App() {
  const students = ["rohan pandey","raunak padey","arpit", "shivam","raj","rahul"];
  const products = ["car","bike","scooter","plane","spaceShip"];
  const array = [
    {id:1,name:"rohan"},
    {id:2,name:"raunak"},
    {id:3,name:"rudra"},
    {id:4,name:"krishna"}
  ]

  const number = [1,2,3,4,5,6,7,8,9,10];

  const even = number.filter(
    (num)=>num % 2 ===0
  )

  return (
    <>
      {/* {
        names.map((name,index)=>(

          (index % 2 == 0)?
          <h1 key={index}>{name}</h1> :
          <p key={index}>{name}</p>
        ))
      } */}

      {/* <ul>
        {
          names.map((name,index)=>(
            <li key={index}>{name}</li>
          ))
        }
      </ul> */}

      {/* {
        products.map((product,index)=>(
          <>
            <h1>{product}</h1>
            <button>buy</button>
          </>
        ))
      } */}

      {/* {
        array.map((arr)=>(
          <h1 key={arr.id}>{arr.name}</h1>
        ))
      } */}

      {/* {
        even.map((num,index)=>(
          <h1>{num}</h1>
        ))
      } */}

      {
      students.map((student,index) => (
        <h1 key={index}>{student}</h1>
      ))
      }
    </>
    
  )
}

export default App
