import React, { useEffect, useState } from "react";
// react tooltip
import ReactTooltip from "react-tooltip";
// react-router-dom
import { Link } from "react-router-dom";
// title changer hook
import MyTitle from "../hooks/MyTitle";
// react toastify
import { ToastContainer } from "react-toastify";
import { notify } from "../functions/toast";
import "react-toastify/dist/ReactToastify.css";

// validate function
import { validate } from "../functions/validate";

const SignUp = () => {
  // title change
  MyTitle("Signup");
  // data state
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  // errors state
  const [errors, setErrors] = useState({});
  // touched state
  const [touched, setTouched] = useState({});
  // change handler
  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "Signed up successfully");
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
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
    setErrors(validate(data, "signup"));
  }, [data, touched]);
  return (
    <div className="singup-container">
      <form className="form-container">
        <h1>Signup</h1>
        <div className="formfields">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            id="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div className="formfields">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Example@email.com"
            id="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className="formfields">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            password="password"
            placeholder="Choose a password"
            id="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className="formfields">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            id="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className="formfields">
          <div className="regulations-container">
            <label
              htmlFor="isAccepted"
              data-tip="Accept"
              data-place="right"
              data-effect="solid"
            >
              Accept privacy policy
            </label>
            <input
              type="checkbox"
              name="isAccepted"
              id="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className="submit-container">
          <button type="submit" onClick={submitHandler}>
            Signup
          </button>
          <p>
            Have an account already? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
      {/* react toastify component */}
      <ToastContainer />
      {/* react tooltip component */}
      <ReactTooltip />
    </div>
  );
};

export default SignUp;
