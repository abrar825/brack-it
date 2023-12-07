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
    String[][] teams = new String[numGroups][numTeams];

    public GroupStage(int numGroups, int numTeams, String [][] teams) {
        this.numGroups = numGroups;
        this.numTeams = numTeams;
        this.teams = teams;

    }

    private void initializeGroups() {
        char groupName = 'A';

        for (String[] group : teams) {
            String groupNameStr = "Group " + groupName;
            Group newGroup = new Group(groupNameStr, group);
            this.addGroup(newGroup);
        }
    }

    public void addGroup(Group group) {
        this.groups.put(group.getGroupName(), group);
    }
}
