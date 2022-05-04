
package com.portfolio.API.repository;

import com.portfolio.API.model.Habilidades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface HabilidadesRepository extends JpaRepository <Habilidades, Long>{
    
}
