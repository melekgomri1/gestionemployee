package com.example.gestionemployee.repository;

import com.example.gestionemployee.models.Mission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Missionrepository extends JpaRepository<Mission,Integer> {
}
