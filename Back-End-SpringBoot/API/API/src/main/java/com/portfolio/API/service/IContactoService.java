
package com.portfolio.API.service;

import com.portfolio.API.model.Contacto;
import java.util.List;





public interface IContactoService {
    public List<Contacto> verContacto();
    
    public void crearContacto (Contacto contacto);
    
    public void borrarContacto (Long id);
      
    public void actualizarContacto (Contacto contacto);
}
