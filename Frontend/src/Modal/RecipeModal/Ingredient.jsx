import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField, InputLabel, FormControl } from "@mui/material";
import { isValid } from "../../Utils/IngredientUtils";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import IngredientService from "../../services/IngredientService";
const filter = createFilterOptions();

function Ingredient(props) {
  // const [unit, setUnit] = useState("gr");
  // const [amount, setAmount] = useState("1");
  const [warningAmount, setWarningAmount] = useState("error");
  const [warningName, setWarningName] = useState("error");
  const [value, setValue] = useState();
  const [ingredientOptions, setIngredientOptions] = useState([]);

  useEffect(() => {
    IngredientService.getAllIngredients().then((res) => {
      setIngredientOptions(res.data);
    });
  }, [ingredientOptions.length]);

  const handleChange = (type, event) => {
    if (type === "amount") {
      event.target.value = event.target.value.replace(",", ".");
      if (!isValid(event.target.value)) {
        setWarningAmount("error");
      } else {
        setWarningAmount("");
      }
    }

    props.handleIngredientUpdate(props.keyProp, type, event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={4}>
        <Autocomplete
          options={[{inputValue:"balbla", name:"eins"}, {inputValue:"testes", name:"test"}]}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) => inputValue === option.title
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({inputValue:`Create "${inputValue}"`, name:inputValue});
            }
            return filtered;
          }}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.name;
          }}
          onClose={(event, reason)=> {
            if (reason !== "selectOption") {
              return;
            }
            let tmp =  event.target.innerText.split('"')
            let name;
            if (tmp.length ==3 ) {
              name = event.target.innerText.split('"')[2]
            } else if (tmp.length == 1){
              name = event.target.innerText
            } else {
              alert("edit me")
            }
            console.log(name)
            props.handleIngredientUpdate(props.keyProp, "name", name);
            
          }}
          
          renderInput={(params) => <TextField {...params} onChange={(event) => handleChange("amount", event)} label="Ingredient" />}
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
          <Select
            defaultValue="pcs"
            onChange={(event) => handleChange("unit", event)}
          >
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
