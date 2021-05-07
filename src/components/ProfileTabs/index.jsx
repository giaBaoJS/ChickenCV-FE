import React from "react";

import "./index.scss";
const ProfileTabs = (props) => {
  const renderListTab = () => {
    return props.tabs.map((item, index) => (
      <div
        key={index}
        className={`tab-item ${item === props.tabActive ? "active" : ""}`}
        onClick={() => props.setTabActive(item)}
      >
        {item}
      </div>
    ));
  };
  return (
    <>
      <div className="profile-tabs container">
        <div className="list-tab row">{renderListTab()}</div>
      </div>
    </>
  );
};

export default ProfileTabs;
