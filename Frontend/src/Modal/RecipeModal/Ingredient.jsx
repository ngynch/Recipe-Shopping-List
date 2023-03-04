import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField, InputLabel, FormControl } from "@mui/material";

function Ingredient() {
  const [unit, setUnit] = useState("Piece");

  const handleChange = (event) => {
    setUnit(event.target.value);
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <TextField label={`Ingredient`} />
      </Grid>
      <Grid item xs={2}>
        <TextField type="number" />
      </Grid>
      <Grid item xs={3}>
        <FormControl>
          <InputLabel>Unit</InputLabel>
          <Select label="Unit" value={unit} onChange={handleChange}>
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
