import React from 'react'
import { FaCopyright, FaFacebook, FaGlobe, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    const footerStyle = {
        background: '#222326',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        fontSize: '1.6rem'
    }
    return (
        <footer>
        <div className="footer">
            <div className="first-footer-section">
             
                    <div className="logo">
                        <h2 style={{color: 'white'}}>spotify</h2>
                    </div>
                
                <div className="first">
                    <h2 style={{color: '#919496'}}>Company</h2>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Jobs</a>
                        </li>
                        <li>
                            <a href="#">For the Records</a>
                        </li>
                    </ul>
                </div>
                <div className="second">
                <h2 style={{color: '#919496'}}>Community</h2>
                <ul>
                        <li>
                            <a href="#">For Artistes</a>
                        </li>
                        <li>
                            <a href="#">Developers</a>
                        </li>
                        <li>
                            <a href="#">Advertising</a>
                        </li>
                        <li>
                            <a href="#">Investors</a>
                        </li>
                        <li>
                            <a href="#">Vendors</a>
                        </li>
                    </ul>
                </div>
                <div className="third">
                <h2 style={{color: '#919496'}}>Useful Links</h2>
                <ul>
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <a href="#">Web Player</a>
                        </li>
                        <li>
                            <a href="#">Free Mobile App</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="second-footer-section">
                <span style={footerStyle}>{<FaInstagram />}</span>
                <span style={footerStyle}>{<FaTwitter />}</span>
                <span style={footerStyle}>{<FaFacebook />}</span>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-links">
                <ul>
                    <li>
                        <a href="#">Legal</a>
                    </li>
                    <li>
                        <a href="#">Privacy Center</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Cookies</a>
                    </li>
                    <li>
                        <a href="#">About Ads</a>
                    </li>
                </ul>
            </div>
            <div className="footer-location" style={{color: '#919496'}}>
                <div className="country">{<FaGlobe />} <span>Nigeria</span> </div>
                <div className="year"> {<FaCopyright />} 2021 Spotify AB</div>
            </div>
        </div>
        </footer>
    )
}

export default Footer
