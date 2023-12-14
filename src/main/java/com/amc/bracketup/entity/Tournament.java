package com.amc.bracketup.entity;

import com.amc.bracketup.entity.tournamentKeys.TournamentKey;
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

    private List<Player> players;
    private TournamentKey tournamentKey;

    public Tournament(String name) {
        this.name = name;
    }
}
