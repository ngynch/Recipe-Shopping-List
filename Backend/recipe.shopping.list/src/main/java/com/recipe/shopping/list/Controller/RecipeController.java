package com.recipe.shopping.list.Controller;

import com.recipe.shopping.list.Entity.Recipe;
import com.recipe.shopping.list.Service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
public class RecipeController {

    RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/recipe")
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipes();
    }

    @GetMapping("/recipe/{id}")
    public Recipe getRecipeById(@PathVariable Long id) {
        Optional<Recipe> recipe = recipeService.findRecipeById(id);
        if (recipe.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not find recipe with id: " + id);
        }
        return recipe.get();
    }

    @PostMapping("/recipe/add")
    public Recipe addRecipe(@RequestBody Recipe recipe) {
        return recipeService.addRecipe(recipe);
    }
}
