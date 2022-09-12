import React from 'react'
import './WorkCard.css'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

const Work = () => {
  return (
    <div className='work_container'>
        <h1 className='project_heading'>Projects</h1>
        <div className='project_container'>
            {
                WorkCardData.map((value,index)=>{
                    return(
                        <WorkCard 
                            key={index}
                            imgsrc={value.imgsrc}
                            title={value.title}
                            text={value.text}
                            view={value.view}
                            source={value.source}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Work