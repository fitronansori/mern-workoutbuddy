import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, login } from "../features/auth/authSlice";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      // Mendapatkan data user dari local storage dan mengubah state Redux
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch(login(user));
    }
  }, [dispatch]);

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {user && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <p>{user.email}</p>
              <button
                onClick={handleLogOut}
                style={{
                  background: "#1aac83",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Log Out
              </button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
