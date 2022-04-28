
package com.portfolio.API.model;


import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Basic
    private String nombres;
    private String apellido;
    private String domicilio;
    private String imagen_cv;
    private String position;
    private String imagen_banner;

    public Persona() {
    }

    public Persona(Long id, String nombres, String apellido, String domicilio, String imagen_cv, String position, String imagen_banner) {
        this.id = id;
        this.nombres = nombres;
        this.apellido = apellido;
        this.domicilio = domicilio;
        this.imagen_cv = imagen_cv;
        this.position = position;
        this.imagen_banner = imagen_banner;
    }
    
    
    
}
