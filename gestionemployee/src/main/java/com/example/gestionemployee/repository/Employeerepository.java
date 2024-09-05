package com.example.gestionemployee.repository;

import com.example.gestionemployee.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Employeerepository extends JpaRepository<Employee,Integer> {
}
