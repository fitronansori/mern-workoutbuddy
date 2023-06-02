import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectStatus,
  selectError,
  fetchLogin,
} from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(fetchLogin({ email, password }));

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (status === "succeeded" && user) {
      navigate("/");
    }
  }, [status, user, navigate]);

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button>Log in</button>
      {/* <div>
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && (
          <div
            style={{
              padding: "10px",
              border: "1px solid #e7195a",
              background: "#ffefef",
              color: "#e7195a",
              borderRadius: "5px",
              margin: "20px 0",
            }}
          >
            <p>{error.error}</p>
          </div>
        )}
      </div> */}
    </form>
  );
};

export default Login;
