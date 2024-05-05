import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Algorithms from "./Algorithms";
import Items from "./Items";
import Index from "./Index";
import Monsters from "./Monsters";


function App() {

  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeDarkMode = ()=>{
    if (backgroundColor == 'white') {
      setBackgroundColor('grey');
    } else setBackgroundColor('white');
  }

  useEffect(() => {
    console.log('changed background color',backgroundColor);
  }, [backgroundColor])
  

  return (
    <>
      <div
        style={{
          border: "solid #1E90FF 2px",
          margin: 10,
          padding: 10,
          borderRadius: 10,
          maxWidth: 444,
          backgroundColor: backgroundColor
        }}
      >
        <div>
          <Link to="/"> Home</Link> |
          <Link to="/algos"> Algorithms</Link> |
          <Link to="/items"> Items</Link> |
          <Link to="/monsters"> Monsters</Link>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Index changeDarkMode ={changeDarkMode} />} />
            <Route path="/algos" element={<Algorithms changeDarkMode ={changeDarkMode} />} />
            <Route path="/items" element={<Items changeDarkMode ={changeDarkMode} />} />
            <Route path="/monsters" element={<Monsters changeDarkMode ={changeDarkMode} />} />
          </Routes>
        </div>
        <br />
      </div>
    </>
  );
}

export default App;
