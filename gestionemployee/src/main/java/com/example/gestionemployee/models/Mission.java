package com.example.gestionemployee.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Mission {
    @Id
    @GeneratedValue
    private Integer id;
    private String name;
    private int duration;
    @ManyToMany(mappedBy = "missions")
    private List<Employee> employees;
}
