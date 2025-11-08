import React, { useState, useEffect } from 'react';

const TeamMatcher: React.FC = () => {
    const [skills, setSkills] = useState<string>('');
    const [teams, setTeams] = useState<any[]>([]);
    const [matchedTeams, setMatchedTeams] = useState<any[]>([]);

    useEffect(() => {
        // Fetch teams from the backend
        const fetchTeams = async () => {
            const response = await fetch('/api/teams');
            const data = await response.json();
            setTeams(data);
        };
        fetchTeams();
    }, []);

    const handleMatch = () => {
        const matched = teams.filter(team =>
            team.requiredSkills.some((skill: string) => skills.includes(skill))
        );
        setMatchedTeams(matched);
    };

    return (
        <div>
            <h2>Team Matcher</h2>
            <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Enter your skills (comma separated)"
            />
            <button onClick={handleMatch}>Find Matching Teams</button>
            <h3>Matched Teams:</h3>
            <ul>
                {matchedTeams.map((team, index) => (
                    <li key={index}>{team.teamName} - {team.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default TeamMatcher;