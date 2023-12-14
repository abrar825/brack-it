package com.amc.bracketup.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Match {
    String team1;
    String team2;
    String pick;
    String matchCode;


    public Match(String team1, String team2) {
        this.team1 = team1;
        this.team2 = team2;
        this.matchCode = team1 + "v" + team2;
    }


}
