import { useState } from "react";
import "./App.css";
import Content from "./Components/Content";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import Modal from "./Components/UI/Modal";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const cartClicked = () => {
    //change cart modal state to open
    setCartOpen((cartOpen) => {
      return !cartOpen;
    });
  };
  return (
    <div className="App">
      {cartOpen && <Modal cartClicked={cartClicked} />}
      <div className="mainGrid">
        <Navbar cartClicked={cartClicked} />
        <Filter />
        <Content />
      </div>
    </div>
  );
}

export default App;
