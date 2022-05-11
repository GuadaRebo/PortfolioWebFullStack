
package com.portfolio.API.Security.repository;

import com.portfolio.API.Security.enums.RolNombre;
import com.portfolio.API.Security.model.Rol;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




@Repository
public interface RolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
