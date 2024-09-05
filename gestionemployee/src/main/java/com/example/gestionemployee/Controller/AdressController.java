package com.example.gestionemployee.Controller;

import com.example.gestionemployee.models.Adress;
import com.example.gestionemployee.models.Department;
import com.example.gestionemployee.service.AdressService;
import com.example.gestionemployee.service.DepartementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/adress")
public class AdressController {
    @Autowired
    private AdressService adressService;
    @PostMapping("/addadress")
    public Adress addeadminist(@RequestBody Adress adress){
        return adressService.addadress(adress);
    }
    @DeleteMapping("/deleteadress/{id}")
    private void deletedepartment(@PathVariable Integer id){
        adressService.deleteadress(id);
    }
    @GetMapping("/getall")
    private List<Adress> getall(){
        return adressService.getall1();
    }

}
