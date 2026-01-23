import React from "react";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import SubmissionForm from "./pages/SubmissionForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Homepage />}></Route>
        <Route path={"/register"} element={<SubmissionForm />}></Route>
      </Routes>
    </>
  );
};

export default App;
