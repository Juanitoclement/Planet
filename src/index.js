import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AnimateSharedLayout } from "framer-motion";
import configureStore from "./store/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* istanbul ignore next */
const store = configureStore();

/* istanbul ignore next */
ReactDOM.render(
  <Provider store={store}>
    <AnimateSharedLayout type="crossfade">
      <App />
    </AnimateSharedLayout>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/* istanbul ignore next */
reportWebVitals();
