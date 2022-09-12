import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text' placeholder='Enter your name' />
            <label>Your Email</label>
            <input type='text' placeholder='Enter your email'/>
            <label>Your Message</label>
            <textarea row='8' placeholder='Type your message here'></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form