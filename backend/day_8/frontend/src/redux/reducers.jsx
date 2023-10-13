// reducers.js
const initialState = {
  isAuthenticated: false,
  user: {
      email: null,
      // Add other user-related properties as needed
  },
  // Add other initial state properties as needed
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
          return {
              ...state,
              isAuthenticated: true,
              user: {
                  ...state.user,
                  email: action.payload.email, // Store the user's email from the action payload
                  // You can add other user-related properties here if needed
              },
          };
      case 'LOGOUT':
          return {
              ...state,
              isAuthenticated: false,
              user: {
                  email: null,
                  // Reset other user-related properties as needed
              },
          };
      case 'LOAD_USER_FROM_LOCAL_STORAGE':
          const storedUser = localStorage.getItem('user');
          return {
              ...state,
              isAuthenticated: !!storedUser,
              user: storedUser ? JSON.parse(storedUser) : state.user,
          };
      default:
          return state;
  }
};

export default rootReducer;
