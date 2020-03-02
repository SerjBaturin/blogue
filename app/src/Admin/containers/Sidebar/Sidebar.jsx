import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="Admin__Sidebar">
      <NavLink to="/admin/dashboard">Dashboard</NavLink>
      <NavLink to="/admin/users">Users</NavLink>
      <NavLink to="/admin/posts">Posts</NavLink>
    </div>
  );
}
