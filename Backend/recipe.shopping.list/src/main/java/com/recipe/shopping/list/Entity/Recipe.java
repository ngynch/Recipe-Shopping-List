package com.recipe.shopping.list.Entity;

import jakarta.persistence.*;

import java.util.HashMap;
import java.util.List;
import java.util.Set;

@Entity
@Table
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @JoinColumn
    @ManyToMany
    private List<RecipeIngredient> recipeIngredients;

    public List<RecipeIngredient> getRecipeIngredients() {
        return recipeIngredients;
    }

    public void setRecipeIngredients(List<RecipeIngredient> recipeIngredients) {
        this.recipeIngredients = recipeIngredients;
    }
}
