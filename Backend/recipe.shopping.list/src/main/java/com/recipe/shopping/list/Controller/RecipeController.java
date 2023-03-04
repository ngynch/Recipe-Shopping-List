package com.recipe.shopping.list.Controller;

import com.recipe.shopping.list.Entity.Recipe;
import com.recipe.shopping.list.Service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecipeController {

    RecipeService recipeService;
    @GetMapping("/recipe")
    public Recipe getAllRecipes() {
        return null;
    }
}
