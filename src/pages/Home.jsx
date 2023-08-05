import React from 'react';
import Banner from '../components/Banner';
import WhyQubly from '../components/WhyQubly';
import ForProductTeams from '../components/ForProductTeams';
import ForEngineeringTeams from '../components/ForEngineeringTeams';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyQubly></WhyQubly>
            <ForProductTeams></ForProductTeams>
            <ForEngineeringTeams></ForEngineeringTeams>
        </div>
    );
};

export default Home;