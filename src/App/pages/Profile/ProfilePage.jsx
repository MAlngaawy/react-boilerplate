import React from "react";
import { isAuth } from "../../Auth/authHelpers";
const ProfilePage = () => {
  const user = isAuth();
  return (
    <div className="container">
      <div className="flex flex-col py-32 items-center justify-center ">
        <h1>
          <span className="font-bold text-green-400">{user.name}</span> Profile
        </h1>
        <p>Welcome to the Profile page!</p>
      </div>
    </div>
  );
};
export default ProfilePage;
