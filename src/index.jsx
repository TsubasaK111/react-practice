import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxThunk from 'redux-thunk';

import styles from "./styles/styles.css";
import App from "./components/App.jsx";
import { reducer } from "./models";

export const store = createStore(
  reducer,
  applyMiddleware(ReduxThunk),
  // applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
