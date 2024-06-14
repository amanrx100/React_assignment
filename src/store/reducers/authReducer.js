const initialState = {
    token: localStorage.getItem('authToken') || null,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_DATA':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          token: null,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  