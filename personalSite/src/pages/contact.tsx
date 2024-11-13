import Navbar from '../components/Navbar'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.current){
      emailjs
      .sendForm('service_3x0lvua', 'template_5df53yj', form.current, {
        publicKey: 'vVdI0BBxD14IlPVK3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    } else {
      console.log('no current form');
    }
  }
  
  return (
    <div className='h-screen bg-[#222831] text-white py-20 px-8 flex flex-col justify-center items-center'>

      <div className='flex flex-col gap-10'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-4xl'>Contact Me</h1>
          <div className='border-[3px] border-sky-300 w-1/2 mt-1'></div>
        </div>

        <div className='flex items-center gap-2 justify-center w-full'>
          <h1 className='font-bold'>Write me a Message</h1>
          <i className='bx bxs-hand-down'></i>
        </div>
      </div>

      <form ref={form} className='flex flex-col gap-2 items-center w-4/5 mt-10' onSubmit={sendEmail}>
        
        <div className='flex flex-col w-full'>
          <label htmlFor='user_name'>Your Name</label>
          <input className='rounded-sm text-black p-2'
            type='text'
            name='user_name'
            placeholder='Name *'/>
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor='user_email'>Your Email</label>
          <input className='rounded-sm text-black p-2'
            type='text'
            name='user_email'
            placeholder='Email *'/>
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor='message'>Message</label>
          <textarea className='rounded-sm text-black p-2 w-full h-full' name='message'>
          </textarea>
        </div>
        <p className='w-full flex flex-start text-sm'>* Required</p>

        <div className='w-full mt-3'>
          <button type='submit' className='border-2 border-white w-full py-1 rounded-sm'>
            Send
          </button>
        </div>

      </form>
    </div>
  )

}

export default Contact