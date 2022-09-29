package com.cts.productmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cts.productmanagement.dto.ValidatingDTO;
import com.cts.productmanagement.feign.AuthClient;
import com.cts.productmanagement.model.AppProduct;
import com.cts.productmanagement.model.JwtResponse;
import com.cts.productmanagement.service.ProductService;


@RestController
@CrossOrigin
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@Autowired
	private AuthClient authClient;
	
	
	
    @PostMapping("/product")
	public AppProduct addProduct(@RequestHeader(name="Authorization",required = true)String token, @RequestBody AppProduct appProduct) {    	
    	ValidatingDTO validatingDTO = authClient.checkToken(token);
    	return productService.addProduct(appProduct);
	}
    
    
    @PutMapping("/product")
   	public AppProduct updateProduct(@RequestHeader(name="Authorization",required = true)String token,@RequestBody AppProduct appProduct) {
   		ValidatingDTO validatingDTO = authClient.checkToken(token);
   		return  productService.updateProduct(appProduct);
   	}
    
    @GetMapping("/product/{id}")
	public AppProduct getProductById(@RequestHeader(name="Authorization",required = true)String token, @PathVariable("id") int id) {
    	ValidatingDTO validatingDTO = authClient.checkToken(token);
		return productService.getProductById(id);
	}
    
    @GetMapping("/awsProduct")
	public String welcome() {
    	return "Product Deployed to Cloud";
	}
    
    @DeleteMapping("/product/{id}")
	public void deleteProduct(@RequestHeader(name="Authorization",required = true)String token, @PathVariable int id) {
    	ValidatingDTO validatingDTO = authClient.checkToken(token);
		productService.deleteProduct(id);
	}
	
	@GetMapping("/product")
	public List<AppProduct> getProducts(@RequestHeader(name="Authorization",required = true)String token){
		ValidatingDTO validatingDTO = authClient.checkToken(token);
		return productService.getProduct();		
	}	
	@GetMapping("/pro/cat/")
	public List<AppProduct> FindAllProductsByCategoryId( @RequestParam("categoryid") String  categoryid) {
    	
		return productService.FindAllProductsByCategoryId(Integer.parseInt(categoryid));
	}
	
}
