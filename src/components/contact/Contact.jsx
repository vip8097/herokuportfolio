import React, { useState,useEffect }  from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';

const Contact = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_ipyai7w', 'template_exp0sdg', values, 'EqdQQxB4rHNvdTVaf')
      .then((response ) => {
        console.log('SUCCESS!', response);
        setValues({
          name: '',
          email: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  useEffect(() => {
    if(status === 'SUCCESS') {
      if (status ){
        toast.success("Thank you...",{
         position:"top-center",
         theme: "colored"})
     }
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);



const handleChange = (e) => {
  setValues(values => ({
    ...values,
    [e.target.name]: e.target.value
  }))
}
  return (
    <>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
              <MdOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>vipinp36@gmail.com</h5>
              <a href="mailto:vipinp36@gmial.com" target="_blank">Send Message</a>
            </article>

            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Facebook</h5>
              <a href="https://www.facebook.com/" target="_blank">Send Message</a>
            </article>

            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+91 8097392463</h5>
              <a href="https://api.whatsapp.com/send?phone+918097392463" target="_blank">Send Message</a>
            </article>

          </div>
          {/* END OF CONTACT OPTIONS */}
         
          <form  onSubmit={handleSubmit}>
            <input type="text" value={values.name}  onChange={handleChange} name='name'   placeholder='Your Full Name' required/>
            <input type="email" value={values.email}  onChange={handleChange} name="email"   placeholder='Your Email' required />
            <textarea value={values.message} onChange={handleChange} name="message" rows="7"  placeholder='Your Message' required></textarea>
           
            <button type='submit' className='btn btn-primary'>Send Message </button>
           
          </form>
        </div>
      </section>
      <ToastContainer />
   
    </>

  )
}

export default Contact