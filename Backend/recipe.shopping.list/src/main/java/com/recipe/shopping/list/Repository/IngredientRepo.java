package com.recipe.shopping.list.Repository;

import com.recipe.shopping.list.Entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepo extends JpaRepository<Ingredient, Long> {
}
