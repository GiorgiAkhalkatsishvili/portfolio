import React from 'react'
import './CenterComponent.css'
import htmlImg from '../../assets/images/html.webp'
import cssImg from '../../assets/images/css.png'
import javascriptImg from '../../assets/images/javascript.jpg'
import reactImg from '../../assets/images/react.png'

const CenterComponent = () => {
  return (
    <div className='centerComponent'>
      <div className="main-headings">
        <h3>My Skills</h3>
        <h1>My Expertise</h1>
      </div>
      <div className="skills-section">
        <div className="skill-one">
          <div className="inner-skills-info">
            <div className="img-section">
          <img src={htmlImg} alt="" />
        </div>
        <div className="language-heading">
          <h3>HTML</h3>
        </div>
        <div className="language-text">
          <p>I am proficient in HTML and have a strong understanding of its foundational role in web development. My experience includes creating clean, semantic code to ensure that websites are well-organized, user-friendly, and easy to maintain.</p>
        </div>
          </div>
        </div>
        <div className="skill-one">
          <div className="inner-skills-info">
            <div className="img-section">
          <img src={cssImg} alt="" />
        </div>
        <div className="language-heading">
          <h3>CSS</h3>
        </div>
        <div className="language-text">
          <p>I have a strong command of CSS and its role in styling and visually enhancing web pages. From simple layouts to complex designs, I am skilled in applying various CSS techniques to create responsive, aesthetically pleasing, and functional user interfaces. </p>
        </div>
          </div>
        </div>
        <div className="skill-one">
          <div className="inner-skills-info">
            <div className="img-section">
          <img src={javascriptImg} alt="" />
        </div>
        <div className="language-heading">
          <h3>JAVASCRIPT</h3>
        </div>
        <div className="language-text">
          <p>I have a solid foundational understanding of JavaScript and am continuously improving my skills in this powerful scripting language. I have used JavaScript to add interactivity and dynamic functionality to websites. </p>
        </div>
          </div>
        </div>
        <div className="skill-one">
          <div className="inner-skills-info">
            <div className="img-section">
          <img src={reactImg} alt="" />
        </div>
        <div className="language-heading">
          <h3>REACT</h3>
        </div>
        <div className="language-text">
          <p>I have a foundational understanding of React and am actively expanding my skills in building dynamic, component-based user interfaces. I am familiar with key React concepts such as JSX, components, props, and state management. </p>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CenterComponent
