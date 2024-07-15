package com.irojas.demojwt.Repository;

import java.util.Optional;

import com.irojas.demojwt.User.UserG;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:4200"})
public interface UserRepository extends JpaRepository<UserG,Integer> {
    Optional<UserG> findByUsername(String username);
    
    @Modifying()
    //@Query("update User u set u.firstname=:firstname, u.lastname=:lastname, u.country=:country where u.id = :id")
    @Query("update UserG u set u.username=:username where u.id = :id")
    void updateUser(@Param(value = "id") Integer id,   @Param(value = "username") String username);

}
