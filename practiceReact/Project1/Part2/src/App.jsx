import React from "react";
import { useState , useEffect} from "react";

function App() {
      const [streak, setStreak] = useState(0);
      const [activities, setActivities] = useState([]);
      const [tip, setTip] = useState("");

      const tips = [
      "Drink more water daily.",
      "Exercise regularly.",
      "Sleep at least 7 hours.",
      "Meditation reduces stress.",
      "Reading improves focus."
      ];

      useEffect(()=>{      
        const radomtips = tips[Math.floor(Math.random() * tips.length)]
        setTip(radomtips);
      },[])

      function trackActivity(activity) {
        const time = new Date().toLocaleString();
        const newActivity = {
          activity: activity,
          timestamp: time
        };
        setActivities([newActivity,...activities]);

        if (
            activity === "Meditation" ||
            activity === "Exercise" ||
            activity === "Reading"
          ) {
            setStreak(streak + 1);
        }
        else {
            setStreak(0);
        }
      }
     
      function resetTracker() {
        setStreak(0);
        setActivities([]);
      }

  return (
    <div>
      <h1>LifeSync Wellness Tracker</h1>
      <p>{tip}</p>

      <div>
        <button onClick={() => trackActivity("Meditation")}>
          Meditation
        </button>

        <button onClick={() => trackActivity("Exercise")}>
          Exercise
        </button>

        <button onClick={() => trackActivity("Reading")}>
          Reading
        </button>

        <button onClick={() => trackActivity("Overslept")}>
          Overslept
        </button>

        <button onClick={() => trackActivity("Skipped Routine")}>
          Skipped Routine
        </button>
      </div>
      <h2>Current Streak: {streak}</h2>
      <h3>Latest Activities</h3>
      {
        activities.length === 0 ? (
          <p>No activities recorded</p>
        ) : (
          <ul>
            {
              activities.slice(0,5).map((data, index)=>(
                <li key={index}>
                  <p>{data.activity}</p> <p>{data.timestamp}</p>
                </li>
              ))           
            }
          </ul>
        )
      }
      <button onClick={resetTracker}>
        Reset Tracker
      </button>
    </div>  
  );
}

export default App;