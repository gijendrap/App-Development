// store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // You'll create this

const initialState = {}; // Define your initial state here

const store = createStore(rootReducer, initialState);

export default store;
