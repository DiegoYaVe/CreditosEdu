package com.irojas.demojwt.Service;

import com.irojas.demojwt.Auth.AuthResponse;
//import com.irojas.demojwt.Model.LoginRequest;
import com.irojas.demojwt.Model.User;
import com.irojas.demojwt.Jwt.JwtService;
import com.irojas.demojwt.User.UserG;
import com.irojas.demojwt.Repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(User request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails user=userRepository.findByUsername(request.getUsername()).orElseThrow();
        String token=jwtService.getToken(user);
        return AuthResponse.builder()
            .token(token)
            .build();

    }

    public AuthResponse register(User request) {
        UserG user = UserG.builder()
            .username(request.getUsername())
            .password(passwordEncoder.encode( request.getPassword()))
            //.firstname(request.getFirstname())
            //.lastname(request.lastname)
            //.country(request.getCountry())
            //.role(Role.USER)
            .build();

        userRepository.save(user);

        return AuthResponse.builder()
            .token(jwtService.getToken(user))
            .build();

    }

}
