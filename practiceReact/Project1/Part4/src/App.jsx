import React from "react";
import { useState , useEffect} from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    feedback: ""
  });
  const [records, setRecords] = useState([]);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    const savedData =
      JSON.parse(localStorage.getItem("employeeFeedback"));

    if (savedData) {
      setRecords(savedData);
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const updatedRecords = [...records, formData];

    setRecords(updatedRecords);

    localStorage.setItem(
      "employeeFeedback",
      JSON.stringify(updatedRecords)
    );
    
    setMessage("Feedback submitted successfully!");

    setFormData({
      name: "",
      department: "",
      feedback: ""
    });
  }
  
  return (
    <div>
      <h1>Employee Feedback System</h1>

      <form onSubmit={handleSubmit}>

        <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="department"
        placeholder="Enter Department"
        value={formData.department}
        onChange={handleChange}
      />

      <textarea
        name="feedback"
        placeholder="Enter Feedback"
        value={formData.feedback}
        onChange={handleChange}
      />

        <button type="submit">
          Submit Feedback
        </button>

      </form>

      <p>{message}</p>

      <h2>Submitted Records</h2>

      {
        records.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>Department: {item.department}</p>
            <p>Feedback: {item.feedback}</p>
          </div>
        ))
      }

    </div>
  );
}

export default App;
