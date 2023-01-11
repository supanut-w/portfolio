import React from "react";
import "./SidebarList.css";
import profilepic from "../../Image/laptop.jpg";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile picture" />
          </div>

          
        </div>
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
