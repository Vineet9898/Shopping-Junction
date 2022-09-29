package com.cts.productmanagement.dao;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cts.productmanagement.model.AppProduct;



//public interface ProductDao extends CrudRepository<AppProduct, Integer> {
//@Query("SELECT * FROM app_product WHERE cid = 1 ")
//Collection<AppProduct> findAllProducts();

//
//}

public interface ProductDao extends JpaRepository<AppProduct, Integer> {
    @Query("Select u from AppProduct u where u.categoryid=?1")
	List<AppProduct> FindAllProductsByCategoryId(int categoryid);

}