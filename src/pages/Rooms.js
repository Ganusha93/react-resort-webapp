import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from "../components/room/RoomContainer";

export const Rooms = () => {
    return <><Hero hero='roomsHero'>
        <Banner title='Our rooms'>
            <Link to='/' className="btn-primary">retun home</Link>
        </Banner>
    </Hero>
    <RoomContainer />
    </>
}
 export default Rooms;