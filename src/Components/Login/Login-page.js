import React, { useState } from "react";
import LoginStyles from "../../Components/Login/Login-page.css";
import { useStateMachine } from "little-state-machine";
import { login, isAuthenticated } from "../../Services/auth";
import { useNavigate } from "react-router-dom";
import e from "cors";
import {DetailsButton} from './Styled'

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const { actions, state } = useStateMachine({ updateValues });
  function updateValues(state, payload) {
    return {
      ...state,
      yourDetail: {
        ...state.yourDetail,
        ...payload,
      },
    };
  }

  function handleSubmit(e) {
    e.preventDefault()
    login(email, senha);
    navigate('/home')
  }

  return (
    <>
      <div className="login">
        <form className="formlogin" onSubmit={handleSubmit}>
          <div className="image1"></div>

          <h1 className="entrada">Comece a coletar pokémons!</h1>

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="Rectangle1"
            required
          />
          <input
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            placeholder="Senha"
            className="Rectangle2"
            required
          />
          <div className="Rectangle3">
            <DetailsButton>
              <input type="submit" class="entrar" value="Entrar"/>
            </DetailsButton>
          </div>
        </form>
      </div>

      <div className="bg-light1"></div>
    </>
  );
}

export default Login;
