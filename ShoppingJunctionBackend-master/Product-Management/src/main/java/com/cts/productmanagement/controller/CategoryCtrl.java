package com.cts.productmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cts.productmanagement.model.Category;
import com.cts.productmanagement.service.CategoryServic;

@RestController
@CrossOrigin
public class CategoryCtrl {

	@Autowired
	private CategoryServic categoryServic;
	
	@GetMapping("check1")
	public String check() {
		return "working";
	}
	
	@PostMapping("/category")
	public Category addCategory(@RequestBody Category category) {    	
    	
    	return categoryServic.addCategory(category);
	}
	
	 @PutMapping("/category")
	public Category updateCategory(@RequestBody Category category) {  
		
		return categoryServic.updateCategory(category);
	}
	 
	 
	    @GetMapping("/category/{categoryId}")
		public Category getCategoryById(@PathVariable("categoryId") int categoryId) {
	    	
			return categoryServic.getCategoryById(categoryId);
		}
	    
		@GetMapping("/category")
		public List<Category> getCategories(){
			
			return categoryServic.getCategories();		
		}
		
		 @DeleteMapping("/category/{categoryId}")
			public void deleteCategory( @PathVariable int categoryId) {
		    	
			 categoryServic.deleteCategory(categoryId);
			}
	
}
