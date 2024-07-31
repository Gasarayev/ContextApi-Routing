import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Headers from "./components/Layout/Headers";
import Card from "./components/CardPage";
import ContextA from "./context/favoriteContext";
import Favorite from "./components/Favorite";


function App() {
  const [favIcon, setFavIcon] = useState([]);
  return (
    <ContextA>
      <Router>
        <Headers favIcon={favIcon.length}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shopping-list/" element={<Card favIcon={favIcon} setFavIcon={setFavIcon}/>} />
          <Route path="/favorite/"element={<Favorite favIcon={favIcon}/>} />
        </Routes>
      </Router>
    </ContextA>
  );
}

export default App;
