import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Dashboard/Sidebar";
import Main from "./components/Dashboard/Main";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import { history } from "./helpers/history";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Router history={history}>
          <div className="wrapper">
            <Router>
              <Route path="/" component={Main} />
            </Router>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
