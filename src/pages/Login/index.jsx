import { Link } from "react-router-dom";
import { useState } from "react";
import image from "../../assets/image.png"
import React from "react";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LayoutComponents>
      <form className="login-form">
        <h1 className="login-form-title">Bem Vindo</h1>
        <img className="image-logo" src={image} alt="logo" />

        <div className="wrap-input">
          <input
            className={email !== "" ? 'has-val input' : 'input'}
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}

          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? 'has-val input' : 'input'}
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}

          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta?</span>
          <Link className="txt2" to="/register">Criar conta</Link>
        </div>

      </form>
    </LayoutComponents>
  )
}

export default Login