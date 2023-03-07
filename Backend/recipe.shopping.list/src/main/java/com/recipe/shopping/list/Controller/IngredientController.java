package com.recipe.shopping.list.Controller;

import com.recipe.shopping.list.Entity.Ingredient;
import com.recipe.shopping.list.Entity.Recipe;
import com.recipe.shopping.list.Repository.IngredientRepo;
import com.recipe.shopping.list.Service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
public class IngredientController {

    IngredientService ingredientService;

    @Autowired
    public IngredientController(IngredientService ingredientService) {
        this.ingredientService = ingredientService;
    }

    @GetMapping("/ingredient")
    public List<Ingredient> getIngredients() {
        return ingredientService.getIngredients();
    }

    @GetMapping("/ingredient/{id}")
    public Ingredient getIngredientById(@PathVariable Long id) {
        Optional<Ingredient> ingredient = ingredientService.findIngredientById(id);
        if (ingredient.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Could not find ingredient with id: " + id);
        }
        return ingredient.get();
    }

    @PostMapping("ingredient/add")
    public Ingredient addIngredient(@RequestBody Ingredient ingredient) {
        return ingredientService.addIngredient(ingredient);
    }
}
