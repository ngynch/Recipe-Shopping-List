package com.recipe.shopping.list.Entity;

import jakarta.persistence.*;
import org.springframework.lang.NonNull;

@Entity
@Table(name = "ingredient")
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

}