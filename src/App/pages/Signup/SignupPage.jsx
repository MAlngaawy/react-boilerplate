import React from "react";
import Form from "./signupComponents/Form";
import { isAuth } from "../../Auth/authHelpers";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  if (isAuth()) {
    return navigate("/");
  }
  return (
    <div className="py-10">
      <Form />
    </div>
  );
};
export default SignupPage;
