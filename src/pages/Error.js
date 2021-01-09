import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const Error = () => {
    return <Hero>
        <Banner title='title' subtitle='page not found'>
            <Link to='/' className='button-primary'>
                return home
            </Link>
        </Banner>
    </Hero>
}
export default Error;