import React from 'react'

// import assets
import MenuIconClose from "../assets/images/icon-menu-close.svg"

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const nav = ['Home', 'New', 'Popular', 'Treding', 'Categories']

  return (
    <div className={`${menuOpen ? 'flex' : 'hidden'} `}>
      <div className='inset-0 absolute bg-very-dark-blue opacity-70'></div>
      <div className=' bg-white text-very-dark-blue top-0 bottom-0 px-5 flex items-center justify-between right-0 w-[70vw] absolute'>
        <img onClick={() => setMenuOpen(!menuOpen)} className=' absolute top-5 right-5' src={MenuIconClose} alt="" />

        {/* nav */}
        <ul className='flex flex-col gap-y-7 text-2xl font-medium text-very-dark-blue'>
          {nav.map((item, index) => (
            <li className=' hover:text-red cursor-pointer'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu