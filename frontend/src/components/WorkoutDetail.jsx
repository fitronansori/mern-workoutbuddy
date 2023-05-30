import PropTypes from "prop-types";

const WorkoutDetails = ({ workout }) => {
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
    </div>
  );
};

WorkoutDetails.propTypes = {
  workout: PropTypes.object.isRequired,
};

export default WorkoutDetails;
