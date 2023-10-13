// Import necessary modules
import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./AppRoutes";
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
  <AppRoutes />
</Provider>,
document.getElementById('root')
);
