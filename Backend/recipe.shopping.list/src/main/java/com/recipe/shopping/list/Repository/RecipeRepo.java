package com.recipe.shopping.list.Repository;

import com.recipe.shopping.list.Entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepo extends JpaRepository<Recipe, Long> {
}
