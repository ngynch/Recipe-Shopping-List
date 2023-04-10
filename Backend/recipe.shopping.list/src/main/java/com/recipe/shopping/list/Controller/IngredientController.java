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
@CrossOrigin(origins = "http://localhost:3000")
public class IngredientController {

    IngredientService ingredientService;

    @Autowired
    public IngredientController(IngredientService ingredientService) {
        this.ingredientService = ingredientService;
    }

    @GetMapping("/ingredients")
    public List<Ingredient> getIngredients() {
        return ingredientService.getIngredients();
    }

    @GetMapping("/ingredients/{id}")
    public Ingredient getIngredientById(@PathVariable Long id) {
        return ingredientService.findIngredientById(id);
    }

    @PostMapping("/ingredients")
    public Ingredient addIngredient(@RequestBody Ingredient ingredient) {
        return ingredientService.addIngredient(ingredient);
    }
}
