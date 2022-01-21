import styled from "styled-components";


export const PokemonTypes = styled.div`
  margin-top: 10px;
`;

export const Types = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
`;

export const Type = styled.li`
    list-style: none;
    background-color: ${props => props.color};
    margin-right:5px;  
    margin-bottom:5px;
    padding:5px;
    border-radius: 8px;
    width: 44px;
    height: 15px;
    text-align: center;
    font-size: 10px;
    font-weight: 500;
    text-transform: capitalize
`;

export const Container = styled.div`
    font-family: Poppins;
    display:flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    margin-top: 5%;
`;

export const Pokemon = styled.div`
    display:flex;
    flex-direction:column;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    border-radius: 8px;
    width:165px;
    height:236px;
    padding:10px;
    margin-left:10px;
    align-items: flex-start;
`;

export const PokemonNumber = styled.div`
  color: gray;
`;

export const PokemonName = styled.div`
    font-size: 18px;
    font-weight:bold;
    margin-top: 10px;
    text-transform: capitalize;
`;

export const DetailsButton = styled.div`
  width:100%;
  margin-top: auto;
  bottom: 0;
  color:#ffcb05;
  input {
    vertical-align:bottom;
    width:100%;
    
    background: #ffcb05;
    border: none;
    border-radius: 8px;
    padding: 5px;
  }
`;

export const PokemonImgDiv = styled.div`
    width:100%;
    align-items: center;
    display: flex;
`;

export const HeartDiv = styled.div`
    position: absolute;
    align-self: flex-end;
`;

export const PokemonImg = styled.img`
  margin: auto;
`;

export const HeartPosition = styled.div`
  position: relative;
  top: -30px;
  left: 30px;
`;