import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/styles/index.scss";
// import { Provider } from "react-redux"; // redux bindings for react
// import thunk from "redux-thunk"; // to use promises for asynchronous actions
// import { createStore, applyMiddleware, compose } from "redux"; // to create the store and middleware
//import reducers from "./reducers/index.js";
import { BrowserRouter } from "react-router-dom";

// const middleware = [thunk];
// const store = createStore(
//   reducers,
//   {},
//   compose(applyMiddleware(...middleware))
// );

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
