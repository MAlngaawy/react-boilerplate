import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuth } from "./authHelpers";

const NotRequireAuth = () => {
  const location = useLocation();

  return isAuth() ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default NotRequireAuth;
