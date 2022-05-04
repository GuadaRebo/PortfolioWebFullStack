
package com.portfolio.API.service;

import com.portfolio.API.model.Proyecto;
import java.util.List;




public interface IProyectoService {
    public List<Proyecto> verProyecto();
    
    public void crearProyecto (Proyecto proyecto);
    
    public void borrarProyecto (Long id);
      
    public void actualizarProyecto (Proyecto proyecto);
}
