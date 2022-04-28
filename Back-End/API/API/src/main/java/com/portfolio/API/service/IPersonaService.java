
package com.portfolio.API.service;

import com.portfolio.API.model.Persona;
import java.util.List;


public interface IPersonaService {
    public List<Persona> verPersonas();
    
    public void crearPersona (Persona persona);
    
    public void borrarPersona (Long id);
    
    public Persona buscarPersona (Long id);
    
    public void actualizarPersona (Persona persona);
}
