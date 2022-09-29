//package com.cts.productmanagement.com.cts.productmanagement.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestHeader;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
////import org.springframework.web.multipart.MultipartFile;
//
//
//import com.cts.productmanagement.dto.ValidatingDTO;
//import com.cts.productmanagement.feign.AuthClient;
////import com.cts.productmanagement.helper.FileUploadHelper;
//import com.cts.productmanagement.model.AppProduct;
//import com.cts.productmanagement.model.JwtResponse;
//import com.cts.productmanagement.service.ProductService;
//
//
//@RestController
//@CrossOrigin
//public class ProductController {
//
//	@Autowired
//	private ProductService productService;
//	
//	@Autowired
//	private AuthClient authClient;
//	
////	@Autowired
////	private FileUploadHelper fileUploadHelper;
//	
//	 @GetMapping("/awsProduct")
//		public String welcome() {
//	    	return "Product Deployed to Cloud";
//		}  
//	 
////	 @PostMapping("/upload")
////	 public String uploadfile(@RequestParam("file") MultipartFile file)
////	 {
////		 System.out.println(file.getOriginalFilename());
////		 System.out.println(file.getName());
////		 
////		 
////		 //file upload code
//////		 F:\shopping junction\Backend\Backend\Product-Management\src\main\resources\Static\images
////		boolean f= fileUploadHelper.uploadFile(file);
////		 
////		 if(f)
////		 {
////			 return "ok";
////		 }
////		return "working";
////		 
////	 }
//	
//	/*
//	 * Add Product
//	 */
//	
//    @PostMapping("/product")
//	public AppProduct addProduct(@RequestHeader(name="Authorization",required = true)String token, @RequestBody AppProduct appProduct) {    	
//    	ValidatingDTO validatingDTO = authClient.checkToken(token);
//    	return productService.addProduct(appProduct);
//	}
//    
//    /*
//     * Update Product
//     */
//    
//    @PutMapping("/product")
//   	public AppProduct updateProduct(@RequestHeader(name="Authorization",required = true)String token,@RequestBody AppProduct appProduct) {
//   		ValidatingDTO validatingDTO = authClient.checkToken(token);
//   		return  productService.updateProduct(appProduct);
//   	}
//    
//    /*
//     * Get Product By Id 
//     */
//    
//    @GetMapping("/product/{id}")
//	public AppProduct getProductById(@RequestHeader(name="Authorization",required = true)String token, @PathVariable("id") int id) {
//    	ValidatingDTO validatingDTO = authClient.checkToken(token);
//		return productService.getProductById(id);
//	}
//    
//    
//    
// 
//    /*
//     * Delete Product By Id
//     */
//    
//    @DeleteMapping("/product/{id}")
//	public void deleteProduct(@RequestHeader(name="Authorization",required = true)String token, @PathVariable int id) {
//    	ValidatingDTO validatingDTO = authClient.checkToken(token);
//		productService.deleteProduct(id);
//	}
//	
//    /*
//     * Get All Products
//     */
//    
//	@GetMapping("/product")
//	public List<AppProduct> getProducts(@RequestHeader(name="Authorization",required = true)String token){
//		ValidatingDTO validatingDTO = authClient.checkToken(token);
//		return productService.getProduct();		
//	}	
//	
//	
//	/*
//     * Get Product By Category 
//     */
//    @GetMapping("/pro/cat/") 
//	public List<AppProduct> FindAllProductsByCategoryId(@RequestParam("categoryid") String categoryid) {
////    	ValidatingDTO validatingDTO = authClient.checkToken(token);
//    	return productService.FindAllProductsByCategoryId(Integer.parseInt(categoryid));
//	}
//	
//	/*
//	 * 1.POST:(/product) Add Products --> Completed
//	 * 2.PUT:(/product) Update Products --> Completed
//	 * 3.GET: (/product/{id}) Get Product By ID --> Completed
//	 * 4.DELETE: (/product/{id}) Delete Product By ID --> Completed
//	 * 5. GET: (/product) Get All Products --> Completed
//	 * 6. GET:(/pro/cat/) FindAllProductsByCid
//	 * JWT Authorization Done
//	 */
//	
//}
