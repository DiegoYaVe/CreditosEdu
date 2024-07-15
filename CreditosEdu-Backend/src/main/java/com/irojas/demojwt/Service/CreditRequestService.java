package com.irojas.demojwt.Service;

import com.irojas.demojwt.Utils.ResourceNotFoundException;
import com.irojas.demojwt.Model.CreditRequest;
import com.irojas.demojwt.Repository.CreditRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@Service
public class CreditRequestService {

    @Autowired
    private CreditRequestRepository objetoRepository;

    public List<CreditRequest> getAllObjetos() {
        return objetoRepository.findAll();
    }

    public CreditRequest getObjetoById(Long id) {
        return objetoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Objeto not found with id " + id));
    }

    public CreditRequest saveObjeto(CreditRequest objeto) {
        return objetoRepository.save(objeto);
    }

    public CreditRequest updateObjeto(Long id, CreditRequest objetoDetails) {
        CreditRequest objeto = getObjetoById(id);
        objeto.setUserId(objetoDetails.getUserId());
        objeto.setPurpose(objetoDetails.getPurpose());
        objeto.setAmount(objetoDetails.getAmount());
        objeto.setStatus(objetoDetails.getStatus());
        return saveObjeto(objeto);
    }

    public void deleteObjeto(Long id) {
        CreditRequest objeto = getObjetoById(id);
        objetoRepository.delete(objeto);
    }

    public List<CreditRequest> findByFilters(String userId, String purpose, Double amount, Integer status) {
        return objetoRepository.findByFilters(userId, purpose, amount, status);
    }
}