import React, {useState} from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import {Link} from "react-scroll";

const Header = () => {

  const mobilewidth=window.innerWidth<=768?true:false;
  const [menuOpened,setmenuOpened]=useState(false);

  return (
    <div className='header' id='header-id'>
      
        <img className='logo' src={Logo} alt="" />
      {menuOpened === false && mobilewidth===true?(
        <div style={{
          backgroundColor:'var(--appColor)',
          padding:'0.5rem',
          borderRadius:'5px'
        }}
        onClick={()=>setmenuOpened(true)}
        >
        <img src={bars} alt="" style={{width:'1.5rem', height:'1.5rem'}}/>
        </div>
      ):(
        <ul className='header-menu'>
            <li>
              <Link 
              onClick={()=>setmenuOpened(false)}
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              >Home
              </Link>
            </li>

            <li>
              <Link 
              onClick={()=>setmenuOpened(false)}
              to='programs'
              spy={true}
              smooth={true}
              >Programs
              </Link>
            </li>
               
            <li>
              <Link 
              onClick={()=>setmenuOpened(false)}
              to='reasons'
              spy={true}
              smooth={true}
              >Why Us
              </Link>
            </li>
            <li>
            <Link 
              onClick={()=>setmenuOpened(false)}
              to='plans'
              spy={true}
              smooth={true}
              >Plans
              </Link>
            </li>
            <li>
            <Link 
              onClick={()=>setmenuOpened(false)}
              to='testimonials'
              spy={true}
              smooth={true}
              >Testimonials
              </Link>
            </li>
        </ul>
      )}
    </div>
  )
}

export default Header