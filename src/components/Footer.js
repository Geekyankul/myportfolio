import React from 'react';
import './Footer.css'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}} />
                    <div>
                        <p>Lucknow, Uttar pradesh</p>
                        <p>India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}} />
                    +91 7210963263
                    </h4>            
                </div>
                <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}} />
                    Ankul.cse.united@gmail.com
                    </h4>            
                </div>
            </div>
                       
            <div className='right'>
                <h4>About me</h4>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text 
                used in laying out print, graphic or web designs. The passage is attributed 
                to an unknown ...</p>
                <div className='social'>
                <a href="https://www.facebook.com/lucky.kashyap.547"><FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}} /></a>
                <a href='https://www.linkedin.com/in/ankul-kashyap-619a0a155/'><FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}} /></a>
                <a href='https://www.instagram.com/'><FaInstagram size={30} style={{color:'#fff', marginRight:'1rem'}} /></a>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer