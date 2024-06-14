import axios from "axios";

// Action to handle user login
export const login = (email, password) => async (dispatch) => {
  try {
    console.log("Attempting login with:", email, password);

    // Perform a POST request to the login API
    const response = await axios.post(
      `https://hospital-erp-backend.onrender.com/test/login?useremail=${email}&password=${password}`
    );

    // Debugging: Log the entire response object
    // console.log("Login response:", response);

    // Check the response status
    if (response.data.status === 1) {
      // Extract authToken from the response
      const token = response.data.authToken;

      // Store the authToken in localStorage
      localStorage.setItem("authToken", token);

      // Dispatch the action to get user data
      dispatch(getUserData(token));
    } else {
      console.error("Login failed", response.data.message);
    }
  } catch (error) {
    // Log any errors that occur during the login process
    console.error(
      "Login error",
      error.response ? error.response.data : error.message
    );
  }
};

// Action to get user data using the authToken
export const getUserData = (token) => async (dispatch) => {
  try {
    console.log("Fetching user data with token:", token);

    // Perform a POST request to the getUserData API with the authToken in the headers
    const response = await axios.post(
      "https://hospital-erp-backend.onrender.com/test/getUserData",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    // Debugging: Log the entire response object
    // console.log("User data response:", response);

    // Extract user data from the response
    const userData = response.data;
    // console.log(userData);

    // Dispatch an action to set user data in the Redux store
    dispatch({ type: "SET_USER_DATA", payload: userData });
  } catch (error) {
    // Log any errors that occur during the process of getting user data
    console.error(
      "Get user data error",
      error.response ? error.response.data : error.message
    );
  }
};

// Action to handle user logout
export const logout = () => {
  // Remove authToken from localStorage
  localStorage.removeItem("authToken");

  // Dispatch an action to reset the Redux store state
  return { type: "LOGOUT" };
};
