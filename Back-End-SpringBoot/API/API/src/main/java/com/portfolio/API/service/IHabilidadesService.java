
package com.portfolio.API.service;

import com.portfolio.API.model.Habilidades;
import java.util.List;


public interface IHabilidadesService {
    public List<Habilidades> verHabilidades();
    
    public void crearHabilidades (Habilidades habilidades);
    
    public void borrarHabilidades (Long id);
      
    public void actualizarHabilidades (Habilidades habilidades);
    
}
