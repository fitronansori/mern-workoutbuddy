import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getWorkouts } from "../features/workouts/workoutsSlice";
import { selectUser } from "../features/auth/authSlice";

const Home = () => {
  const workouts = useSelector((state) => state.workouts.workouts);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await axios.get("http://localhost:2001/api/workouts", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        dispatch(getWorkouts(res.data));
      } catch (err) {
        console.error(err);
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user, navigate]);

  return (
    <div className="container">
      <div className="home">
        <div className="workouts left">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
        <div className="right">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
