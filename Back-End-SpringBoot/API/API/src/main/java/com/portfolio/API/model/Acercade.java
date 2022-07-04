
package com.portfolio.API.model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter @Getter
@Entity
public class Acercade {
  
     @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Basic
    private String texto;
    
    public Acercade() {
    }

    public Acercade(Long id, String texto) {
        this.id = id;
        this.texto = texto;
    }
    
    
    
    
}
