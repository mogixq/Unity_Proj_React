import React from 'react'
import ItemCard from './ItemCard'

function Items() {

    const HP_Desc = "This is a Health Potion, it heals the player's health points after he has taken damage from monsters or the environment"
    const HP_Img = `.\\images\\HP.png`

    const MP_Desc = "This is a Mana Potion, it refills the player's mana points after he has used mana to activate abilities"
    const MP_Img = `.\\images\\MP.png`

  return (
    <>
    <h2>Items</h2>
    <ItemCard name ='HP Potion' info ={HP_Desc} ImgSrc={HP_Img} rarity ='Common'/>
    <ItemCard name ='MP Potion' info ={MP_Desc} ImgSrc={MP_Img} rarity ='Common'/>
    <ItemCard name ='HP Potion' info ={HP_Desc} ImgSrc={HP_Img}/>
    <ItemCard name ='HP Potion' info ={HP_Desc} ImgSrc={HP_Img}/>
    <button onClick={() => window.scrollTo(0, 0)}>Scroll to top</button>
    </>
  )
}

export default Items