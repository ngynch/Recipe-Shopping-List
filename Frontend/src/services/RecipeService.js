import axios from 'axios';

const RecipeService = {
    createRecipe: function (recipeName, ingredientList) {
        return axios.post(process.env.REACT_APP_BACKEND + "/recipes", {
            name: recipeName,
            ingredients: ingredientList,
          });
    },
    getRecipes: () => {
        return axios.get(process.env.REACT_APP_BACKEND + "/recipes")
    }
}

export default RecipeService;