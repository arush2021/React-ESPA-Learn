import React from 'react';
import logo from '../images/1.png'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      
   
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
             <img width="270" src={logo} alt="logg"/>
              <i className='fa fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>Espa Learn  © 2020</small>
        
        </div>
      </section>
    </div>
  );
}

export default Footer;
