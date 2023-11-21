package com.amc.bracketup.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class Picks {

    Map<String, String> groupWinners;
    Map<String, String> RO16_Matchups;
    Map<String, String> quarterMatchups;
    Map<String, String> semiMatchups;
    Map<String, String> groupStagePicks;

    String champion;
}
