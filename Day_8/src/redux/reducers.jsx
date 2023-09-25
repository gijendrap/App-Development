// reducers.js

const initialState = {
    isAuthenticated: false,
  user: null,
}; // Define your initial state here

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
      case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default rootReducer;
