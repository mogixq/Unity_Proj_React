import React from "react";

function Algorithms() {

  const BSP_Info = "The algorithm is used to create the game map in a procedural way, the map starts as one large space, and the algorithm divides it into two parts, then the algorithm divides each created space into two until each space reaches the minimum allowed size, and this is how the division ends. From the spaces created we create the rooms that make up the game map."


  return (
    <>
    <div>
      <h3>Algorithms</h3>
      <p>The main algorithms used in the game</p>
    </div>
    <div>
        <h4>Binary Space partitioning</h4>
        <p>{BSP_Info}</p>
    </div>
    </>
  );
}

export default Algorithms;
