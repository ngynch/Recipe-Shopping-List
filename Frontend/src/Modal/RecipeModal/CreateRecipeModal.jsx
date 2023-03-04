import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, darkScrollbar } from "@mui/material";

import Ingredient from "./Ingredient";

function CreateRecipeModal(props) {
  const [count, setCount] = useState(1);

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

  const handleChange = () => {
    debugger;
    document.getElementById();
  };

  const ingredients = [];
  for (let i = 1; i <= count; i++) {
    ingredients.push(<br />);
    ingredients.push(<Ingredient />);
  }
  return (
    <Modal open={props.showModal} onClose={handleClose}>
      <Box sx={style}>
        <TextField label="Recipe Name" />
        <br />
        {ingredients}
        <br />
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </Button>
        {count > 1 && (
          <Button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </Button>
        )}
        <br />
        <br />
        <br />
        <Button>Create Recipe</Button>
      </Box>
    </Modal>
  );
}

export default CreateRecipeModal;
