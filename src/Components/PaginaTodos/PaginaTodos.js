import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import api from "../../Services/api";
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
        result.data.results.map(async (pkm) => {
          const singlePokemon = await getSinglePokemon(pkm.url);
          singlePokemon.data.types.map((types) => {
            switch (types.type.name) {
              case "grass":
                return types.type.color = "#00FF00";

              case "poison":
                return types.type.color = "#A64D79";

              case "fire":
                return types.type.color = "#ff6600";

              case "water":
                return types.type.color = "#3366ff";

              case "flying":
                return types.type.color = "#99ccff";

              case "normal":
                return types.type.color = "#ff66ff";

              case "bug":
                return types.type.color = "#00ff00";
              default:
                return types.type.color = "#FFFFFf";
            }
          });
          pkm.card = singlePokemon.data;
          return pkm;
        })
        );
        
        setPokemons(pokemonsArr);
        console.log(pokemons);
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
                  {pokemon.card.types.length > 0 && (
                    <PokemonTypes>
                      <Types>
                        {pokemon.card.types.map((pokemonTypes) => (
                          <Type color={pokemonTypes.type.color}>
                            {pokemonTypes.type.name}
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