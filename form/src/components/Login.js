import React, { useEffect, useState } from "react";
// animate.css
import { Animated } from "react-animated-css";
// react-router-dom
import { Link } from "react-router-dom";
// react toastify
import { ToastContainer } from "react-toastify";
import { notify } from "../functions/toast";
import "react-toastify/dist/ReactToastify.css";
// title changer hook
import MyTitle from "../hooks/MyTitle";
// validate function
import { validate } from "../functions/validate";

const Login = () => {
  // title change
  MyTitle("Login");
  // data state
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // errors state
  const [errors, setErrors] = useState({});
  // touched state
  const [touched, setTouched] = useState({});
  // change handler
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "Logged in successfully");
    } else {
      setTouched({
        email: true,
        password: true,
      });
      notify("error", "Invalid data !");
    }
  };
  // focus Handler
  const focusHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };
  //
  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);
  return (
    <div className="singup-container">
      <form className="form-container">
        <h1>Login</h1>
        <div className="formfields">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Example@email.com"
            id="email"
            value={data.email}
            onChange={changeHandler}
            onBlur={focusHandler}
          />
          {errors.email && touched.email && (
            <Animated
              animationIn="flash"
              animationOut="fadeOut"
              isVisible={true}
            >
              <span>{errors.email}</span>
            </Animated>
          )}
        </div>
        <div className="formfields">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            password="password"
            placeholder="Enter your password"
            id="password"
            value={data.password}
            onChange={changeHandler}
            onBlur={focusHandler}
          />
          {errors.password && touched.password && (
            <Animated
              animationIn="flash"
              animationOut="fadeOut"
              isVisible={true}
            >
              <span>{errors.password}</span>
            </Animated>
          )}
        </div>
        <div className="submit-container">
          <button type="submit" onClick={submitHandler}>
            Login
          </button>
          <p>
            Don't have an account ? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>
      {/* react toastify component */}
      <ToastContainer />
    </div>
  );
};

export default Login;
