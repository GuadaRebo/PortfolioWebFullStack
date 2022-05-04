/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.API.service;
import com.portfolio.API.model.Acercade;
import com.portfolio.API.repository.AcercadeRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
    
public class AcercadeService implements IAcercadeService {
     @Autowired
     public AcercadeRepository acercaRepo;
     
     @Override
    public List<Acercade> verAcercade() {        
       return acercaRepo.findAll();
    }

     
     @Override
    public void crearAcercade (Acercade acercade) {
        acercaRepo.save(acercade);
    }

    @Override
    public void borrarAcercade(Long id) {
        acercaRepo.deleteById(id);
    }

    @Override
    public void actualizarAcercade(Acercade acercade) {
         acercaRepo.save(acercade);
    }
    
}
