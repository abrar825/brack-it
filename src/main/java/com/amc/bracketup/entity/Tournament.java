package com.amc.bracketup.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    String name;
    private LocalDate startDate;
    private LocalDate endDate;

    @OneToMany(mappedBy = "tournament")
    private List<String> matches = new ArrayList<>();
    private List<String> teams;

    public Tournament(String name) {
        this.name = name;
    }
}
