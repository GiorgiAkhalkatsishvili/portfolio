import React from 'react'
import './BannerComponent.css'
import person from '../../assets/images/banner.png'
import headerImg from '../../assets/images/header.png'

const BannerComponent = () => {
  return (
    <div className='bannerComponent'>
      <div className="banner-inner">
         <div className="main-texts">
        <div className="name">
          <p>Hey, I am George</p>
        </div>
        <div className="info">
          <h1>I am a passionate front-end developer</h1>
        </div>
        <div className="fake-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div className="info-button">
          <button>Get In Touch</button>
        </div>
      </div>
      <div className="main-banner-image">
        <img src={headerImg} alt="" />
      </div>
     </div>
    </div>
  )
}

export default BannerComponent
