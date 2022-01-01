import React, { useState } from 'react'
import { Nav } from './Nav'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Header = (props) => {
    const [ state, setState ] = useState(false)

    return (
        <header>
            <div className="header">
                <div className="logo">
                    
                    <h2 style={{color: 'white'}}>Spotify</h2>
                    
                </div>
               <div className={ state ? "show-nav" : "nav"} >
               <Nav {...props} />
               </div>
                <div className="icons" style={{color: 'white'}} onClick={() => setState(!state)}>
                    {
                        state ? <FaTimes /> : <FaBars />
                    }
                 </div>   
            </div>
        </header>
        
    )
}
