import React from 'react'
import './WorkCard.css'

import {NavLink} from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className='project_card'>
        <img src={props.imgsrc} alt='image1' />
            <h2 className='project_title'>{props.title}</h2>
            <div className='project_details'>
                <p>{props.text}</p>
                <div className='project_btn'>
                    <NavLink to={props.view}  className='btn'>View</NavLink>
                    <NavLink to={props.source}  className='btn'>Source</NavLink>
                </div>
            </div>
    </div>
  )
}

export default WorkCard