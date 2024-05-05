import React from "react";
import MonsCard from "./MonsCard";

function Monsters() {
  const Gob_Desc ="The goblin is a short ranged mob, it attacks at melee distance when the player gets near enough, keep your distance and you should be safe.";
  const Gob_Img = `.\\images\\Goblin.png`;
  const Gob_HP = '3';
  const Gob_AR = 'close';
  const Gob_Danger = 'mild';

  const OrcM_Desc ="The Orc Mage is a long ranged mob, it attacks from a distance using a ranged spell attack, get behind cover to block the spells.";
  const OrcM_Img = `.\\images\\OrcMage.png`;
  const OrcM_HP = '5';
  const OrcM_AR = 'far';
  const OrcM_Danger = 'medium';

  return (
    <>
      <h2>Monsters</h2>
      <p>The foes that can be encountered in the game world</p>
      <MonsCard
        name="Goblin"
        info={Gob_Desc}
        ImgSrc={Gob_Img}
        HP ={Gob_HP}
        AttaRang={Gob_AR}
        danger={Gob_Danger}
      />
      <MonsCard
        name="Orc Mage"
        info={OrcM_Desc}
        ImgSrc={OrcM_Img}
        HP ={OrcM_HP}
        AttaRang={OrcM_AR}
        danger={OrcM_Danger}
      />
    </>
    
  );
}

export default Monsters;
