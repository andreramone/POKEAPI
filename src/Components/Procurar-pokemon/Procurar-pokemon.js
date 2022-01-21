import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import api from "../../Services/api";
import Select from "react-select";
import Heart from "react-animated-heart";
import styles from './Procurar-pokemon.css'
import {
  PokemonTypes,
  Container,
  Pokemon,
  PokemonNumber,
  PokemonName,
  DetailsButton,
  PokemonImg,
  PokemonImgDiv,
  Types,
  Type,
  HeartDiv,
  HeartPosition
} from "./Styled.js";

export default function ProcurarPokemon() {
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
      <div className="content">
      <Select
        className=".css-b62m3t-container"
        onChange={(e) => fetchSinglePokemon(e)}
        options={pokemons}
        getOptionLabel={(pokemon) => pokemon.name}
        getOptionValue={(pokemon) => pokemon.name}
      />

      {card && (
        <Container>
          <Pokemon>
            <HeartDiv>
              <HeartPosition>
                <Heart isClick={isClick} onClick={() => setClick(!isClick)}/>
              </HeartPosition>
            </HeartDiv>
            <PokemonImgDiv>
              {card.sprites && (
                <PokemonImg src={card.sprites["front_default"]} alt={`Imagem do pokémon ${card.name}`} />
              )}
            </PokemonImgDiv>
            <PokemonName>{card.name}</PokemonName>
            <PokemonNumber>ID:{card.id}</PokemonNumber>
            {card.types && (
              <PokemonTypes>
                <Types>
                  {card.types.map(pokemonTypes => (
                    <Type color={pokemonTypes.type.color}>{pokemonTypes.type.name}</Type>
                  ))}
                </Types>
              </PokemonTypes>
            )
            }
            <DetailsButton>
              <input type='button' value="Ver Detalhes" />
            </DetailsButton>
          </Pokemon>
        </Container>

      )
      }
      </div>
    </>
  );
}