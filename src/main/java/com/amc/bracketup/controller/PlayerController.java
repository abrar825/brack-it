package com.amc.bracketup.controller;

import com.amc.bracketup.entity.Player;
import com.amc.bracketup.service.PlayerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/get")
    public String getPlayer() {
        return "Player!";
    }


}
