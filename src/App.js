import "./App.css";
import CreateRecipeModal from "./Modal/CreateRecipeModal";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showCreateRecipeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={showCreateRecipeModal}>+ Create Recipe +</Button>
        <Button onClick="">Create Meal Plan</Button>
        <Button onClick="">Generate Shopping List</Button>

        {showModal && (
          <CreateRecipeModal
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </header>
    </div>
  );
}

export default App;
