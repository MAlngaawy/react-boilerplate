import React from "react";
import { useNavigate } from "react-router-dom";

const ToolBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex gap-4 text-md text-white">
        <SingleLink to={"/"} text="Home" />
        <SingleLink to={"/signup"} text="Sign Up" />
        <SingleLink to={"/signin"} text="Sign In" />
      </ul>
    </nav>
  );
};
export default ToolBar;

const SingleLink = ({ to, text }) => {
  const navigate = useNavigate();
  return (
    <li className=" cursor-pointer" onClick={() => navigate(to)}>
      {text}
    </li>
  );
};
