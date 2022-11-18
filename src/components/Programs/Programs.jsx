import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import rightarrow from '../../assets/rightArrow.png'
function Programs() {
  return (
    <div className='Programs' id="programs">
      <div className='programs-header'>
        <span className='transparent_text'>Explore our</span>
        <span>Programs</span>
        <span className='transparent_text'>to shape you</span>
      </div>

      <div className='program-categories'>
        {programsData.map((program)=>(
          <div className='category'>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className='join-now'><span>Join Now</span><img src={rightarrow} alt="" /></div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Programs