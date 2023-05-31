import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addWorkout } from "../features/workouts/workoutsSlice";

const WorkoutForm = () => {
  // const workouts = useSelector((state) => state.workouts.workouts);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !load || !reps) {
      setError("Please fill in all fields");
      return;
    }

    const newWorkout = {
      title,
      load,
      reps,
    };

    try {
      const res = await axios.post(
        "http://localhost:2001/api/workouts",
        newWorkout
      );
      dispatch(addWorkout(res.data));
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }

    setTitle("");
    setLoad("");
    setReps("");
    setError(null);
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label>Number of Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
