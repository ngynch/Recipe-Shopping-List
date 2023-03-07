package com.recipe.shopping.list.Service;

import com.recipe.shopping.list.Entity.Recipe;
import com.recipe.shopping.list.Repository.RecipeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Optional<Recipe> findRecipeById(Long id) {
        return recipeRepo.findById(id);
    }

    public Recipe addRecipe(Recipe recipe) {
        return recipeRepo.save(recipe);
    }
}
