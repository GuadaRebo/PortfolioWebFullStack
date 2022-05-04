
package com.portfolio.API.controller;


import com.portfolio.API.model.Proyecto;
import com.portfolio.API.service.IProyectoService;
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
public class ProyectoController {
     @Autowired
    private IProyectoService proyServ;
     
     @GetMapping ("/proyecto/ver")
    @ResponseBody
    public List<Proyecto> verProyecto () {
        return proyServ.verProyecto();
    }
    
    @PostMapping ("/proyecto/nuevo")
    public void agregarProyecto (@RequestBody Proyecto proyecto) {
       proyServ.crearProyecto(proyecto);
    }
    
     @DeleteMapping ("/proyecto/delete/{id}")
    public void borrarProyecto (@PathVariable Long id) {
        proyServ.borrarProyecto(id);       
    }
    
    @PutMapping ("/proyecto")
    public void actualizarProyecto (@RequestBody Proyecto proyecto)   {
        proyServ.actualizarProyecto(proyecto);
    }
     
     
}
