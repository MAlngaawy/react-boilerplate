import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cn from "classnames";
import { isAuth, signOut } from "../../App/Auth/authHelpers";

const ToolBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-500 px-6">
      <ul className="flex gap-4 text-md text-white">
        <SingleLink to={"/"} text="Home" />
        {!isAuth() ? (
          <>
            <SingleLink to={"/signup"} text="Sign Up" />
            <SingleLink to={"/signin"} text="Sign In" />
          </>
        ) : (
          <li
            className="cursor-pointer px-2 py-3"
            onClick={() => signOut(() => navigate("/signin"))}
          >
            Signout
          </li>
        )}
      </ul>
    </nav>
  );
};
export default ToolBar;

const SingleLink = ({ to, text }) => {
  const location = useLocation();
  const active = location.pathname === to;
  const navigate = useNavigate();
  return (
    <li
      className={cn(" cursor-pointer px-2 py-3", {
        "bg-white text-blue-500": active,
      })}
      onClick={() => navigate(to)}
    >
      {text}
    </li>
  );
};
