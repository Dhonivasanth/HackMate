import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Patchwork</h1>
            <p>Your platform for smart team matching for hackathons and projects.</p>
            <nav>
                <ul>
                    <li><a href="/teams">Find Teams</a></li>
                    <li><a href="/create-team">Create a Team</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;