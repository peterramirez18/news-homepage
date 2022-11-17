import React from 'react'

// import assets
import MenuIconClose from "../assets/images/icon-menu-close.svg"

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const nav = ['Home', 'New', 'Popular', 'Treding', 'Categories']

  return (
    <div className={`${menuOpen ? 'flex' : 'hidden'} `}>
      <div className='inset-0  bg-very-dark-blue opacity-70 fixed'></div>
      <div className=' bg-white dark:bg-very-dark-blue  text-very-dark-blue top-0 bottom-0 px-5 flex items-center justify-between right-0 w-[70vw] fixed'>
        <img onClick={() => setMenuOpen(!menuOpen)} className=' absolute top-5 right-5 dark:invert' src={MenuIconClose} alt="" />

        {/* nav */}
        <ul className='flex flex-col gap-y-7 text-2xl font-medium text-very-dark-blue dark:text-off-white'>
          {nav.map((item, index) => (
            <li className=' hover:text-red cursor-pointer'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu