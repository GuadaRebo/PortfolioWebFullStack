
package com.portfolio.API.service;

import com.portfolio.API.model.Educacion;
import com.portfolio.API.repository.EducacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EducacionService implements IEducacionService{
    @Autowired
    public EducacionRepository educaRepo;

    @Override
    public List<Educacion> verEducacion() {
        return educaRepo.findAll();
    }

    @Override
    public void crearEducacion(Educacion educacion) {
        educaRepo.save(educacion);
    }

    @Override
    public void borrarEducacion(Long id) {
        educaRepo.deleteById(id);
    }

    @Override
    public void actualizarEducacion(Educacion educacion) {
        educaRepo.save(educacion);
    }
    
}
