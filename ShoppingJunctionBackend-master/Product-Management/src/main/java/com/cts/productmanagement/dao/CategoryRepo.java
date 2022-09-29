package com.cts.productmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.productmanagement.model.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer> {

}
