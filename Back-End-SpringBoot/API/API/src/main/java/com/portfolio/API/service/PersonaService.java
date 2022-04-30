
package com.portfolio.API.service;

import com.portfolio.API.model.Persona;
import com.portfolio.API.repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService implements IPersonaService{
    @Autowired
    public PersonaRepository persoRepo;
    
    @Override
    public List<Persona> verPersonas() {        
       return persoRepo.findAll();
    }

    @Override
    public void crearPersona (Persona persona) {
        persoRepo.save(persona);
    }

    @Override
    public void borrarPersona(Long id) {
         persoRepo.deleteById(id);
    }

    @Override
    public Persona buscarPersona(Long id) {
        return persoRepo.findById(id).orElse(null);
    }

    @Override
    public void actualizarPersona(Persona persona) {
         persoRepo.save(persona);
    }
    
}
