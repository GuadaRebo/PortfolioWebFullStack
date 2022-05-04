
package com.portfolio.API.service;

import com.portfolio.API.model.ExpLaboral;
import com.portfolio.API.repository.ExpLaboralRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class ExpLaboralService implements IExpLaboralService {
    @Autowired
    public ExpLaboralRepository explabRepo;
    

    @Override
    public List<ExpLaboral> verExpLaboral() {
        return explabRepo.findAll();
    }

    @Override
    public void crearExpLaboral(ExpLaboral explaboral) {
        explabRepo.save(explaboral);
    }

    @Override
    public void borrarExpLaboral(Long id) {
        explabRepo.deleteById(id);
    }

    @Override
    public ExpLaboral buscarExpLaboral(Long id) {
        return explabRepo.findById(id).orElse(null);
    }

    @Override
    public void actualizarExpLaboral(ExpLaboral explaboral) {
        explabRepo.save(explaboral);
    }
    
}
