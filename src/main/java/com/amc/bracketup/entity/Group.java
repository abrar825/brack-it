package com.amc.bracketup.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
public class Group {

    String groupName;
    int numberOfTeams;
    String[] teams;
    Map<String, String> matches = new HashMap<String, String>();

    public Group(String name, int numTeams, String[] teams) {
        this.groupName = name;
        this.teams = teams;
        this.numberOfTeams = numTeams;
        generateMatches();


    }

    private void generateMatches() {
        for (int i = 0; i < this.teams.length - 1; i++) {
            for (int j = i + 1; j < this.teams.length; j++) {
                Match newMatch = new Match(teams[i], teams[j]);
                matches.put(newMatch.getMatchCode(), newMatch.getPick());

            }
        }
    }


}
