
package com.portfolio.API.controller;


import com.portfolio.API.model.Contacto;
import com.portfolio.API.service.IContactoService;
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
public class ContactoController {
     @Autowired
    private IContactoService conServ;
     
     @GetMapping ("/contacto/ver")
    @ResponseBody
    public List<Contacto> verContacto () {
        return conServ.verContacto();
    }
    
    @PostMapping ("/contacto/nuevo")
    public void agregarContacto (@RequestBody Contacto contacto) {
       conServ.crearContacto(contacto);
    }
    
     @DeleteMapping ("/contacto/delete/{id}")
    public void borrarContacto (@PathVariable Long id) {
        conServ.borrarContacto(id);       
    }
    
    @PutMapping ("/contacto")
    public void actualizarContacto (@RequestBody Contacto contacto)   {
        conServ.actualizarContacto(contacto);
    }
     
     
}
