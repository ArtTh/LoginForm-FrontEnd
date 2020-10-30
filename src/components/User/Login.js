import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "semantic-ui-react";
import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import { Redirect, Link } from "react-router-dom";

import { login } from "../../actions/auth";
import { Grid, InputAdornment, TextField } from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const styles = {
  mainGrid: {
    minHeight: "100vh",
  },
  backgroundImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  loginLogo: {
    width: "100px",
  },
  padding10: {
    padding: "10",
  },
  userGrid: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    minWidth: 300,
  },
  height20: {
    height: 20,
  },
  whiteBtn: {
    backgroundColor: "#fff",
  },
  spanContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    textAlign: "center",
  },
};

const useStyles = makeStyles(styles);

const Login = (props) => {
  const classes = useStyles();
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    form.current.validateAll();

    dispatch(login(email, password))
      .then(() => {
        props.history.push("/");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Redirect to="" />;
  }

  return (
    <Form onSubmit={handleLogin} ref={form}>
      <Grid container className={classes.mainGrid}>
        <Grid item xs={12} sm={6}>
          <img
            className={classes.backgroundImg}
            src="https://ae01.alicdn.com/kf/HTB1Qc_hdBTH8KJjy0Fiq6ARsXXav/Office-Wall-scene-backdrops-Vinyl-cloth-High-quality-Computer-printed-party-photography-studio-background.jpg_Q90.jpg_.webp"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          className={classes.padding10}
          direction="column"
          justify="space-between"
        >
          <div />
          <div className={classes.userGrid}>
            <span className={classes.spanContainer}>
              Email: art@art.com <br />
              Password: Pa$$w0rd
            </span>
            <Grid container justify="center">
              <img
                src="https://www.pinclipart.com/picdir/big/194-1948906_free-security-icons-open-lock-icon-png-clipart.png"
                className={classes.loginLogo}
                alt="logo"
              />
            </Grid>
            <TextField
              label="Email"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
            />
            <TextField
              type="password"
              label="Password"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
            <div className={classes.height20} />
            <Button color="primary" variant="contained" fluid loading={loading}>
              Log in
            </Button>
            <div className={classes.height20} />
            <Button backgroundColor="#fff" variant="contained" fluid>
              Interested in joining?
            </Button>
          </div>
          <div />
          <Grid container justify="center">
            <Grid item>
              <Button backgroundColor="#fff" variant="contained" fluid>
                Go to community page
              </Button>
              <h2></h2>
            </Grid>
            <Grid item>
              <Button backgroundColor="#fff" variant="contained" fluid>
                Forgot password?
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
};

export default Login;
