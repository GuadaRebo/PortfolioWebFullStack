
package com.portfolio.API.service;

import com.portfolio.API.model.Educacion;
import java.util.List;


public interface IEducacionService {
    public List<Educacion> verEducacion();
    
    public void crearEducacion (Educacion educacion);
    
    public void borrarEducacion (Long id);
      
    public void actualizarEducacion (Educacion educacion);
    
}
