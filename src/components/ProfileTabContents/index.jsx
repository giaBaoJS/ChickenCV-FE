import React from "react";

const ProfileTabContent = (Component) => {
  return (props) => {
    return (
      <div className="container">
        <Component />
      </div>
    );
  };
};

export default ProfileTabContent;
