package com.irojas.demojwt.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:4200"})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    String username;
    String password;
}
