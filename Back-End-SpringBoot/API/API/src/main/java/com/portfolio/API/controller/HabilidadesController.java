
package com.portfolio.API.controller;

import com.portfolio.API.model.Habilidades;
import com.portfolio.API.service.IHabilidadesService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = {"http://localhost:4200/"})
public class HabilidadesController {
    @Autowired
    private IHabilidadesService habilServ;
    
    @GetMapping ("/habilidad/ver")
    @ResponseBody
    public List<Habilidades> verHabilidades () {
        return habilServ.verHabilidades();
    }
    
    @PostMapping ("/habilidad/nueva")
    public void agregarHabilidades (@RequestBody Habilidades habilidades) {
       habilServ.crearHabilidades(habilidades);
    }
    
     @DeleteMapping ("/habilidad/delete/{id}")
    public void borrarHabilidades (@PathVariable Long id) {
        habilServ.borrarHabilidades(id);       
    }
    
    @PutMapping ("/habilidad")
    public void actualizarHabilidades (@RequestBody Habilidades habilidades)   {
        habilServ.actualizarHabilidades(habilidades);
    }
    
    
    
}
