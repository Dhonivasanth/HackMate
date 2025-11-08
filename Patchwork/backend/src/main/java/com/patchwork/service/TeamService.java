package com.patchwork.service;

import com.patchwork.model.Team;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TeamService {

    private List<Team> teams = new ArrayList<>();

    public Team createTeam(Team team) {
        teams.add(team);
        return team;
    }

    public List<Team> getAllTeams() {
        return teams;
    }

    public Team matchTeam(String requiredSkill) {
        return teams.stream()
                .filter(team -> team.getRequiredSkills().contains(requiredSkill))
                .findFirst()
                .orElse(null);
    }
}