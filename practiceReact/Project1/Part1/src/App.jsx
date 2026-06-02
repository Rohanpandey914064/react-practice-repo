import { useState, useEffect } from "react";

function App() {

  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");

  // Submitted data state
  const [submittedData, setSubmittedData] = useState(null);

  // Restore data after refresh
  useEffect(() => {

    const savedData = JSON.parse(
      localStorage.getItem("student")
    );

    if (savedData) {
      setName(savedData.name || "");
      setEmail(savedData.email || "");
      setMobile(savedData.mobile || "");
      setCourse(savedData.course || "");

      // Restore submitted data
      setSubmittedData(savedData);
    }

  }, []);

  // Save data while typing
  useEffect(() => {

    const studentData = {
      name,
      email,
      mobile,
      course
    };

    localStorage.setItem(
      "student",
      JSON.stringify(studentData)
    );

  }, [name, email, mobile, course]);

  // Form submit
  function handleSubmit(e) {

    e.preventDefault();

    // Validation
    if (
      name === "" ||
      email === "" ||
      mobile === "" ||
      course === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const student = {
      name,
      email,
      mobile,
      course
    };

    // Display submitted data
    setSubmittedData(student);

    // Success alert
    alert("Student Registered Successfully");
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Student Registration Portal</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Register Student
        </button>

      </form>

      <br />

      {
        submittedData && (
          <div>
            <h2>Submitted Details</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Mobile:</strong> {submittedData.mobile}
            </p>
            <p>
              <strong>Course:</strong> {submittedData.course}
            </p>
          </div>
        )
      }

    </div>
  );
}

export default App;