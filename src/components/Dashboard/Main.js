import React, { Component, Fragment } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import Sidebar from "./Sidebar";
import Home from "../Home/Home";
import Login from "../User/Login";

const Main = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  return (
    // <Fragment>
    //   {currentUser ? (
    //     <Fragment>
    //       <Sidebar />
    //       <div className="main-panel">
    //         <Navbar />

    //         <Footer />
    //       </div>
    //     </Fragment>
    //   ) : (
    //     <Redirect from="*" to="/login" />
    //   )}
    //   <Switch>
    //     <Route path="/dashboard" component={Dashboard} />
    //     <Route path="/profile" component={UserProfile} />
    //     <Route path="/login" component={Login} />

    //     <Redirect from="*" to="/dashboard" />
    //   </Switch>
    // </Fragment>

    <Fragment>
      {currentUser ? (
        <Fragment>
          <Sidebar />
          <div className="main-panel">
            <Navbar />
            <Dashboard />
            <Footer />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Login />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Main;
