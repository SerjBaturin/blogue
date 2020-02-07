import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";

export default function Dashboard() {
  const [data, setData] = useState();
  useEffect(() => {
    axios("http://localhost:3000/dashboard").then(d => setData(d.data.name));
  }, []);

  return (
    <div className="Dashboard">
      <h2>{data}</h2>
    </div>
  );
}
