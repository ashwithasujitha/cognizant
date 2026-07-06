package com.cognizant.spring_learn.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.spring_learn.jwt.jwtUtil;
import com.cognizant.spring_learn.model.AuthenticationRequest;
import com.cognizant.spring_learn.model.AuthenticationResponse;

@RestController
public class AuthenticationController {
     @PostMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestBody AuthenticationRequest request) {

        if ("user".equals(request.getUsername())
                && "pwd".equals(request.getPassword())) {

            String token =
                    jwtUtil.generateToken(request.getUsername());

            return new AuthenticationResponse(token);
        }

        throw new RuntimeException("Invalid Username or Password");
    }
}
