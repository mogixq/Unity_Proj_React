import React from "react";
import MonsCard from "./MonsCard";

function Monsters() {
  const Gob_Desc =
    "This is a Health Potion, it heals the player's health points after he has taken damage from monsters or the environment.";
  const Gob_Img = `.\\images\\HP.png`;

  return (
    <>
      <h2>Monsters</h2>
      <p>The foes that can be encountered in the game world</p>
      <MonsCard
        name="Goblin"
        info={Gob_Desc}
        ImgSrc={Gob_Img}
        AttaRang="near"
      />
    </>
  );
}

export default Monsters;
