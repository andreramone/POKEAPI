import React, { useState, useEffect } from "react";
import styles from "../Procurar-pokemon/Procurar-pokemon.css";
import Navbar from "../Navbar/Navbar";
import { FaSearch } from "react-icons/fa";
import api from "../../Services/api";
import Select from "react-select";
import cors from "cors";
import Heart from "react-animated-heart";
import { PokemonType } from "./Styled";
import { hexToRgb } from "@mui/material";

export default function Favoritos() {
  const [pokemons, setPokemons] = useState([]);
  const [card, setCard] = useState(null);
  const [isClick, setClick] = useState(true);

  useEffect(() => {
    api.get("pokemon").then((res) => {
      const result = res.data.results;
      setPokemons(result);
    });
  }, []);

  async function fetchSinglePokemon(e) {
    api.get(e.url).then((res) => {
      const fetchedPokemon = res.data;
      fetchedPokemon.types.map((types) => {
        switch (types.type.name) {
          case "grass":
            types.type.color = "#00FF00";
            break;

          case "poison":
            types.type.color = "#A64D79";
            break;

          case "fire":
            types.type.color = "#ff6600";
            break;

          case "water":
            types.type.color = "#3366ff";
            break;

          case "flying":
            types.type.color = "#99ccff";
            break;

          case "normal":
            types.type.color = "#ff66ff";
            break;

          case "bug":
            types.type.color = "#00ff00";
            break;
          default:
            types.type.color = "#FFFFFf";
            break;
        }
      });
      setCard(fetchedPokemon);
    });
  }

  return (
    <>
      <Navbar />

      {card && (
        <div className="container-card">
          <div className="fotopokemon">
            <img src={card.sprites["front_default"]} alt="pokeimg"></img>
          </div>
          <div className="pokename">{card.name}</div>
          <div className="pokeid">ID: {card.id}</div>
          <div className="poke-types">
            {card.types.map((types) => {
              return (
                <PokemonType key={types.type.name} color={types.type.color}>
                  {types.type.name}
                </PokemonType>
              );
            })}
          </div>
          <a href="/modal" className="detalhes">
            Ver detalhes
          </a>
          <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </div>
      )}
    </>
  );
}
