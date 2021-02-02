import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from "../components/Hero";
import MenuContainer from "../components/menu/MenuContainer"

export default function Menu() {
    return (
       <>
       <Hero hero="menusHero">
            <Banner title="Our Foods and bevarages">
                <Link to="/" className="btn-primary">return home</Link>
            </Banner>
       </Hero>
       <MenuContainer/>
       </>
    )
}
