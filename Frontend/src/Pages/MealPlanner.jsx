import React, { useEffect, useState } from "react";
import RecipeService from "../services/RecipeService";
import Card from "@mui/material/Card";
import { TableRow, CardContent, Grid ,CardHeader, TableBody, TableContainer, TableHead, TableCell, Button } from "@mui/material";
function MealPlanner() {
  const [recipeList, setRecipeList] = useState([])

  useEffect(() => {
    RecipeService.getRecipes()
    .then((res) => {
      setRecipeList(res.data)
    })
    .catch((err) => alert(err))
  }, [recipeList.length])

  return <div>
    <h1>Week Plan</h1>
<TableContainer>
  <TableHead>
    <TableRow>

    {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(day => {
      return (<TableCell>
      {day}
    </TableCell>)})}

      </TableRow>
      {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(day => {
      return (<TableCell>
      <Button> Add Meal </Button>
    </TableCell>)})}
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>
        tes
      </TableCell>
    </TableRow>
  </TableBody>
</TableContainer>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

    <Grid container>
    {recipeList.map((recipe) =>
    <Grid item>  
    <Card key={recipe.id} variant="outlined" sx={{ maxWidth: 345 }}>
      <CardHeader title={recipe.name}/>
      <CardContent>
        {recipe.ingredients.map(ingredient => {return <p>{ingredient.amount+ " "  +ingredient.unit+  " "}{ingredient.name}</p>})}
      </CardContent>
    </Card>
    </Grid>
    )} 
    </Grid>
  </div>;
}

export default MealPlanner;
