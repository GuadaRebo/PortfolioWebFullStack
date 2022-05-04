
package com.portfolio.API.service;

import com.portfolio.API.model.Contacto;
import com.portfolio.API.repository.ContactoRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactoService implements IContactoService {
    @Autowired
    public ContactoRepository conRepo;
    
    @Override
    public List<Contacto> verContacto() {
        return conRepo.findAll();
    }

    @Override
    public void crearContacto(Contacto contacto) {
        conRepo.save(contacto);
    }

    @Override
    public void borrarContacto(Long id) {
        conRepo.deleteById(id);
    }

    @Override
    public void actualizarContacto(Contacto contacto) {
         conRepo.save(contacto);
    }

    
}
