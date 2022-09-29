//package com.cts.productmanagement.com.cts.productmanagement.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestHeader;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.cts.productmanagement.dto.ValidatingDTO;
//import com.cts.productmanagement.model.AppProduct;
//import com.cts.productmanagement.model.Category;
//import com.cts.productmanagement.service.CategoryService;
//
//@RestController
//@CrossOrigin
//public class CategoryController {
//
//	
//	
//	@Autowired
//	private CategoryService categoryService;
//	
//	 @GetMapping("/catservices")
//		public String welcome() {
//	    	return "Product Deployed to Cloud";
//		}  
//	 
//	 
//	 /*
//		 * Add Category
//		 */
//		
//	    @PostMapping("/category")
//		public Category addCategory(@RequestBody Category category) {    	
//	    	
//	    	return categoryService.addCategory(category);
//		}
//	    
//	    
//	    /*
//	     * Update Category
//	     */
//	    
//	    @PutMapping("/category")
//	   	public Category updateProduct(@RequestBody Category category) {
//	   		
//	   		return  categoryService.updateCategory(category);
//	   	}
//	 
//	    
//	    /*
//	     * Get Product By Id 
//	     */
//	    
//	    @GetMapping("/category/{categoryId}")
//		public Category getProductById( @PathVariable("categoryId") int categoryId) {
//	    	
//			return categoryService.getCategoryById(categoryId);
//		}
//	    
//	    /*
//	     * Get All Category
//	     */
//	    @GetMapping("/category")
//		public List<Category> getProducts(){
//			
//			return categoryService.getAllCategory();		
//		}	
//	    
//	    
//
//	    /*
//	     * Delete Category By Id
//	     */
//	    
//	    @DeleteMapping("/category/{categoryId}")
//		public void deleteProduct( @PathVariable int categoryId) {
//	    	
//			categoryService.deleteCategory(categoryId);
//		}
//		
//	   
//	 
//}
