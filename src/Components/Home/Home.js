import React from "react"
import { Link } from "react-router-dom"
import styles from '../Home/Home.css'
import Navbar from "../Navbar/Navbar"
    
      function Home() {           
    
          return (
            <>
            <Navbar/>
            <div className="image-astronauta"></div>
            <div className="mensagem-vazio">Está meio vazio por aqui!</div>
            <p className="procure-pokemon">Procure por pokémons para adicioná-los aos seus favoritos.</p>
            <div className="procurar-pokemon">
            <Link to="/procurar" className="linkpokemon">Procurar pokémons</Link>
            </div>

            </>
         
        )
          }
      

export default Home


        