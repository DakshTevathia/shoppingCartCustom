import { useState } from "react";
import "./App.css";
import Content from "./Components/Content";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import Modal from "./Components/UI/Modal";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [selected, setSelected] = useState({
    ascendingChosen: false,
    descendingChosen: false,
    inStockChosen: false,
    fastDeliveryChosen: false,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const cartClicked = () => {
    //change cart modal state to open
    setCartOpen((cartOpen) => {
      return !cartOpen;
    });
  };

  const passToParent = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  return (
    <div className="App">
      {cartOpen && <Modal cartClicked={cartClicked} />}
      <div className="mainGrid">
        <Navbar cartClicked={cartClicked} passToParent={passToParent} />
        <Filter selected={selected} setSelected={setSelected} />
        <Content selected={selected} searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default App;
