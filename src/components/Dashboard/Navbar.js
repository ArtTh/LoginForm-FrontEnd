import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { history } from "../../helpers/history";
import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

const Navbar = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage());
      window.location.reload();
    });
  }, [dispatch]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg " color-on-scroll="500">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Dashboard
        </a>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navigation"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <span className="no-icon">
                  Welcome back {currentUser.username}
                </span>
              </Link>
              <Link className="nav-link" onClick={logOut}>
                <span className="no-icon">Log out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
