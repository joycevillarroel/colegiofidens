import React from 'react'
import About from '../../Components/About/About'
import Bilingual from '../../Components/Bilingual/Bilingual'
import Carousel from '../../Components/Carousel/Carrousel'
import Contact from '../../Components/Contact/Contact'
import Header from '../../Components/Navbar/Navbar.js'
import style from './style.module.css'

const Home = () => {
    return (
        <div>
            <Carousel />
            <About/>
            <Bilingual/>
            <Contact/>
        </div>
    )
}

export default Home
