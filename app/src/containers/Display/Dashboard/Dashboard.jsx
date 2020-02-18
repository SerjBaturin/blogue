import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import UserQuantityDisplay from "../../../components/UserQuantityDisplay";

export default function Dashboard() {
  const [data, setData] = useState();
  useEffect(() => {
    axios("http://localhost:3000/dashboard/quantity").then(d =>
      setData(d.data),
    );
  }, []);

  return (
    <div className="Dashboard">
      <UserQuantityDisplay quantity={data} />
      <UserQuantityDisplay quantity={data} />
      <UserQuantityDisplay quantity={data} />
      <UserQuantityDisplay quantity={data} />
    </div>
  );
}
