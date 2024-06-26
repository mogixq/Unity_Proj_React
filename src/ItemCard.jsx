import React from "react";

function ItemCard(props) {
  return (
    <>
      <div
        style={{
          border: `solid ${props.RarColor} 2px`,
          margin: 10,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <h4>{props.name}</h4>
        <p style={{
            color: `${props.RarColor}`
        }}>Rarity: {props.rarity}</p>
        <img
          src={props.ImgSrc}
          alt="img couldnt show"
          style={{
            width: "90px",
            height: "90px",
            marginRight: 10,
            float: "left",
            borderRadius: 10
          }}
        />
        <p>{props.info}</p>
        <br />
      </div>
    </>
  );
}

export default ItemCard;
