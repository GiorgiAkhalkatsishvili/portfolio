import React from 'react'
import './AboutComponent.css'
import personImg from '../../assets/images/aboutImg.png'

const AboutComponent = () => {
  return (
    <div className='aboutComponent'>
      <div className="about-inner">
        <div className="about-img">
        <img src={personImg} alt="" />
      </div>
      <div className="about-texts">
        <div className="paragraph">
          <p>About</p>
          </div>
          <div className="heading">
            <h2>About Me</h2>
          </div>
          <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
              <br />
              <br />
Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r. </p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default AboutComponent
