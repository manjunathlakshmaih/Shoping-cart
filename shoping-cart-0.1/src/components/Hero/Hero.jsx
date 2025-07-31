import React from 'react'
import Hero_Large_Desktop from '../../assets/Hero_Large_Desktop.jpg'
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <img src={Hero_Large_Desktop} alt='main back ground image' />
            <div className="hero-content">
                <div className="container">
                    <h1>Discover our line of VR Headsets</h1>
                    <p className='paragrap'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    <button>View Headset</button>
                </div>
            </div>
        </section>
    )
}

export default Hero;