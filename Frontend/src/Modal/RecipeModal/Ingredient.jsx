import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField, InputLabel, FormControl } from "@mui/material";
import { isValid } from "../../Utils/IngredientUtils";

function Ingredient(props) {
  // const [unit, setUnit] = useState("gr");
  // const [amount, setAmount] = useState("1");
  const [warningAmount, setWarningAmount] = useState("error");
  const [warningName, setWarningName] = useState("error");



  const handleChange = (type, event) => {
    if (type === "amount"){
      event.target.value = event.target.value.replace(',', '.');
      if (!isValid(event.target.value)){
        setWarningAmount("error")
      } else {
        setWarningAmount("")
      }
    }

    if (type === "name"){
      if (event.target.value.length < 1){
        setWarningName("error")
      } else {
        setWarningName("")
      }
    }

    props.handleIngredientUpdate(props.keyProp, type, event.target.value);

  };

  return (
    <Grid container>
      <Grid item xs={4}>
        <TextField
          label={`ingredient`}
          color={warningName}
          focused={warningName ? true : false}
          onChange={(event) => handleChange("name", event)}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          label="amount"
          color={warningAmount}
          focused={warningAmount ? true : false}
          onChange={(event) => handleChange("amount", event)}
        />
      </Grid>
      <Grid item xs={3}>
        <FormControl>
          <InputLabel>unit</InputLabel>
          <Select defaultValue="pcs" onChange={(event) => handleChange("unit", event)}>
            <MenuItem value="pcs">pcs</MenuItem>
            <MenuItem value="gr">gr</MenuItem>
            <MenuItem value="kg">kg</MenuItem>
            <MenuItem value="ml">ml</MenuItem>
            <MenuItem value="l">l</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default Ingredient;
