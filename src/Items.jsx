import React from 'react'
import ItemCard from './ItemCard'

function Items() {

    const HP_Desc = "This is a Health Potion, it heals the player's HP after he has taken damage from monsters or the environment"
    const HP_Img = `.\\images\\HP.png`

  return (
    <>
    <h2>Items</h2>
    <ItemCard name ='HP Potion' info ={HP_Desc} ImgSrc={HP_Img}/>
    <ItemCard name ='HP Potion' info ={HP_Desc} ImgSrc={HP_Img}/>
    <ItemCard name ='HP Potion' info ={HP_Desc} ImgSrc={HP_Img}/>
    <ItemCard name ='HP Potion' info ={HP_Desc} ImgSrc={HP_Img}/>
    </>
  )
}

export default Items