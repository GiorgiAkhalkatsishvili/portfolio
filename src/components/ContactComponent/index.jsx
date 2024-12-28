import React from 'react'
import './ContactComponent.css'

const ContactComponent = () => {
  return (
    <div className='contactComponent'>
      <div className="contact-main-headings">
        <h2>Get In Touch</h2>
        <h1>Contact me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className="contact-inputs">
        <div className="input-one inpOne">
          <form action="">
            <label id='name' htmlFor="firstname">First Name</label>
            <input id='name' type="text" />
          </form>
        </div>
        <div className="input-one inpTwo">
          <form action="">
            <label id='Lastname' htmlFor="firstname">Last Name</label>
            <input id='Lastname' type="text" />
          </form>
        </div>
        <div className="input-one inpThree">
          <form action="">
            <label id='email' htmlFor="firstname">Email</label>
            <input id='email' type="email" />
          </form>
        </div>
        <div className="input-one inpFour">
          <form action="">
            <label id='number' htmlFor="number">Phone number</label>
            <input id='number' type="number" />
          </form>
        </div>
      </div>
      <div className="bottom-inputs">
         <div className="input-one inpFive">
          <form action="">
            <label id='text' htmlFor="text">Choose a topic</label>
            <select name="text" id="text">
              <option value="">Lorem</option>
              <option value="">Lorem</option>
              <option value="">Lorem</option>
            </select>
          </form>
        </div>
         <div className="input-one inpSix">
          <form action="">
            <label id='text' htmlFor="text">Message</label>
            <input type="text" id='text' placeholder='Type your message...'/>
          </form>
        </div>
        <div className="final-inp">
          <input type="checkbox" />
          <p>I accept the terms</p>
        </div>
        <div className="final-btn">
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent
