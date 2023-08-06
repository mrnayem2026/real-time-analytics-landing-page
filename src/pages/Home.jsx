import React from 'react';
import Banner from '../components/Banner';
import WhyQubly from '../components/WhyQubly';
import ForProductTeams from '../components/ForProductTeams';
import ForEngineeringTeams from '../components/ForEngineeringTeams';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyQubly></WhyQubly>
            <ForProductTeams></ForProductTeams>
            <ForEngineeringTeams></ForEngineeringTeams>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;