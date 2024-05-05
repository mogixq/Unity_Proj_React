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
              marginRight: 50,
              float: "right",
            }}
          />
          <table style={{
            borderBlock:"solid black 2px",
          }}>
            <tr>
              <th>HP</th>
              <th>Attack Range</th>
              <th>Danger</th>
            </tr>
            <tr>
                <td>1</td>
                <td>close</td>
                <td>mildly</td>
            </tr>
          </table>
          <br />
        </div>
        <p>{props.info}</p>
      </div>
    </>
  );
}

export default MonsCard;
