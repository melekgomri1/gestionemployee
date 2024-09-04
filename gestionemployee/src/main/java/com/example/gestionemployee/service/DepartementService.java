package com.example.gestionemployee.service;

import com.example.gestionemployee.models.Department;
import com.example.gestionemployee.models.Mission;
import com.example.gestionemployee.repository.Departementrepository;
import com.example.gestionemployee.repository.Missionrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DepartementService {
    @Autowired
    Departementrepository departementrepository;
    public Department adddepartment(Department department){return departementrepository.save(department);}
    public void deletedepartment(Integer id){
        departementrepository.deleteById(id);
    }
    public List<Department> getall1(){
        return departementrepository.findAll();
    }
}
