package com.example.gestionemployee.Controller;

import com.example.gestionemployee.models.Mission;
import com.example.gestionemployee.service.MissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mission")
public class MissionController {
    @Autowired
    private MissionService missionService;
    @PostMapping("/addadmins")
    public Mission addeadminist(@RequestBody Mission mission){
        return missionService.addmission(mission);
    }
    @DeleteMapping("/deletemission/{id}")
    private void deleteenseignant(@PathVariable Integer id){
        missionService.deletemission(id);
    }
    @GetMapping("/getall")
    private List<Mission> getall(){
        return missionService.getall1();
    }
}
