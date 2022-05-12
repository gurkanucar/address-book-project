import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import "./LoginPage.css";
import { login } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const LoginPage = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const loginHandler = () => {
    dispatch(login({ username, password }));
    navigate("/home");
  };

  return (
    <div className="login-page__div">
      <h1>Login</h1>
      <br />
      <Input
        type="text"
        name="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        defaultValue={username}
        value={username}
        placeholder="username.."
        labelName="Username"
      />
      <Input
        type="password"
        name="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        defaultValue={password}
        value={password}
        placeholder="password.."
        labelName="Password"
      />
      <button
        onClick={loginHandler}
        className="login-page__login__btn"
        type="submit"
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
