import React from "react";
import { useState , useEffect} from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function addExpense() {
    if (title === "" || amount === "") {
      return;
    }
    const newExpense = {
      title: title,
      amount: Number(amount)
    };
    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
  }

  const totalExpense = expenses.reduce(
    (total, item) => total + item.amount,
    0
  );

  function resetExpenses() {
    setExpenses([]);
    setTitle("");
    setAmount("");
  }
  
  return (
    <div>
      <h1>Expense Tracker Dashboard</h1>
      <input
        type="text"
        placeholder="Enter Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>
        Add Expense
      </button>

      <h2>Recent Expenses</h2>

      {
        expenses.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>₹{item.amount}</p>
          </div>
        ))
      }

      <h2>Total Expenses: ₹{totalExpense}</h2>

      <button onClick={resetExpenses}>
        Reset
      </button>

    </div>
  );
}

export default App;
