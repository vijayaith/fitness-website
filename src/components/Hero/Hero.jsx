import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

  const transition={type:'spring',duration:3}
  const mobilewidth=window.innerWidth<=768?true:false;

  return (
    <div className='hero' id='home'>
{/* blur in bckgrnd */}
<div className='blur h-blur'></div>


      <div className='left-h'>
            <Header/>  {/*  caliing header.jsx */}

         <div className='ad'>
{/* animation */}
             <motion.div
                initial={{left:mobilewidth?'160px':'210px'}}
                whileInView={{left:'8px'}}
                transition={{...transition,type:'tween'}}
             ></motion.div>
             <span>THE BEST FITNESS CLUB IN TOWN</span>
         </div>

{/* Hero heading */}
        <div className='hero-text'>
           <div>
             <span className='transparent_text'>Shape </span> 
             <span>Your</span>
           </div>  
           <div>
             <span>Ideal Body </span> 
           </div> 
           <div>
            <span>In here we will help you to shape and buil
              your body and live up your life to fittest.
            </span>
           </div>
        </div>

{/* stats measures */}
      <div className='stats'>
        <div>
          <span className='x'>
           <NumberCounter end={150} start={100} delay='4'/>+
          </span>
          <span>Expert coaches</span>
        </div>
        <div>
          <span className='x'>
          <NumberCounter end={1500} start={1200} delay='5'/>+
            </span>
          <span>Member joined</span>
        </div>
        <div>
          <span className='x'>
          <NumberCounter end={70} start={50} delay='4'/>+
          </span>
          <span>Fitness programs</span>
        </div>
      </div>

{/* join and learn more buttons */}
     <div className='buttons'>
      <button className='btn'>Get Started</button>
      <button className='btn'>Learn More</button>

     </div>
      </div> 


{/* right side */}
      <div className='right-h'>
        <button className='btn'>Join Now</button>

        <div className='heart-rate'>
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>112 bpm</span>
        </div>

      {/* hero poster */}
        <img className='hero-image' src={hero_image} alt="" />
{/* animation */}
        <motion.img 
         initial={{right:'10rem'}}
         whileInView={{right:'30rem'}}
         transition={transition}
         className='hero-image-back' src={hero_image_back} alt="" />
     
     {/* calorie div */}
        <motion.div
         initial={{right:'47rem'}}
         whileInView={{right:'38rem'}}
         transition={transition}
        className='calorie'>
           <img src={calories} alt="" />
           <span>220 kcal</span>
           <span>calories burned</span>

        </motion.div>

      </div>
    </div>
  )
}

export default Hero