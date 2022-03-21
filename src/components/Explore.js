import React from "react";
import { NavLink } from "react-router-dom";
const Explore = () => {
  return (
    <NavLink to="/destination">
      <div className="btn-explore">Explore</div>
    </NavLink>
  );
};

export default Explore;
