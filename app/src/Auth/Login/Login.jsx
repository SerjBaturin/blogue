import React, { useRef, useState } from "react";
// import { connect } from "react-redux";
import "./style.scss";

const Login = props => {
  const [user, setUser] = useState(null);
  const login = useRef(null);
  const getUser = () => {
    setUser(login.current.value);
  };
  return (
    <div className="Login">
      <h2>Login</h2>

      <input ref={login} type="text" placeholder="Login" required />
      <button onClick={getUser}>Click</button>
      <h4>{user}</h4>
    </div>
  );
};

export default Login;
