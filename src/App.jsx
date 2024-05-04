import "./App.css";
import Algorithms from "./Algorithms";
import { Routes, Route, Link } from "react-router-dom";
import Items from "./Items";
import Index from "./Index";

function App() {

  return (
    <>
      <div
        style={{
          border: "solid #1E90FF 2px",
          margin: 10,
          padding: 10,
          borderRadius: 10,
          maxWidth: 444,
        }}
      >
        <div>
          <Link to="/">Home</Link> |
          <Link to="/algos">Algos</Link> |
          <Link to="/items">Items</Link>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/algos" element={<Algorithms />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
