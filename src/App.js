import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./store/actions/authActions";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import AddImages from "./pages/AddImages";
import AllImages from "./pages/AllImages";
import Bookmarks from "./pages/Bookmarks";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    // Check if token exists and user data is not fetched yet
    if (token && !user) {
      dispatch(getUserData(token)); // Fetch user data using token
    }
  }, [dispatch, token, user]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {user && <Navbar />} {/* Render Navbar if user is authenticated */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-images" element={<AddImages />} />
            {/* Login route */}
            {/* Protected routes accessible only if user is authenticated */}
            {user && (
              <>
                <Route path="/add-images" element={<AddImages />} />
                <Route path="/all-images" element={<AllImages />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/login" />} />{" "}
            {/* Redirect to /login by default */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  // Redirect to /add-images if user is authenticated, otherwise to /login
  return user ? <Navigate to="/add-images" /> : <Navigate to="/login" />;
};

export default App;
