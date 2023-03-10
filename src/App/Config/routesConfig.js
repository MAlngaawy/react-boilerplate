import React from "react";
import SignupPage from "../pages/Signup/SignupPage";
import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import SigninPage from "../pages/Signin/SigninPage";
import VerifyAccountPage from "../pages/VerifyAccount/VerifyAccountPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import AdminPage from "../pages/Admin/AdminPage";
import SubscriberPage from "../pages/Subscriber/SubscriberPage";
import authRoles from "../Auth/authRoles";

const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
    auth: authRoles.All,
  },

  {
    path: "/subscriber",
    element: <SubscriberPage />,
    auth: authRoles.Subscriber,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    auth: authRoles.Admin,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    auth: authRoles.All,
  },
  // {
  //   path: "/auth/activate/:token",
  //   element: <VerifyAccountPage />,
  //   auth: authRoles.All,
  // },
];

export default routesConfig;
