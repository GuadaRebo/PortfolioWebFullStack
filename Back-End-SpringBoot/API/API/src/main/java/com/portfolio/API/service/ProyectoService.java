
package com.portfolio.API.service;

import com.portfolio.API.model.Proyecto;
import com.portfolio.API.repository.ProyectoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProyectoService implements IProyectoService {
    @Autowired
    public ProyectoRepository proyRepo;
    
    @Override
    public List<Proyecto> verProyecto() {
        return proyRepo.findAll();
    }

    @Override
    public void crearProyecto(Proyecto proyecto) {
        proyRepo.save(proyecto);
    }

    @Override
    public void borrarProyecto(Long id) {
        proyRepo.deleteById(id);
    }

    @Override
    public void actualizarProyecto(Proyecto proyecto) {
        proyRepo.save(proyecto);
    }
    
}
