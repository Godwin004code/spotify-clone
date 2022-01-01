import React from 'react'
import './Herotext.css'
import Footer from '../../Footer/Footer'
import firstBadge from '../../../badge-en (1).svg'
import secondBadge from '../../../badge-en.svg'


const Herotext = (props) => {
    return (
        <div className="hero-text">

            <div className="first-text">
            <div className="text">
            <h3>spotify premium</h3>
            <h2 style={{fontSize: '3rem'}}>
            Ends soon: 3 months of Premium for free
            </h2>
            <p className="para-1"> 
            Don't miss ad-free music listening, offline playback, and more. Cancel anytime.
            </p>
            <button style={{background: '#202f72', color: '#1ed760'}}>get 3 months free</button>
            <p>
            Individual plan only. ₦ 900/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 31 December 2021.
            </p>
            </div>
            
            </div>
            <div className="second-text">
            <div className="text">
                <h3>#SPOTIFYWRAPPED</h3>
                <h2 style={{fontSize: '3rem'}}>2021 Wrapped is ready.</h2>
                <p className="para-1">
                But it’s only available in the Spotify app. Download it now to discover more.
                </p>
                <div>
                    <img src={firstBadge} alt="first-badge" style={{width: '100px', height: '55px'}}  />
                    <img src={secondBadge} alt="second-badge" style={{width: '100px', height: '60px'}} />
                </div>
                <p id="listen">
                    <a href="#">Listen to 2021 highlights</a>
                </p>
                </div>
            </div>
            <div className="third-text">
            <div className="text">
                <h3>SPOTIFY free</h3>
                <h2 style={{fontSize: '3rem'}}>Listening is everything</h2>
                <p className="para-1">
                Millions of songs and podcasts. No credit card needed.
                </p>
                <button style={{background: '#1ed760', color: '#202f72'}}>get spotify free</button>
                </div>
            </div>
            <Footer {...props} />
        </div>
    )
}

export default Herotext
