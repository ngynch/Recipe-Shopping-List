import CreateRecipeModal from "../Modal/RecipeModal/CreateRecipeModal";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StartPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const showCreateRecipeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Button onClick={showCreateRecipeModal}>+ Create Recipe +</Button>
      <Button onClick={() => navigate("/meal_planner")}>
        Create Week Meal Plan
      </Button>
      <Button onClick="">Generate Shopping List</Button>

      {showModal && (
        <CreateRecipeModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
}

export default StartPage;
