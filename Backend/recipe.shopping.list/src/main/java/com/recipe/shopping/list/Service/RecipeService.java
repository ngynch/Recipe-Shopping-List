package com.recipe.shopping.list.Service;

import com.recipe.shopping.list.Entity.Ingredient;
import com.recipe.shopping.list.Entity.Recipe;
import com.recipe.shopping.list.Entity.RecipeIngredient;
import com.recipe.shopping.list.Repository.RecipeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    private RecipeRepo recipeRepo;

    @Autowired
    public RecipeService(RecipeRepo recipeRepo) {
        this.recipeRepo = recipeRepo;
    }

    public List<Recipe> getAllRecipes(){
        return recipeRepo.findAll();
    }

    public Recipe findRecipeById(Long id) {
        return recipeRepo.findById(id).orElseThrow();
    }

    public Recipe addRecipe(Recipe recipe) {
        return recipeRepo.save(recipe);
    }
}
