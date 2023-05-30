import { useState, useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";
import "./Home.css";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const res = await fetch("http://localhost:2001/api/workouts");
        const data = await res.json();
        // console.log(data);
        setWorkouts(data);
      } catch (err) {
        console.error(err);
      }
    };

    getWorkouts();
  }, []);

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
