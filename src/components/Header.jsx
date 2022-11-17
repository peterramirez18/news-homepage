import React from 'react'
import { useState } from 'react'

// import assets
import Logo from "../assets/images/logo.svg"
import MenuIcon from "../assets/images/icon-menu.svg"

// import components
import MobileMenu from "../components/MobileMenu"

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const nav = ['Home', 'New', 'Popular', 'Treding', 'Categories']
  return (
    <div className='container mx-auto flex justify-between mt-6 px-5'>
      {/* logo */}
      <span>
        <img src={Logo} alt="logo" />
      </span>

      {/* nav */}
      <ul className=' hidden md:flex items-center gap-x-7'>
        {nav.map((item, index) => (
          <li className=' hover:text-red cursor-pointer'>{item}</li>
        ))}
      </ul>

      {/* icon*/}
      <div onClick={() => setMenuOpen(!menuOpen)} className="flex md:hidden items-center justify-center cursor-pointer">
        <img src={MenuIcon} alt="" />
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}

export default Header