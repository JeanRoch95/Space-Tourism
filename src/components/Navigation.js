import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="./img/logo.svg" alt="eds" />
      <hr />
      <div className="bg-nav"></div>

      <div className="nav">
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          00 Home
        </NavLink>
        <NavLink
          to="/destination"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          01 Destination
        </NavLink>
        <NavLink
          to="/crew"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          02 Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          03 Technology
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
