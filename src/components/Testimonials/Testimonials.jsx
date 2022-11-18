import React, {useState} from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'  // to print the reviews along with reviewer images, names etc.
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {

    const transition={type:'spring',duration:3}
    const [selected, setselected]= useState(0);
    const tlength= testimonialsData.length;

  return (
    <div className='testimonials' id='testimonials'>
        <div className='test-left'>
            <span>Testimonials</span>
            <span className='transparent_text'>what they </span>
            <span>say about us</span>
{/* reviews data */}
{/* animation */}
            <motion.span
             key={selected}
             initial={{opacity:0,x:-100}}
             animate={{opacity:1,x:0}}
             exit={{opacity:0,x:100}}
             transition={transition}
            >{testimonialsData[selected].review}
            </motion.span>
            <span>
                <span>
                    {testimonialsData[selected].name}
                </span>{' '} {/* add space in btwn */}
               - {testimonialsData[selected].status}
            </span>
        </div>

        <div className='test-right'>
            {/* two div for background frames */}
            <div></div>
            <div></div>
            <motion.img 
             key={selected}
             initial={{opacity:0,x:100}}
             animate={{opacity:1,x:0}}
             exit={{opacity:0,x:-100}}
             transition={transition}
            src={testimonialsData[selected].image} alt="" />

            <div className='arrows'>
                <img 
                    onClick={()=>{
                        // if first img is selected then set img as last else just previous
                       if(selected===0)setselected(tlength-1);
                       else setselected((prev)=>prev-1); 
                    }}
                src={leftArrow} alt="" />
                <img
                onClick={()=>{
                    // if last img is selected then select the first else select just next
                    if(selected===tlength-1)setselected(0);
                    else setselected((prev)=>prev+1);
                }}
                src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials