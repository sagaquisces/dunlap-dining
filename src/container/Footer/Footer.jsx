import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { images } from '../../constants'
import { FooterOverlay, Newsletter } from '../../components'
import './Footer.css'

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">1025 W. Granville St., Palmer, AK, USA 99645</p>
        <p className="p__opensans">(206)484-2867</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer logo" />
        <p className="p__opensans">We found ourselves in service to others.</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: '15px'}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday to Friday</p>
        <p className="p__opensans">8a to 12a</p>
        <p className="p__opensans">Saturday and Sunday</p>
        <p className="p__opensans">7a to 11p</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2024 Dunlap Gericht. All Rights Reserved</p>
    </div>
  </div>
)

export default Footer