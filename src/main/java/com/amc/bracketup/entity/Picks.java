package com.amc.bracketup.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class Picks {

    GroupStage groupStage;
    Map<String, String> groupStagePicks;
    Map<String, String> groupWinners;
    Map<String, String> RO16_Matchups;
    Map<String, String> quarterMatchups;
    Map<String, String> semiMatchups;

    String champion;
}
