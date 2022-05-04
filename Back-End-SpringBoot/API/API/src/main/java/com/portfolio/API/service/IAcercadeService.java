/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.API.service;

import com.portfolio.API.model.Acercade;
import java.util.List;



public interface IAcercadeService {
    public List<Acercade> verAcercade();
    
    public void crearAcercade (Acercade acercade);
    
    public void borrarAcercade (Long id);
    
    public void actualizarAcercade (Acercade acercade);
}
