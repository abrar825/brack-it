package com.amc.bracketup.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Getter
@Setter
public class Group {

    String groupName;
    int numberOfTeams;
    String[] teams;
    List<Match> matches;

    public Group(String name, String[] teams) {
        this.groupName = name;
        this.teams = teams;

    }

   private void generateMatches() {
        for (int i = 0; i < this.teams.length - 1; i++) {
            for (int j = i + 1; j < this.teams.length; j++) {
                Match newMatch = new Match(teams[i], teams[j]);
                matches.add(newMatch);
            }
        }
   }
    


}
