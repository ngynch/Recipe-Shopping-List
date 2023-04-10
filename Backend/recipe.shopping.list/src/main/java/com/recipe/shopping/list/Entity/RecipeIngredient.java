package com.recipe.shopping.list.Entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;

@Entity
@Table(name = "recipe_ingredients")
public class RecipeIngredient {
    public enum Unit { gr, l, pcs, kg, ml,;}
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JoinColumn
    @ManyToOne
    private Ingredient ingredient;

    @Column(name = "amount")
    @Nullable
    private Double amount;

    @Column(name = "unit")
    private String unit;

}
