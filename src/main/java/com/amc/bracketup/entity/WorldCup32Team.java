package com.amc.bracketup.entity;

import java.util.List;

public class WorldCup32Team extends Tournament implements TournamentFormat  {

    private static final int numTeams = 32;
    private static final int numGroups = 8;
    GroupStage groupStageKey;


    public WorldCup32Team(List<String> teams) {
        super("World Cup 32 Team");

    }


    @Override
    public int getNumberOfTeams() {
        return numTeams;

    }

    @Override
    public int getNumberOfGroups() {
        return 0;
    }

    @Override
    public String getFormatName() {
        return null;
    }
}
