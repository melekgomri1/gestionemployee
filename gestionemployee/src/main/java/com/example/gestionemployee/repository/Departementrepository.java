package com.example.gestionemployee.repository;

import com.example.gestionemployee.models.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Departementrepository extends JpaRepository<Department,Integer> {
}
