import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='absolute bottom-0 bg-[#222831] flex flex-col items-center justify-center p-8 drop-shadow-md w-full gap-2'>

      <div className='flex gap-2'>
        <a href="https://www.linkedin.com/in/michaelllev/">
          <FontAwesomeIcon icon={faLinkedin} 
          size='2xl'
          color='white'/>
        </a>
        <a href="https://github.com/MichaelAlex03">
          <FontAwesomeIcon icon={faGithub} 
            size='2xl'
            color='white'/>
        </a>
        <a href="mailto:michaelalex03@outlook.com">
          <FontAwesomeIcon icon={faEnvelope} 
            size='2xl'
            color='white'/>
        </a>
      </div>

      <div>
        <p className='text-white'> Michael Lleverino © 2024</p>
      </div>
      
    </footer>
  )
}

export default Footer