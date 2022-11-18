import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'  //for emails to be sent on give email
const Join = () => {

  const form =useRef()  // the form in  join right sec is used as refrnce
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_he4s1wd', 'template_zledr08', form.current, 'TmOy7BL1rk78BD6f1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='join' id='join'>
        <div className='join-left'>
            <hr />
           <div>
            <span className='transparent_text'>Ready To </span>
            <span>Level UP</span>
           </div>

           <div>
            <span>YOUR BODY </span>
            <span className='transparent_text'>With US?</span>
           </div>
        </div>



        <div className="join-right">
            <form ref={form} action="" className='email-div' onSubmit={sendEmail}>
              <input type="email" name='user_email' placeholder='Enter your email' />
              <button className='btn'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join