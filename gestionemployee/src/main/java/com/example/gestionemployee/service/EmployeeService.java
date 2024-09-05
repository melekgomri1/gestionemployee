package com.example.gestionemployee.service;

import com.example.gestionemployee.models.Employee;
import com.example.gestionemployee.models.Mission;
import com.example.gestionemployee.repository.Employeerepository;
import com.example.gestionemployee.repository.Missionrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class EmployeeService {
    @Autowired
    Employeerepository employeerepository;
    public Employee addemployee(Employee employee){return employeerepository.save(employee);}
    public void deleteemployee(Integer id){
        employeerepository.deleteById(id);
    }
    public List<Employee> getall1(){
        return employeerepository.findAll();
    }
}
