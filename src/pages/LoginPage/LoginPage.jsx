import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import "./LoginPage.css";
import { login } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
const LoginPage = () => {
  const err = useSelector((state) => state.auth.value.loggedInError);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const loginHandler = () => {
    dispatch(login({ username, password }));
    navigate("/home");
  };

  const onPressHandler = (e) => {
    if (e.key === "Enter") {
      loginHandler();
    }
  };

  return (
    <div className="login-page-bg">
      <div className="login-page__wrapper fadeIn">
        <div className="login-page__div">
          <h1 className="login-page__title">Address Book Login</h1>

          <Input
            type="text"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            onKeyPress={onPressHandler}
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
            onKeyPress={onPressHandler}
            defaultValue={password}
            value={password}
            placeholder="password.."
            labelName="Password"
          />
          {err !== "" ? (
            <h3 className="login-page__error fadeIn">{err}</h3>
          ) : (
            <h3> </h3>
          )}
          <Button onClick={loginHandler} text="Login" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
