import React from "react";
import Form from "./signinComponents/Form";
import { isAuth } from "../../Auth/authHelpers";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
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
export default SigninPage;
