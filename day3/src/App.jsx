import {useState} from 'react';

function App() {
  const [StudentList,SetStudentList] = useState([]);
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [course,setCourse] = useState("");

  function handelForm(e){
    if(name == "" || age == 0 || course == ""){

    }else{
      const st = {
        Sname:name,
        SAge:age,
        Scourse:course,
      }
      SetStudentList([...StudentList,st]);
    }
    setName("");
    setAge(0);
    setCourse("");
  }

  function deleteStudent(idx){
    
  }
  return (
    <>
    <div className='flex flex-col items-center justify-center '>
        <input 
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className='border border-black p-2'
        />
        <br/>
        <input 
          type='number'
          placeholder='Enter your age'
          value={age}
          onChange={(e)=>setAge(e.target.value)}
          className='border border-black p-2'
        />
        <br/>
        <input 
          type='text'
          placeholder='Enter your course'
          value={course}
          onChange={(e)=>setCourse(e.target.value)}
          className='border border-black p-2'
        />
        <br/>
        <button onClick={handelForm} className='border border-black p-6'>SUBMIT</button>
    </div>

    {
      StudentList.map((student , index)=>(
        <div key={index}>
          <h1>{student.Sname}</h1>
          <h1>{student.SAge}</h1>
          <h1>{student.Scourse}</h1>
        </div>  
      ))
    }
    
      
    </>
  )
}

export default App
