
// store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const initialState = {
    user: {
        email: null, // Initially, the user's email is null
        // Add other user-related properties as needed
    },
    // Add other initial state properties as needed
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;