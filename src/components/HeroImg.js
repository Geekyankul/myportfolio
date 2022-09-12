import React from 'react'
import './HeroImg.css'
import Header from '../image/header.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className="hero">
      <div className='mask'>
        <img src={Header} className='into-img' alt='header'/>
      </div>
      <div className='content'>
          <p>I'M A WEB DEVELOPER</p>
          <h1>React Developer</h1>
          <div>
              <Link to='/project' className='btn'>PROJECTS</Link>
              <Link to='/contact' className='btn btn_light'>CONTACT</Link>
            </div>
        </div>
      
    </div>
  )
}

export default HeroImg