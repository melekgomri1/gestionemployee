package com.example.gestionemployee.repository;

import com.example.gestionemployee.models.Adress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Adressrepository extends JpaRepository<Adress,Integer> {
}
