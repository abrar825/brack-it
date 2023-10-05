package com.amc.bracketup.service;

import com.amc.bracketup.entity.Tournament;
import com.amc.bracketup.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TournamentService {

    @Autowired
    private TournamentRepository tournamentRepository;

    public Optional<Tournament> getTournament(String id) {
        return tournamentRepository.findById(id);
    }



}
