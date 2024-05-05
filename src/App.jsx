import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Algorithms from "./Algorithms";
import Items from "./Items";
import Index from "./Index";
import Monsters from "./Monsters";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [color, setColor] = useState("black");
  
  const changeDarkMode = () => {
    if (darkmode) {
      setDarkmode(false);
      setBackgroundColor("white");
      setColor("black");
    } else {
      setDarkmode(true);
      setBackgroundColor("grey");
      setColor("white");
    }
  };

  useEffect(() => {
    console.log("dark mode ", darkmode);
  }, [darkmode]);

  return (
    <>
      <div
        style={{
          border: "solid #1E90FF 2px",
          margin: 10,
          padding: 10,
          borderRadius: 10,
          maxWidth: 444,
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
        <div>
          <Link to="/"> Home</Link> |<Link to="/algos"> Algorithms</Link> |
          <Link to="/items"> Items</Link> |<Link to="/monsters"> Monsters</Link>
        </div>

        <div>
          <Routes>
            <Route
              path="/"
              element={<Index changeDarkMode={changeDarkMode} />}
            />
            <Route
              path="/algos"
              element={<Algorithms changeDarkMode={changeDarkMode} />}
            />
            <Route
              path="/items"
              element={<Items changeDarkMode={changeDarkMode} />}
            />
            <Route
              path="/monsters"
              element={<Monsters changeDarkMode={changeDarkMode} />}
            />
          </Routes>
        </div>
        <br />
      </div>
    </>
  );
}

export default App;
