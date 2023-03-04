import React from "react";
import { Route, Routes as SwitchRoutes } from "react-router-dom";
import SignupPage from "./pages/Signup/SignupPage";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import SigninPage from "./pages/Signin/SigninPage";
import VerifyAccountPage from "./pages/VerifyAccount/VerifyAccountPage";

function Routes() {
  return (
    <SwitchRoutes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/signup" exact element={<SignupPage />} />
      <Route path="/signin" exact element={<SigninPage />} />
      <Route
        path="/auth/activate/:token"
        exact
        element={<VerifyAccountPage />}
      />
      <Route path="*" exact element={<NotFoundPage />} />
    </SwitchRoutes>
  );
}

export default Routes;
