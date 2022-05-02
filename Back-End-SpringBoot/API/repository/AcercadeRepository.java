
package com.portfolio.API.repository;

import com.portfolio.API.model.Acercade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcercadeRepository extends JpaRepository <Acercade, Long> {
    
}
