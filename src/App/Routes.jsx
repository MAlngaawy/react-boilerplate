// import React from "react";
// import { Route, Routes as SwitchRoutes } from "react-router-dom";
// import SignupPage from "./pages/Signup/SignupPage";
// import HomePage from "./pages/Home/HomePage";
// import NotFoundPage from "./pages/NotFound/NotFoundPage";
// import SigninPage from "./pages/Signin/SigninPage";
// import VerifyAccountPage from "./pages/VerifyAccount/VerifyAccountPage";
// import RequireAuth from "./Auth/RequireAuth";
// import NotRequireAuth from "./Auth/NotRequireAuth";
// import ProfilePage from "./pages/Profile/ProfilePage";
// import AdminPage from "./pages/Admin/AdminPage";
// import SubscriberPage from "./pages/Subscriber/SubscriberPage";
import routesConfig from "./Config/routesConfig";
import { useRoutes } from "react-router-dom";
import AppAuthrization from "./Auth/AppAuthrization";
import { useLocation } from "react-router-dom";

function Routes() {
  const routing = useRoutes(routesConfig);
  console.log("routing", routing);
  const { pathname } = useLocation();

  return <AppAuthrization pathname={pathname}>{routing}</AppAuthrization>;

  // return (
  //   <SwitchRoutes>
  //     {/* Global Routes */}
  //     <Route
  //       path="/auth/activate/:token"
  //       exact
  //       element={<VerifyAccountPage />}
  //     />
  //     <Route path="/" exact element={<HomePage />} />
  //     <Route path="*" exact element={<NotFoundPage />} />

  //     {/* Not Required Auth Routes */}
  //     <Route element={<NotRequireAuth />}>
  //       <Route path="/signup" exact element={<SignupPage />} />
  //       <Route path="/signin" exact element={<SigninPage />} />
  //     </Route>

  //     {/* Required Auth Routes */}
  //     {/* Subscriper Routes */}
  //     <Route element={<RequireAuth />}>
  //       <Route path="/profile" element={<ProfilePage />} />
  //     </Route>

  //     {/* Admin Routes */}
  //     <Route element={<RequireAuth auth={["admin"]} />}>
  //       <Route path="/admin" element={<AdminPage />} />
  //     </Route>
  //     {/* Subscriper Routes */}
  //     <Route element={<RequireAuth auth={["subscriber"]} />}>
  //       <Route path="/subscriber" element={<SubscriberPage />} />
  //     </Route>
  //   </SwitchRoutes>
  // );
}

export default Routes;
