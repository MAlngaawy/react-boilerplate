import React from "react";
import { useNavigate } from "react-router-dom";

const ToolBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex gap-4 text-md text-white">
        <SingleLink to={"/"} text="Home" />
        <SingleLink to={"/signup"} text="SignUp" />
      </ul>
    </nav>
  );
};
export default ToolBar;

const SingleLink = ({ to, text }) => {
  const navigate = useNavigate();
  return (
    <li className="" onClick={() => navigate(to)}>
      {text}
    </li>
  );
};
