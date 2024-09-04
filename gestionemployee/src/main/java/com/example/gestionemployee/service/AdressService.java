package com.example.gestionemployee.service;

import com.example.gestionemployee.models.Adress;
import com.example.gestionemployee.models.Mission;
import com.example.gestionemployee.repository.Adressrepository;
import com.example.gestionemployee.repository.Missionrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdressService {
    @Autowired
    Adressrepository adressrepository;
    public Adress addmission(Adress adress){return adressrepository.save(adress);}
    public void deletemission(Integer id){
        adressrepository.deleteById(id);
    }
    public List<Adress> getall1(){
        return adressrepository.findAll();
    }
}
