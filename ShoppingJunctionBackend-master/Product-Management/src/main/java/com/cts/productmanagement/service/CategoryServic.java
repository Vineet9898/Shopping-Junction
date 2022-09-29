package com.cts.productmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.productmanagement.dao.CategoryRepo;
import com.cts.productmanagement.model.AppProduct;
import com.cts.productmanagement.model.Category;

@Service
public class CategoryServic {

	@Autowired
	private CategoryRepo categoryRepo;

	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		return categoryRepo.save(category);
	}

	public Category updateCategory(Category category) {
		// TODO Auto-generated method stub
		Integer categoryId=category.getCategoryId();
		Category cat =  categoryRepo.findById(categoryId).orElse(category);
		cat.setCategoryTitle(category.getCategoryTitle());
		cat.setCategoryDesc(category.getCategoryDesc());
		return categoryRepo.save(cat);
	}

	public Category getCategoryById(int categoryId) {
		// TODO Auto-generated method stub
		return categoryRepo.findById(categoryId).orElse(null);
	}

	public List<Category> getCategories() {
		// TODO Auto-generated method stub
		return  categoryRepo.findAll();		
	}

	

	public void deleteCategory(int categoryId) {
		// TODO Auto-generated method stub
		categoryRepo.deleteById(categoryId);  
	}

	
	
	
	
	
	
}
