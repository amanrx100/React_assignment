import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/authActions";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // State for managing menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Menu items for larger screens */}
      <div className="hidden ml-20 md:flex items-center">
        <Link
          to="/add-images"
          className={`mr-4 border p-2 rounded transition duration-300 ${
            location.pathname === "/add-images"
              ? "bg-gray-200 text-gray-700"
              : "hover:bg-gray-200 hover:text-gray-700"
          }`}
        >
          Add Images
        </Link>
        <Link
          to="/all-images"
          className={`mr-4 border p-2 rounded transition duration-300 ${
            location.pathname === "/all-images"
              ? "bg-gray-200 text-gray-700"
              : "hover:bg-gray-200 hover:text-gray-700"
          }`}
        >
          All Images
        </Link>
        <Link
          to="/bookmarks"
          className={`border p-2 rounded transition duration-300 ${
            location.pathname === "/bookmarks"
              ? "bg-gray-200 text-gray-700"
              : "hover:bg-gray-200 hover:text-gray-700"
          }`}
        >
          Bookmarks
        </Link>
      </div>

      {/* Menu toggle button for smaller screens */}
      <button
        className="md:hidden block text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {!isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Menu items for smaller screens */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col mt-4">
          <Link to="/add-images" className="text-white block py-2">
            Add Images
          </Link>
          <Link to="/all-images" className="text-white block py-2">
            All Images
          </Link>
          <Link to="/bookmarks" className="text-white block py-2">
            Bookmarks
          </Link>
        </div>
      )}

      {/* User information */}
      {user && (
        <div className="flex items-center">
          <img
            src={user.profile_img}
            alt="profile"
            className="w-8 h-8 rounded-full mx-4"
          />
          <span className="mr-2">{user.userName}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-5 py-2 mx-5 rounded text-white hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
