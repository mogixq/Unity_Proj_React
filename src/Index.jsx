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
        }}
      >
        <h1 style={{color:'white', 'textShadow':'0 0 5px blue'}}> UAG WIKI</h1>
        <h3 style={{color:'white', 'textShadow':'0 0 5px black'}}>Welcome to the Unity-Algorithm-Game wiki!</h3>
      </div>
      <div className="card">
        <p>
          In this wikipedia of the Computer Science project you can read about
          the algorithms, items, and monsters in the game
        </p>
      </div>
    </div>
  );
}

export default Index;
