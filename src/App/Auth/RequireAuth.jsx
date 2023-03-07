import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuth } from "./authHelpers";

const RequireAuth = ({ auth = ["admin", "subscriber"] }) => {
  const location = useLocation();
  const userRole = isAuth().role;

  if (auth.includes(userRole)) {
    return isAuth() ? (
      <Outlet />
    ) : (
      <Navigate to="/signin" state={{ from: location }} replace />
    );
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
