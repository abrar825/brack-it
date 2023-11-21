package com.amc.bracketup.service;

import com.amc.bracketup.entity.Player;
import com.amc.bracketup.repository.PlayerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class PlayerService {

    @Autowired
    PlayerRepository playerRepository;

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public void updatePoints(int points, String playerName) {
        Player player = playerRepository.findByName(playerName).orElse(null);

        if (player != null) {
            player.setPoints(points);
        }

    }

    public Player addPlayer(Player player) {
        // add Validation logic here
        return playerRepository.save(player);
    }


}
