package com.example.gestionemployee.Controller;

import com.example.gestionemployee.models.Employee;
import com.example.gestionemployee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping("/addemployee")
    public Employee addeadminist(@RequestBody Employee employee){
        return employeeService.addemployee(employee);
    }
    @DeleteMapping("/deleteemployee/{id}")
    private void deleteenseignant(@PathVariable Integer id){
        employeeService.deleteemployee(id);
    }
    @GetMapping("/getall")
    private List<Employee> getall(){
        return employeeService.getall1();
    }
}
