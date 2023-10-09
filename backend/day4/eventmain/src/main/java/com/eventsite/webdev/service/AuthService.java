package com.eventsite.webdev.service;

import com.eventsite.webdev.dto.request.AuthenticationRequest;
import com.eventsite.webdev.dto.request.RegisterRequest;
import com.eventsite.webdev.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);

}
