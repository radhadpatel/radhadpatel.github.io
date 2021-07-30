import React from 'react';
import './footer.css';
// import {
//   faFacebook,
//   faInstagram,
//   faGithub,
//   faLinkedin
// } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className='social-links'>
        <a href='https://github.com/radhadpatel'
          target='_blank'
          rel="noopenner noreferrer"
          aria-label='GitHub'
          className='github'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.linkedin.com/in/radha-patel-881323179'
          target='_blank'
          rel="noopenner noreferrer"
          aria-label='LinkedIn'
          className='linkedin'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href='https://www.facebook.com/profile.php?id=100004242016207'
          target='_blank'
          rel="noopenner noreferrer"
          aria-label='Facebook'
          className='facebook'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href='https://www.instagram.com/radhadpatel22/?hl=en'
          target='_blank'
          rel="noopenner noreferrer"
          aria-label='Instagram'
          className='instagram'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </>
  )
}

export default Footer;
