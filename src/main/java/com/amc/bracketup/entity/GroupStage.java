package com.amc.bracketup.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.List;

@Slf4j
@Getter
@Setter
public class GroupStage {

    int numGroups;
    int numTeams;
    HashMap<String, Group> groups = new HashMap<String, Group>();

    public GroupStage(List<Team> teams) {
        for (Team team : teams) {
            if (groups.containsKey(team.getGroup())) {
                groups.get(team.getGroup()).addTeam(team);
            } else {
                Group group = new Group(team.getGroup());
                group.addTeam(team);
                groups.put(team.getGroup(), group);
            }
        }
    }

    public void addGroup(Group group) {
        this.groups.put(group.getGroupName(), group);
    }
}
