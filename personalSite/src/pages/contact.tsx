
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


interface FormData{
  user_name: string,
  user_email: string,
  message: string
}

const Contact = () => {

  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: ""
  })

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name]: value,
        };
      })
}

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.current){
      emailjs
      .sendForm('service_3x0lvua', 'template_5df53yj', form.current, {
        publicKey: 'vVdI0BBxD14IlPVK3',
      })
      .then(
        () => {
          setFormData({
            user_name:"",
            user_email:"",
            message:""
          });
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
    <div className='min-h-screen bg-[#222831] text-white py-20 md:py-32 px-8 flex flex-col items-center gap-4'>

      <div className='flex flex-col gap-5 items-center w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl lg:text-6xl font-bold'>Contact Me</h1>
          <div className='border-[3px] lg:border-[4px] border-sky-300 w-1/3 mt-1'></div>
        </div>

        <div className='flex items-center gap-2 justify-center w-full'>
          <h1 className='font-bold text-center text-sm md:text-base lg:text-lg'>Want to collaborate? Write me a message <i className='bx bxs-hand-down md:flex justify-center md:mt-2'></i></h1>
        </div>
      </div>

      <form ref={form} className='flex flex-col gap-2 items-center w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3' onSubmit={sendEmail}>
        
        <div className='flex flex-col w-full'>
          <label htmlFor='user_name' className='text-sm md:text-base lg:text-lg mb-1'>Your Name</label>
          <input className='rounded-sm text-black p-2'
            type='text'
            name='user_name'
            placeholder='Name*'
            value={formData.user_name}
            onChange={handleChange}
            required/>
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor='user_email' className='text-sm md:text-base lg:text-lg mb-1'>Your Email</label>
          <input className='rounded-sm text-black p-2'
            type='text'
            name='user_email'
            placeholder='Email*'
            value={formData.user_email}
            onChange={handleChange}
            required/>
        </div>

        <div className='flex flex-col w-full'>
          <label htmlFor='message' className='text-sm md:text-base lg:text-lg mb-1'>Message</label>
          <textarea className='rounded-sm text-black p-2 w-full h-full' 
          name='message' 
          placeholder='Message*'
          value={formData.message}
          onChange={handleChange}
          required>
          </textarea>
        </div>
        <p className='w-full flex flex-start text-sm md:text-base lg:text-lg mb-1'>* Required</p>

        <div className='z-10 w-full mt-3 flex justify-center'>
          <button type='submit' className='button_sub w-full md:w-1/2 xl:w-1/2 py-1 rounded-sm'>
            Send
          </button>
        </div>
      </form>
    </div>
  )

}

export default Contact