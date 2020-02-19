import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import UserQuantityDisplay from "../../../components/UserQuantityDisplay";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/admin/users/all").then(d => setUsers(d.data));
    axios("http://localhost:3000/admin/posts/all").then(d => setPosts(d.data));
  }, []);

  return (
    <div className="Dashboard">
      <UserQuantityDisplay title={"Users"} quantity={users} />
      <UserQuantityDisplay title={"Posts"} quantity={posts} />
    </div>
  );
}
