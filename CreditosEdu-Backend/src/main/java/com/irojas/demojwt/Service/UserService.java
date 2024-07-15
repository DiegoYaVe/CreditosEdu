package com.irojas.demojwt.Service;
import com.irojas.demojwt.Repository.UserRepository;
import com.irojas.demojwt.User.UserG;
import com.irojas.demojwt.User.UserDTO;
import com.irojas.demojwt.User.UserRequest;
import com.irojas.demojwt.User.UserResponse;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public UserResponse updateUser(UserRequest userRequest) {

        UserG user = UserG.builder()
        .id(userRequest.getId())
        .username(userRequest.getUsername())
        .build();

        userRepository.updateUser(user.id, user.username);

        return new UserResponse("El usuario se registró satisfactoriamente");
    }

    public UserDTO getUser(Integer id) {
        UserG user= userRepository.findById(id).orElse(null);

        if (user!=null)
        {
            UserDTO userDTO = UserDTO.builder()
            .id(user.id)
            .username(user.username)
            .build();
            return userDTO;
        }
        return null;
    }
}
