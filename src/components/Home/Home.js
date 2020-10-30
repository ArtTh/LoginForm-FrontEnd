import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Header, Segment } from "semantic-ui-react";

import { history } from "../../helpers/history";
import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

const HomePage = () => {
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
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          Beriflapp
        </Header>

        {currentUser ? (
          <Fragment>
            <Header
              as="h2"
              inverted
              content={`Welcome back ${currentUser.username}`}
            />
            <Button onClick={logOut} size="huge" inverted>
              Log out
            </Button>
            <Button as={Link} to="/dashboard" size="huge" inverted>
              Go to dashboard!
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Header as="h2" inverted content="Please log in to continue!" />

            <Button size="huge" inverted as={Link} to={`/login`}>
              Login
            </Button>

            <Button size="huge" inverted>
              Register
            </Button>
          </Fragment>
        )}
      </Container>
    </Segment>
  );
};

export default HomePage;
