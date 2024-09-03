package com.example.gestionemployee.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Employee {
    @Id
    @GeneratedValue
    private Integer id;
    private String identifier;
    private String firstname;
    private String lastname;
    private String email;
    private LocalDate birthdate;
    @Enumerated
    private EmployeeRole role;
    @OneToOne
    @JoinColumn(name="adress_id")
    private Adress adress;
    @ManyToOne
    @JoinColumn(name="department_id")
    private Department department;
    @ManyToMany
    @JoinTable(
            name="employee_mission",
            joinColumns = @JoinColumn(name="employee_id"),
            inverseJoinColumns = @JoinColumn(name="mission_id")
    )
    private List<Mission> missions;
}
