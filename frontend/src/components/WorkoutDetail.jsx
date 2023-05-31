import PropTypes from "prop-types";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../features/workouts/workoutsSlice";

const WorkoutDetails = ({ workout }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:2001/api/workouts/${workout._id}`);
      dispatch(deleteWorkout(workout._id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleDelete}>Delete</span>
    </div>
  );
};

WorkoutDetails.propTypes = {
  workout: PropTypes.object.isRequired,
};

export default WorkoutDetails;
