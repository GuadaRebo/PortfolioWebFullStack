
package com.portfolio.API.controller;

import com.portfolio.API.model.Acercade;
import com.portfolio.API.service.IAcercadeService;
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
public class AcercadeController {
    
    @Autowired
    private IAcercadeService acercaServ;
    
    @GetMapping ("/acercade/ver")
    @ResponseBody
    public List<Acercade> verAcercade () {
        return acercaServ.verAcercade();
    }
    
    
    @PostMapping ("/acercade/nuevo")
    public void agregarAcercade (@RequestBody Acercade acercade) {
       acercaServ.crearAcercade(acercade);
    }
    @DeleteMapping ("/acercade/delete/{id}")
    public void borrarAcercade (@PathVariable Long id) {
        acercaServ.borrarAcercade(id);
        
    }
    @PutMapping ("/acercade")
    public void actualizarPersona (@RequestBody Acercade acercade)   {
        acercaServ.actualizarAcercade(acercade);         
             
}
    
    
}
