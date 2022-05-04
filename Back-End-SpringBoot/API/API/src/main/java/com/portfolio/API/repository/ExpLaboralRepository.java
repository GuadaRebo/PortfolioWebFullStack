
package com.portfolio.API.repository;

import com.portfolio.API.model.ExpLaboral;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpLaboralRepository extends JpaRepository <ExpLaboral, Long>{
    
}
