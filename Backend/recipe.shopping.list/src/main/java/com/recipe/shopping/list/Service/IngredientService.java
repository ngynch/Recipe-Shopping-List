package com.recipe.shopping.list.Service;

import com.recipe.shopping.list.Entity.Ingredient;
import com.recipe.shopping.list.Repository.IngredientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class IngredientService {

    private IngredientRepo ingredientRepo;

    @Autowired
    public IngredientService(IngredientRepo ingredientRepo) {
        this.ingredientRepo = ingredientRepo;
    }

    public List<Ingredient> getIngredients() {
        return ingredientRepo.findAll();
    }

    public Ingredient findIngredientById(Long id) {
        return ingredientRepo.findById(id).orElseThrow();
    }

    public Ingredient addIngredient(Ingredient ingredient){
        return ingredientRepo.save(ingredient);
    }
}
