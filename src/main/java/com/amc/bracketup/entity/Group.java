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
    HashMap<String, Team> teams = new HashMap<String, Team>();
    List<Match> matches;

    public Group(String name) {
        this.groupName = name;

    }

    public List<String> getTeams() {
        return new ArrayList<String>(this.teams.keySet());

    }

    public void addTeam(Team team) {
        this.teams.put(team.getName(), team);

    }


    public int getTeamPoints(String name) {
        return teams.get(name).getPoints();

    }

    public void setTeamPoints(String name, int points) {
        if (this.teams.containsKey(name)) {
            this.teams.get(name).setPoints(points);
        } else {
            System.err.println("Team does not exist in group.");
        }
    }

    public HashMap<String, Integer> getTable() {
        HashMap<String, Integer> table = new HashMap<String, Integer>();
        for (Team team : this.teams.values()) {
            table.put(team.getName(), team.getPoints());
        }
        return table;
    }

    public void setMatches() {
        List<Team> teamList = new ArrayList<>(this.teams.values());

        for (int i = 0; i < teamList.size(); i++) {
            for (int j = i+1; j < teamList.size(); j++) {
                Match match = new Match(teamList.get(i).getName(), teamList.get(j).getName());
                this.matches.add(match);
            }
        }
    }

    


}
