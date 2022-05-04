
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
public class ExpLaboral {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Basic
    private String posicion;
    private String fecha;
    private String descripcion;
    private String foto;

    public ExpLaboral() {
    }

    public ExpLaboral(Long id, String posicion, String fecha, String descripcion, String foto) {
        this.id = id;
        this.posicion = posicion;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.foto = foto;
    }
   
    
}
