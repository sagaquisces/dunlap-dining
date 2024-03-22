import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const menuItems = (ulClassName) => (
    <ul className={ulClassName}>
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  )

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      {menuItems("app__navbar-links")}
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            {menuItems("app__navbar-smallscreen_links")}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar