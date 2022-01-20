import React from "react";
import { Link } from "react-router-dom";
import LoginStyles from "../../Components/Login/Login-page.css";
import TemaEscuro from "../Tema-escuro/tema-escuro";

function Login() {
  return (
    <>
      <div className="login">
        <div className="formlogin">
          <div className="image1"></div>

          <h1 className="entrada">Comece a coletar pokémons!</h1>
          <input
            type="text"
            placeholder="Email"
            className="Rectangle1"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="Rectangle2"
            required
          />
          <div className="Rectangle3">
            <a href="/home" className="entrar">
              Entrar
            </a>
          </div>
        </div>
      </div>

      <div className="bg-light1"></div>
    </>
  );
}

export default Login;
