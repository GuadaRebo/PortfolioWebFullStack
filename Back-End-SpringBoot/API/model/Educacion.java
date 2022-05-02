
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
public class Educacion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Basic
    private String titulo;
    private String expedido_por;
    private String periodo;
    private String logo_institucion;

    public Educacion() {
    }

    public Educacion(Long id, String titulo, String expedido_por, String periodo, String logo_institucion) {
        this.id = id;
        this.titulo = titulo;
        this.expedido_por = expedido_por;
        this.periodo = periodo;
        this.logo_institucion = logo_institucion;
    }
    
    
    
    
}
