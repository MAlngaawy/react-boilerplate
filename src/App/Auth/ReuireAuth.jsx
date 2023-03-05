import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuth } from "./authHelpers";

const RequireAuth = () => {
  const location = useLocation();

  return isAuth() ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
