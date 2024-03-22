import React from 'react'

import { SubHeading, MenuItem } from '../../components'
import { data, images } from '../../constants'

import './Menu.css'

const Menu = () => (
  <div className="app__menu flex__center section__padding" id="menu">
    <div className="app__menu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__menu-menu">
      <div className="app__menu-menu_wine flex__center">
        <p className="app__menu-menu_heading">Wine & Beer</p>
        <div className="app__menu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem 
              key={wine.title + index} 
              title={wine.title}
              price={wine.price}
              tags={wine.tags} 
            />
          ))}
        </div>
      </div>
       
      <div className="app__menu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__menu-menu_cocktails flex__center">
        <p className="app__menu-menu_heading">Cocktails</p>
        <div className="app__menu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem 
              key={cocktail.title + index} 
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags} 
            />
          ))}
        </div>
      </div>
    </div>
      <button type="button" className="custom__button">View More</button>
    <div style={{ marginTop: '15px' }}>

    </div>
  </div>
)

export default Menu