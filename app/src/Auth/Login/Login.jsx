import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";

const Login = () => {
  const sendData = () => {
    const login = "kostya";
    const email = "kostya@yandex.ru";
    const password = "123123";
    axios(`http://localhost:3000/auth/user/${login}&${password}`);
  };

  return (
    <div className="login">
      <button onClick={sendData}>SEND</button>
    </div>
    // <div className="login">
    //   <form className="login__form">
    //     <input type="text" placeholder="login" />
    //     <input type="text" placeholder="password" />
    //     <input type="submit" />
    //   </form>
    // </div>
  );
};

export default Login;
