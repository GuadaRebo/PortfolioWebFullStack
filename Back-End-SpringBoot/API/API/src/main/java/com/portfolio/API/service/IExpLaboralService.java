
package com.portfolio.API.service;

import com.portfolio.API.model.ExpLaboral;
import java.util.List;


public interface IExpLaboralService {
    
     public List<ExpLaboral> verExpLaboral();
    
    public void crearExpLaboral (ExpLaboral explaboral);
    
    public void borrarExpLaboral (Long id);
    
    public ExpLaboral buscarExpLaboral (Long id);
    
    public void actualizarExpLaboral (ExpLaboral explaboral);
    
}
