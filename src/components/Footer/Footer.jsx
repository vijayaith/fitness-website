import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import insta from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className='footer'>
           <div className='links'>
             <img src={github} alt="" />
             <img src={insta} alt="" />
             <img src={linkedin} alt="" />
           </div>

           <div className='logo'>
              <img src={logo} alt="" />
           </div>

        </div>
        <div className='blur'></div>
        <div className='blur blur-1'></div>
    </div>
  )
}

export default Footer