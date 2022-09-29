package com.auth.controller;

import javax.security.auth.login.LoginException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.auth.dto.ValidatingDTO;
import com.auth.exception.UserNotFoundException;
import com.auth.modal.User;
import com.auth.repository.UserRepository;
import com.auth.service.CustomUserDetailService;
import com.auth.service.CustomUserDetails;
import com.auth.util.JwtRequest;
import com.auth.util.JwtResponse;
import com.auth.util.JwtUtil;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private CustomUserDetailService userDetailsService;

	@Autowired
	private JwtUtil jwtTokenUtil;
	
	
	
	@Autowired
	private CustomUserDetails customUserDetails;
	
	@Autowired
	private UserRepository userRepository;

	
	@Autowired
	private ValidatingDTO validatingDTO;

	@GetMapping("/hello1")
	public String hello() {
		return "hello auth service ";
	}

	@PostMapping("/token")
	public ResponseEntity<JwtResponse> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {

		authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
		UserDetails userdetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
		String jwttoken = jwtTokenUtil.generateToken(userdetails);
		log.info("Received request to generate token for " + jwtRequest.getUsername());
		return ResponseEntity.ok(new JwtResponse(jwttoken));

	}

	private void authenticate(String username, String password) throws UserNotFoundException {

		try {
			log.info("Authentication started....");
			this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			log.info("Authentication successfully..");
		} catch (DisabledException e) {
			log.error("Authentication is failed...");
			throw new UserNotFoundException("USER_DISABLED");
		} catch (BadCredentialsException e) {
			log.error("Authentication is failed...");
			throw new UserNotFoundException("INVALID_CREDENTIALS");
		}

	}

	@GetMapping("/validate")
	public ResponseEntity<ValidatingDTO> validate(@RequestHeader(name = "Authorization") String checktoken) {
		log.info("BEGIN - [validatingAuthorizationToken(JWT-token)]");
		String token = checktoken.substring(7);
		System.out.println("validate: "+token);
		try {
			UserDetails user = userDetailsService.loadUserByUsername(jwtTokenUtil.getUsernameFromToken(token));
			if (Boolean.TRUE.equals(jwtTokenUtil.validateToken(token, user))) {
				log.debug("Token matched is Valid");
				log.info("Token matched is Valid");
				log.info("END - validate()");
				validatingDTO.setValidStatus(true);
				validatingDTO.setId(getUserId(checktoken));
				return new ResponseEntity<>(validatingDTO, HttpStatus.OK);
			}
			else {
				log.info("Token invalid");
				return new ResponseEntity<>(validatingDTO, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			log.debug("Invalid token - Bad Credentials Exception");
			log.info("END Exception - validatingAuthorizationToken()");
			validatingDTO.setValidStatus(false);
			return new ResponseEntity<>(validatingDTO, HttpStatus.UNAUTHORIZED);
		}
	}
	
	@GetMapping("/userid")
	public int getUserId(@RequestHeader("Authorization") String authorization) {
		String token = authorization.substring(7);
		String uname = jwtTokenUtil.getUsernameFromToken(token);
		log.info("Getting userId by token...");
		System.out.println("user"+uname);
		return customUserDetails.getUserId(uname);

	}
	
	
	@PostMapping("/register")
	public ResponseEntity<CustomUserDetails> registerUser(@RequestBody User user) throws Exception {

	  //	authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
	//	UserDetails userdetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
	//	String jwttoken = jwtTokenUtil.generateToken(userdetails);
	//	log.info("Received request to generate token for " + jwtRequest.getUsername());
		System.out.println(user.getId() + user.getName());
		customUserDetails.registerProfile(user);
		return new ResponseEntity<CustomUserDetails>(customUserDetails, HttpStatus.OK);

	}
	
	
	@PutMapping("/update")
	public ResponseEntity<User> updateUser(@RequestBody User user) throws Exception {
		
		User user1 = customUserDetails.updateProfile(user);
		return new ResponseEntity<User>(user1, HttpStatus.OK);
		
	}
	
	
	

//	@PutMapping("/updateCourse")
//	public User update(@RequestBody User user) {
//		System.out.println("==>"+user.toString());
//		return userRepository.save(user);
//	}

}
