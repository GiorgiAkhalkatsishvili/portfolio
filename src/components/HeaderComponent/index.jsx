import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import './HeaderComponent.css'

const HeaderComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className='headerComponent'>
      <div className="main-heading">
        <div className="main-img-texts">
          <img src={logo} alt="" />
          <h2>logoipsum</h2>
        </div>
        <div className="nav-links">
          <ul>
            <li id='home'>Home</li>
            <li>Portfolio</li>
            <li>About me</li>
          </ul>
        </div>
        <div className="main-btn-one">
          <button>Contact Me</button>
        </div>
        <div className="burger-menu" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
          <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-list">
              <ul>
            <li id='home'>Home</li>
            <li>Portfolio</li>
            <li>About me</li>
          </ul>
            </div>
            <div className="sidebar-btn">
              <button>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
