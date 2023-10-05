package com.amc.bracketup.controller;

import com.amc.bracketup.entity.Player;
import com.amc.bracketup.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/players")
public class PlayerController {
    @Autowired
    PlayerService playerService;

    @PostMapping("/insertPlayer")
    public ResponseEntity<Player> addPlayer(@RequestBody Player player) {
        Player addedPlayer = playerService.addPlayer(player);
        return new ResponseEntity<>(addedPlayer, HttpStatus.CREATED);
    }
}
