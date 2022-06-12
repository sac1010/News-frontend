import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        height: "130px",
      }}
    >
      <NavLink to="/topstories">TOP STORIES</NavLink>
      <NavLink to="/newstories">NEW STORIES</NavLink>
      <NavLink to="/beststories"> BEST STORIES</NavLink>
    </div>
  );
};

export default Header;
