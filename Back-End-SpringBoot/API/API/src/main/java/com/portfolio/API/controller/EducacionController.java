
package com.portfolio.API.controller;

import com.portfolio.API.model.Educacion;
import com.portfolio.API.service.IEducacionService;
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
public class EducacionController {
    @Autowired
    private IEducacionService educaServ;
    
    @GetMapping ("/educacion/ver")
    @ResponseBody
    public List<Educacion> verEducacion () {
        return educaServ.verEducacion();
    }
    
    @PostMapping ("/educacion/nueva")
    public void agregarEducacion (@RequestBody Educacion educacion) {
       educaServ.crearEducacion(educacion);
    }
    
     @DeleteMapping ("/educacion/delete/{id}")
    public void borrarEducacion (@PathVariable Long id) {
        educaServ.borrarEducacion(id);       
    }
    
    @PutMapping ("/educacion")
    public void actualizarEducacion (@RequestBody Educacion educacion)   {
        educaServ.actualizarEducacion(educacion);
    }
}
