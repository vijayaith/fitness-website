import React from 'react'
import {plansData} from '../../data/plansData'
import './Plans.css'
import tick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className='plans-container'>

{/* blur */}
{/* <div className='blur-1'></div>              */}

       <div className="plans-header" style={{gap:'3rem'}}>
          <span className='transparent_text'>READY TO START  </span>
          <span>YOUR JOURNY  </span>
          <span className='transparent_text'>NOW WITHUS</span>
       </div>

{/* 3 plans card  */}
       <div className="plans" id='plans'>
        {plansData.map((plan,i)=>(
           <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span> 

              <div className="features">
                 {plan.features.map((feature,j)=>(
                    <div className='feature'>
                        <img src={tick} alt="" />
                        <span key={j}>{feature}</span>
                    </div>
                 ))}
              </div> 
              <div>
                <span>See more benefits</span>
              </div>
              <button className='btn'>Join Now</button>
           </div>
        ))}
       </div>
    </div>
  )
}

export default Plans