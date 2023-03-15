import React from "react";
import EditForm from "./EditForm/EditForm";
const SettingsPage = () => {
  return (
    <div className="container mx-auto flex justify-center items-center flex-col ">
      <h1>Settings Page</h1>
      <div className="my-20">
        <EditForm />
      </div>
      <p>Welcome to the Settings page!</p>
    </div>
  );
};
export default SettingsPage;
