import React from "react";
// react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
// Components
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to="/signup" />} />
      </Routes>
    </div>
  );
};

export default App;
