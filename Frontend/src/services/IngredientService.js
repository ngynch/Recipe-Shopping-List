import axios from 'axios';

const IngredientService = {
    getAllIngredients: () => {
        return axios.get(process.env.REACT_APP_BACKEND + "/ingredients")
    }
}

export default IngredientService;