import React from "react";

function Index() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(./images/Wiki_Logo.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "150px",
          borderRadius:20
        }}
      >
        <h1 style={{ color: "white", textShadow: "0 0 5px blue" }}>
          {" "}
          UAG WIKI
        </h1>
        <h3 style={{ color: "white", textShadow: "0 0 5px black" }}>
          Welcome to the Unity-Algorithm-Game wiki!
        </h3>
      </div>
      <div className="card">
        <p>
          In this wikipedia of the Computer Science project you can read about
          the algorithms, items, and monsters in the game. Use the menu at the top to navigate the pages.
        </p>
        <p>This is a Roguelike game, made in the unity engine in C#. 
          The game was made by Almog, Philip & Moshe, it is currently work in progress and more is to be added to the game.
        </p>
      </div>
      <br />
      <div>
        <img
          src=".\\images\\UnityLogo.png"
          alt="unity logo"
          style={{ width: 125, borderRadius: 5 }}
        />
        <img
          src=".\\images\\CSLogo.png"
          alt="c# logo"
          style={{ marginLeft: 20, width: 45, borderRadius: 5 }}
        />
      </div>
    </div>
  );
}

export default Index;
