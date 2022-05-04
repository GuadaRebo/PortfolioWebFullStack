
package com.portfolio.API.service;

import com.portfolio.API.model.Habilidades;
import com.portfolio.API.repository.HabilidadesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




@Service
public class HabilidadesService implements IHabilidadesService{
    @Autowired
    public HabilidadesRepository habilRepo;
    
    @Override
    public List<Habilidades> verHabilidades() {
        return habilRepo.findAll();
    }

    @Override
    public void crearHabilidades(Habilidades habilidades) {
        habilRepo.save(habilidades);
    }

    @Override
    public void borrarHabilidades(Long id) {
        habilRepo.deleteById(id);
    }

    @Override
    public void actualizarHabilidades(Habilidades habilidades) {
        habilRepo.save(habilidades);
    }
    
}
