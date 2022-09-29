//package com.cts.productmanagement.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.cts.productmanagement.dao.CategoryDao;
//import com.cts.productmanagement.model.AppProduct;
//import com.cts.productmanagement.model.Category;
//@Service
//public class CategoryService {
//
//	@Autowired
//	private CategoryDao categoryDao;
//	
//	
//	public CategoryService(CategoryDao categoryDao) {
//		super();
//		this.categoryDao = categoryDao;
//	}
//	
//	public Category addCategory(Category category) {
//		return categoryDao.save(category);
//	}
//
//	public Category updateCategory(Category category) {
//		Integer categoryId = category.getCategoryId();
//		Category cat = categoryDao.findById(categoryId).orElse(category);
//		cat.setCategoryTitle(category.getCategoryTitle());
//		cat.setCategoryDesc(category.getCategoryDesc());
//		return categoryDao.save(cat);
//	}
//
//	public Category getCategoryById(int categoryId) {
//		// TODO Auto-generated method stub
//		return categoryDao.findById(categoryId).orElse(null);
//	}
//
//	
//
//	public List<Category> getAllCategory() {
//		// TODO Auto-generated method stub
//		return categoryDao.findAll();
//	}
//
//	public void deleteCategory(int categoryId) {
//		// TODO Auto-generated method stub
//		categoryDao.deleteById(categoryId);
//	}
//	
//
//	
//}
//
//
//
//
