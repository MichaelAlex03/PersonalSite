import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='absolute bottom-0 bg-[#222831] flex flex-col items-center justify-center p-8 drop-shadow-md w-full gap-2'>

      <div className='flex gap-2'>
        <a href="https://www.linkedin.com/in/michaelllev/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} 
          size='2xl'
          color='white'/>
        </a>
        <a href="https://github.com/MichaelAlex03" target="_blank">
          <FontAwesomeIcon icon={faGithub} 
            size='2xl'
            color='white'/>
        </a>
        <a href="mailto:michaelalex03@outlook.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} 
            size='2xl'
            color='white'/>
        </a>
      </div>

      <div>
        <p className='text-white'> Michael A Lleverino © 2024</p>
      </div>
      
    </footer>
  )
}

export default Footer