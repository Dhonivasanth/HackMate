package com.patchwork.model;

import java.util.List;

public class Team {
    private String teamName;
    private String projectDomain;
    private List<String> requiredSkills;
    private String description;

    public Team() {
    }

    public Team(String teamName, String projectDomain, List<String> requiredSkills, String description) {
        this.teamName = teamName;
        this.projectDomain = projectDomain;
        this.requiredSkills = requiredSkills;
        this.description = description;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getProjectDomain() {
        return projectDomain;
    }

    public void setProjectDomain(String projectDomain) {
        this.projectDomain = projectDomain;
    }

    public List<String> getRequiredSkills() {
        return requiredSkills;
    }

    public void setRequiredSkills(List<String> requiredSkills) {
        this.requiredSkills = requiredSkills;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}