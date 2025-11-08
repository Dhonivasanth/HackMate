export interface Team {
    id: string;
    teamName: string;
    projectDomain: string;
    requiredSkills: string[];
    description: string;
}

export interface UserProfile {
    id: string;
    name: string;
    skills: string[];
    interests: string[];
}