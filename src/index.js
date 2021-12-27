import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
//import { rootReducer } from "./store/reducers/rootReducer";
import { reducer } from "./store/reducers/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
