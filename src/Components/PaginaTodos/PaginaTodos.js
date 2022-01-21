import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import api from "../../Services/api";
import Select from "react-select";
import Heart from "react-animated-heart";
import styles from "./Paginatodos.css";
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
  HeartPosition,
} from "./Styled.js";

export default function Paginatodos() {
  const [pokemons, setPokemons] = useState([]);
  const [isClick, setClick] = useState(true);

  useEffect(() => {
    async function getSinglePokemon(url) {
      return api.get(url);
    }
    async function getPokemons() {
      const result = await api.get("pokemon");
      
      let pokemonsArr = await Promise.all(
        result.data.results.map(async (e) => {
          const singlePokemon = await getSinglePokemon(e.url);
          // singlePokemon.data.types.map((types) => {
          //   switch (types.type.name) {
          //     case "grass":
          //       types.type.color = "#00FF00";
          //       break;

          //     case "poison":
          //       types.type.color = "#A64D79";
          //       break;

          //     case "fire":
          //       types.type.color = "#ff6600";
          //       break;

          //     case "water":
          //       types.type.color = "#3366ff";
          //       break;

          //     case "flying":
          //       types.type.color = "#99ccff";
          //       break;

          //     case "normal":
          //       types.type.color = "#ff66ff";
          //       break;

          //     case "bug":
          //       types.type.color = "#00ff00";
          //       break;
          //     default:
          //       types.type.color = "#FFFFFf";
          //       break;
          //   }
          // });
          e.card = singlePokemon.data;
          return e;
        })
        );
        setPokemons(pokemonsArr);
        console.log(pokemons)
    }
    getPokemons();
  }, []);

  return (
    <>
      <Navbar />
      <div className="content">
        {pokemons.length > 0 && (
          <Container>
            {pokemons.map((pokemon) => {
              return (
                <Pokemon key={pokemon.name}>
                  <HeartDiv>
                    <HeartPosition>
                      <Heart
                        isClick={isClick}
                        onClick={() => setClick(!isClick)}
                      />
                    </HeartPosition>
                  </HeartDiv>
                  <PokemonImgDiv>
                    {pokemon.card.sprites && (
                      <PokemonImg
                        src={pokemon.card.sprites["front_default"]}
                        alt={`Imagem do pokémon ${pokemon.name}`}
                      />
                    )}
                  </PokemonImgDiv>
                  <PokemonName>{pokemon.name}</PokemonName>
                  <PokemonNumber>ID:{pokemon.card.id}</PokemonNumber>
                  {pokemon.card.types && (
                    <PokemonTypes>
                      <Types>
                        {pokemon.types.map((pokemonTypes) => (
                          <Type color={pokemonTypes.card.type.color}>
                            {pokemonTypes.card.type.name}
                          </Type>
                        ))}
                      </Types>
                    </PokemonTypes>
                  )}
                  <DetailsButton>
                    <input type="button" value="Ver Detalhes" />
                  </DetailsButton>
                </Pokemon>
              );
            })}
          </Container>
        )}
      </div>
    </>
  );
}
