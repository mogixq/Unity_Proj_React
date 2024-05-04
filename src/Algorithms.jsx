import React from "react";
import AlgoCard from "./AlgoCard";

function Algorithms() {
  const BSP_Info =
    "The algorithm is used to create the game map in a procedural way, the map starts as one large space, and the algorithm divides it into two parts, then the algorithm divides each created space into two until each space reaches the minimum allowed size, and this is how the division ends. From the spaces created we create the rooms that make up the game map.";

  return (
    <>
      <div>
        <h3>Algorithms</h3>
        <p>The main algorithms used in the game</p>
      </div>
      <AlgoCard name ='Binary Space Partitioning' info ={BSP_Info}/>
    </>
  );
}

export default Algorithms;
