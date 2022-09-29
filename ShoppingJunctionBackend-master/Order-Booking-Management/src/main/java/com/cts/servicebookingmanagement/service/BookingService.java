package com.cts.servicebookingmanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.servicebookingmanagement.dao.BookingDao;
import com.cts.servicebookingmanagement.dao.BookingDaoReq;
import com.cts.servicebookingmanagement.model.AppServiceReq;
import com.cts.servicebookingmanagement.model.AppServiceReqReport;
//import com.cts.usermanagement.model.AppUser;


@Service
public class BookingService {

	@Autowired
	private BookingDao bookingDao;
	
	@Autowired
	private BookingDaoReq bookingDaoReq;
	
	public AppServiceReq createBooking(AppServiceReq appServiceReq) {
		return bookingDao.save(appServiceReq);
	}
	
	public AppServiceReq getBookingByIdAndStatus(Integer id, String status) {
		return bookingDao.findByIdAndStatus(id, status).orElse(null);
	}
	
	public List<AppServiceReq> getBooking(){
		return (List<AppServiceReq>) bookingDao.findAll();		 
	}
	
	
	public AppServiceReq updateBooking(AppServiceReq appServiceReq) {
		Integer id = appServiceReq.getId();
		Integer adminId = appServiceReq.getAdminId();
		AppServiceReq book = bookingDao.findById(id).orElse(appServiceReq);
		book.setReqDate(appServiceReq.getReqDate());
		book.setProduct(appServiceReq.getProduct());
		book.setCost(appServiceReq.getCost());
		book.setStatus(appServiceReq.getStatus());
		book.setPaymentmethod(appServiceReq.getPaymentmethod());
		book.setAddress(appServiceReq.getAddress());
		book = bookingDao.findById(adminId).orElse(appServiceReq);
		return bookingDao.save(book);
	}
	
	public void deleteBooking(Integer id) {
		bookingDao.deleteById(id);
	}
	
	public List<AppServiceReq> getMyBookings(Integer adminId, String status) {
		return bookingDao.findAllByAdminIdAndStatus(adminId, status).orElse(null);
	}



	
		

	
	public List<AppServiceReq> getServiceByUserAndStatus(Integer adminId, String status) {
		return  bookingDao.findAllByAdminIdAndStatus(adminId, status).orElse(null);
	}
	
	
	
	public AppServiceReq getBookingById(Integer id) {
		return bookingDao.findById(id).orElse(null);
	}
}

