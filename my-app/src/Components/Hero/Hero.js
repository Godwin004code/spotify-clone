import React from 'react'
import { Header } from './Header/Header'
import './Hero.css'
import Herotext from './HeroText/Herotext'

export const Hero = (props) => {
    return (
        <div className="hero" >
            <Header />
            <Herotext {...props} />
        </div>
    )
}
