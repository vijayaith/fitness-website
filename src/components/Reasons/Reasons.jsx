import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
function Reasons() {
  return (
    <div className='Reasons' id='reasons'>

{/* four gymmers image */}
        <div className='left-side'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>

{/* why choose us */}
        <div className='right-side'>
          <span>Some reasons </span>

          <div>
            <span className='transparent_text' >why </span>
            <span>choose us</span>
          </div>

          <div className='details'>  
             <div>
               <img src={tick} alt="" />
               <span>Over 150+ Expert Coaches</span>
             </div>
             <div>
               <img src={tick} alt="" />
               <span>Train in Smarter and Faster Way</span>
             </div>
             <div>
               <img src={tick} alt="" />
               <span>Free programs for new members</span>
             </div>
             <div>
               <img src={tick} alt="" />
               <span>Reliable Teams</span>
             </div>
           </div>
          <span style={{
                 color:"var(--gray)",
                 fontWeight:"normal",
          }}
          >
          OUR PARTNERS
          </span>

{/* partners logos */}
          <div className='partners'>
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Reasons