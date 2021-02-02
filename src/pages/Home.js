import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from "../components/Services";
import  FeaturedRoom  from "../components/room/FeaturedRoom";

export const Home = () => {
    return (
        <>
            <Hero >
                <Banner title='Luxurious rooms' subtitle="deluxe rooms starting at ¥5000">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom />
        </>);
}
export default Home;