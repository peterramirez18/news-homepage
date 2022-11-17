import { React, useState } from 'react'

// import assets
import Logo from "../assets/images/logo.svg"
import MenuIcon from "../assets/images/icon-menu.svg"

// import components
import MobileMenu from "../components/MobileMenu"
import ToggleDark from './ToggleDark'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const nav = ['Home', 'New', 'Popular', 'Treding', 'Categories']
  return (
    <div className='max-w-[1150px] mx-auto flex justify-between pt-[90px] px-5'>
      {/* logo */}
      <img className=' dark:invert' src={Logo} alt="logo" />

      <div className='flex items-center gap-x-6'>
        {/* nav */}
        <ul className='hidden md:flex items-center gap-x-[41px]'>
          {nav.map((item, index) => (
            <li className=' hover:text-red cursor-pointer'>{item}</li>
          ))}
        </ul>

        {/* toggle dark */}
        <ToggleDark />

        {/* icon*/}
        <div onClick={() => setMenuOpen(!menuOpen)} className="flex md:hidden items-center justify-center cursor-pointer">
          <img className=' dark:invert' src={MenuIcon} alt="" />
        </div>

        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  )
}

export default Header