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
    <div className='max-w-[1150px] mx-auto flex justify-between mt-[90px] px-5'>
      {/* logo */}
      <img src={Logo} alt="logo" />

      {/* nav */}
      <ul className='hidden md:flex items-center gap-x-[41px]'>
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