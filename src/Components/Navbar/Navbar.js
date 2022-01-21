import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.css";
import { FaSignInAlt } from "react-icons/fa";
import { logout } from "../../Services/auth";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="image4">
            <img src={"/images/image 4.png"} alt="pokelogo"></img>
          </div>
          <div className="container-links">
            <a href="/favoritos">Favoritos</a>

            <a href="/procurar">Procurar</a>

            <a href="/todos">Ver todos</a>
          </div>
          <div className="sair">
            <Link to="/" onClick={(e) => logout()}>
              Sair
            </Link>
            <FaSignInAlt />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
