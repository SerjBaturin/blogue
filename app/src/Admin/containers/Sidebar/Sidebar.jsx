import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink to="/admin/dashboard">Dashboard</NavLink>
      <NavLink to="/admin/users">Users</NavLink>
      <NavLink to="/admin/posts">Posts</NavLink>
    </div>
  );
}
