import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login-page";
import Error from "./Components/Error-Page/ErrorPage";
import TemaEscuro from "./Components/Tema-escuro/tema-escuro";
import Home from "./Components/Home/Home";
import ProcurarPokemon from "./Components/Procurar-pokemon/Procurar-pokemon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/procurar" element={<ProcurarPokemon />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
