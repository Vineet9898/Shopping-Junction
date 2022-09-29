package com.cts.productmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.productmanagement.model.Category;



public interface CategoryDao extends JpaRepository<Category, Integer>  {

}
