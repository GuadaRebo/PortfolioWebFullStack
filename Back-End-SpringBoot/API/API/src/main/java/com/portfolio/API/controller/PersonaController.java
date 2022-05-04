
package com.portfolio.API.controller;

import com.portfolio.API.model.Persona;
import com.portfolio.API.service.IPersonaService;
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
public class PersonaController {
    
    @Autowired
    private IPersonaService persoServ;
    
    
    @GetMapping ("/persona/ver")
    @ResponseBody
    public List<Persona> verPersonas () {
        return persoServ.verPersonas();
    }
    
     @PostMapping ("/persona/nueva")
    public void agregarPersona (@RequestBody Persona persona) {
       persoServ.crearPersona(persona);
    }
    
    @DeleteMapping ("delete/{id}")
    public void borrarPersona (@PathVariable Long id) {
        persoServ.borrarPersona(id);
        
    }
    @GetMapping ("/persona/{id}")
    @ResponseBody
    public Persona buscarPersonaPorId(@PathVariable Long id){
        return persoServ.buscarPersona( id);
    }
    
    @PutMapping ("/persona")
    public void actualizarPersona (@RequestBody Persona persona)   {
        persoServ.actualizarPersona(persona);         
    }        
        

}
