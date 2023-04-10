import React, { createContext, useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Ingredient from "./Ingredient";
import { isValid } from "../../Utils/IngredientUtils";
import RecipeService from "../../services/RecipeService";

function CreateRecipeModal(props) {
  const [recipeName, setRecipeName] = useState("");
  const [ingredientList, setIngredientList] = useState([
    { name: "", amount: "", unit: "pcs" },
  ]);

  const handleClose = () => {
    props.setShowModal(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 3,
  };

  const verifySyntax = () => {
    console.log(ingredientList);
    return ingredientList.every(
      (ingredient) => isValid(ingredient.amount) && ingredient.name.length > 0
    );
  };

  const createRecipe = () => {
    if (!verifySyntax()) {
      alert("check your ingredients");
    } else {
      RecipeService.createRecipe(recipeName, ingredientList)
      .then((res) => {
        alert("recipe created!")
        props.setShowModal(false)
      })
      .catch((err) => alert(err))
    }
  };

  const addIngredient = () => {
    setIngredientList([
      ...ingredientList,
      { name: "", amount: "1", unit: "pcs" },
    ]);
  };

  const removeIngredient = () => {
    setIngredientList(ingredientList.slice(0, -1));
  };

  const testButton = () => {
    console.log(ingredientList);
  };

  const handleIngredientUpdate = (key, type, newValue) => {
    let newIngredientList = ingredientList;
    newIngredientList[key][type] = newValue;
    setIngredientList(newIngredientList);
    console.log(ingredientList);
  };

  return (
    <Modal open={props.showModal} onClose={handleClose}>
      <Box sx={style}>


        <TextField
          label="Recipe Name"
          onChange={(event) => setRecipeName(event.target.value)}
        />
        <br />
        <br />
        {ingredientList.map((ingredient, index) => (
          <Ingredient
            key={index}
            keyProp={index}
            handleIngredientUpdate={handleIngredientUpdate}
            name={ingredient.name}
            amount={ingredient.amount}
            unit={ingredient.unit}
          ></Ingredient>
        ))}
        <br />
        <Button onClick={addIngredient}>+</Button>
        {ingredientList.length > 1 && (
          <Button onClick={removeIngredient}>-</Button>
        )}
        <br />
        <br />
        <br />
        <Button onClick={createRecipe}>Create Recipe</Button>
      </Box>
    </Modal>
  );
}

export default CreateRecipeModal;
