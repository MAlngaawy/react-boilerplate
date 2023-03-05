import React from "react";
import { Route, Routes as SwitchRoutes } from "react-router-dom";
import SignupPage from "./pages/Signup/SignupPage";
import HomePage from "./pages/Home/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import SigninPage from "./pages/Signin/SigninPage";
import VerifyAccountPage from "./pages/VerifyAccount/VerifyAccountPage";
import RequireAuth from "./Auth/ReuireAuth";
import NotRequireAuth from "./Auth/NotReuireAuth";
import ProfilePage from "./pages/Profile/ProfilePage";

function Routes() {
  return (
    <SwitchRoutes>
      {/* Global Routes */}
      <Route
        path="/auth/activate/:token"
        exact
        element={<VerifyAccountPage />}
      />
      <Route path="/" exact element={<HomePage />} />

      {/* Not Required Auth Routes */}
      <Route element={<NotRequireAuth />}>
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/signin" exact element={<SigninPage />} />
      </Route>
      <Route path="*" exact element={<NotFoundPage />} />

      {/* Required Auth Routes */}
      <Route element={<RequireAuth />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </SwitchRoutes>
  );
}

export default Routes;
