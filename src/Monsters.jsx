import React from "react";
import MonsCard from "./MonsCard";

function Monsters() {
  const Gob_Desc ="The goblin is a short ranged mob, it attacks at melee distance when the player gets near enough, keep your distance and you should be safe.";
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
