import React from "react";
import ReactDOM from "react-dom";
import { Navigation } from "react-navi";
import "./index.css";
import routes from "./routes";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Navigation routes={routes} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();