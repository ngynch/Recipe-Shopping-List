package com.recipe.shopping.list.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Recipe {
    @Id
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
