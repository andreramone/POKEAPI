import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login/Login-page";
import Error from "./Components/Error-Page/ErrorPage";
import Home from "./Components/Home/Home";
import ProcurarPokemon from "./Components/Procurar-pokemon/Procurar-pokemon";
import { Modal } from "@mui/material";
import {
  StateMachineProvider,
  createStore,
  useStateMachine,
} from "little-state-machine";
import { isAuthenticated } from "./Services/auth";
import PaginaTodos from "./Components/PaginaTodos/PaginaTodos";
import Favoritos from "./Components/Favoritos/Favoritos";

function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

function App() {
  createStore({
    yourDetail: { email: "", senha: "" },
  });

  return (
    <StateMachineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            exact
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/procurar"
            element={
              <PrivateRoute>
                <ProcurarPokemon />
              </PrivateRoute>
            }
          />
          <Route exact path="/todos" element={<PaginaTodos />} />
          <Route exact path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </StateMachineProvider>
  );
}

export default App;
