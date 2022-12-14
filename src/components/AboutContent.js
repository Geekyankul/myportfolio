import React from 'react'
import './AboutContent.css'
import {Link} from 'react-router-dom'
import React1 from '../image/react1.jpeg'
import React2 from '../image/react2.webp'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>
              I am a react Developer. I create responsive 
              secure website.
            </p>
            <Link to="/contact">
              <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
          <div className='img_container'>
            <div className='img_stack bottom'>
              <img src={React1} className='img' alt='true' />
            </div>
            <div className='img_stack top'>
              <img src={React2} className='img' alt='pic' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutContent