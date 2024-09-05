package com.example.gestionemployee.service;

import com.example.gestionemployee.models.Mission;
import com.example.gestionemployee.repository.Missionrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MissionService {
    @Autowired
    Missionrepository missionrepository;
    public Mission addmission(Mission mission){return missionrepository.save(mission);}
    public void deletemission(Integer id){
        missionrepository.deleteById(id);
    }
    public List<Mission> getall1(){
        return missionrepository.findAll();
    }
}
