package com.example.gestionemployee.Controller;

import com.example.gestionemployee.models.Department;
import com.example.gestionemployee.service.DepartementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Department")
public class DepartmentController {
    @Autowired
    private DepartementService departementService;
    @PostMapping("/addadmins")
    public Department addeadminist(@RequestBody Department department){
        return departementService.adddepartment(department);
    }
    @DeleteMapping("/deleteadminst/{id}")
    private void deletedepartment(@PathVariable Integer id){
        departementService.deletedepartment(id);
    }
    @GetMapping("/getall")
    private List<Department> getall(){
        return departementService.getall1();
    }
}
