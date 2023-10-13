// actions.js

export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
  export const logout = () => ({
    type: 'LOGOUT',
  });
   

  export const loadUserFromLocalStorage = () => (dispatch) => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        dispatch(loginSuccess(user)); // Dispatch the loginSuccess action with the loaded user data
    }
};