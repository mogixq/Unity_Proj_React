import React from "react";

function MonsCard(props) {
  return (
    <>
      <div
        style={{
          border: "solid black 2px",
          margin: 10,
          padding: 10,
          borderRadius: 10,
          minHeight: 200,
        }}
      >
        <h4>{props.name}</h4>
        <div>
          <img
            src={props.ImgSrc}
            alt="img couldnt show"
            style={{
              width: "100x",
              height: "100px",
              marginRight: 30,
              borderRadius: 10,
              float: "right",
            }}
          />
          <table
            style={{
              minHeight: 80,
              minWidth: 230
            }}
          >
            <thead>
              <tr>
                <th>HP</th>
                <th>Attack Range</th>
                <th>Danger</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.HP}</td>
                <td>{props.AttaRang}</td>
                <td>{props.danger}</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <p>{props.info}</p>
      </div>
    </>
  );
}

export default MonsCard;
