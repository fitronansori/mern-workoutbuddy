import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContex";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  // const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const workout = { title, load, reps };

      const res = await fetch("http://localhost:2001/api/workouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(workout),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error);
        // setEmptyFields(json.emptyFields);
      }

      if (res.ok) {
        setError(null);
        // setEmptyFields([]);
        setTitle("");
        setLoad("");
        setReps("");
        console.log("new workout added:", json);
        dispatch({ type: "ADD_WORKOUT", payload: json });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        // className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        // className={emptyFields.includes("load") ? "error" : ""}
      />

      <label>Number of Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        // className={emptyFields.includes("reps") ? "error" : ""}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
