import React from "react";
import "./SidebarList.css";
import profilepic from "../../Image/laptop.jpg";
import { FcHome } from "react-icons/fc";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile picture" />
          </div>

          <ul>
            <li className="nav-item">
              <FcHome size={25} /> Home
            </li>
            <li className="nav-item">
              <FcHome size={25} /> About
            </li>
            <li className="nav-item">
              <FcHome size={25} /> Work Experience
            </li>
            <li className="nav-item">
              <FcHome size={25} /> Tech Stack
            </li>
            <li className="nav-item">
              <FcHome size={25} /> Education
            </li>
            <li className="nav-item">
              <FcHome size={25} /> Projects
            </li>
            <li className="nav-item">
              <FcHome size={25} /> Testimonial
            </li>
            <li className="nav-item">
              <FcHome size={25} /> Contact
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
            <li className="nav-item">
              <FcHome size={25} />
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
