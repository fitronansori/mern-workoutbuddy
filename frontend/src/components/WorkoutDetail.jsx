import PropTypes from "prop-types";
import axios from "axios";
// date format date-fns
import { formatDistanceToNow } from "date-fns";
import { useDispatch } from "react-redux";
import { deleteWorkout } from "../features/workouts/workoutsSlice";

const WorkoutDetails = ({ workout }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const id = workout._id;
    axios
      .delete(`http://localhost:2001/api/workouts/${id}`)
      .then(() => {
        dispatch(deleteWorkout(id));
      })
      .catch((err) => console.error(err));
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
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleDelete}>Delete</span>
    </div>
  );
};

WorkoutDetails.propTypes = {
  workout: PropTypes.object.isRequired,
};

export default WorkoutDetails;
