package com.irojas.demojwt.Repository;

import java.util.List;


import com.irojas.demojwt.Model.CreditRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

//import com.back.backend_springboot.model.CreditRequest;

@CrossOrigin(origins = {"http://localhost:4200"})
@Repository
public interface CreditRequestRepository extends JpaRepository <CreditRequest, Long> {
    @Query(value = "SELECT * FROM credit_request o WHERE " +
            "(:userId IS NULL OR o.userId LIKE %:userId%) AND " +
            "(:porpuse IS NULL OR o.purpose LIKE %:purpose%) AND " +
            "(:amount IS NULL OR o.amount = :amount) AND " +
            "(:status IS NULL OR o.status = :status)", nativeQuery = true)
    List<CreditRequest> findByFilters(@Param("userId") String userId,
                                      @Param("purpose") String purpose,
                                      @Param("amount") Double amount,
                                      @Param("status") Integer status);
}