
package com.portfolio.API.repository;

import com.portfolio.API.model.Contacto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ContactoRepository extends JpaRepository <Contacto, Long>{
    
}
