import React from 'react'

// import assets
import Portada from "../assets/images/image-web-3-desktop.jpg"
import PortadaMovil from "../assets/images/image-web-3-mobile.jpg"

const Main = () => {
  const news = [
    {
      title: 'Hydrogen VS Electric Cars',
      subtitle: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
      title: 'The Downsides of AI Artistry',
      subtitle: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
      title: 'Is VC Funding Drying Up?',
      subtitle: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    },

  ]
  return (
    <div className='mx-auto container mt-8 px-5'>
      <div className='flex flex-col md:flex-row gap-x-5 '>
        {/* left */}
        <div className='flex flex-col'>
          <img className='object-cover hidden md:flex ' src={Portada} alt="portada " />
          <img className='object-cover flex md:hidden ' src={PortadaMovil} alt="portada " />
          <div className='grid grid-cols-1 md:grid-cols-2 mt-8'>
            <h1 className=' font-black w-[11ch] md:w-[8ch] text-3xl md:text-5xl text-very-dark-blue'>The Bright Future of Web 3.0?</h1>
            <div>
              <p className=' text-sm md:text-base mt-4 md:mt-0'>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className=' mt-5 bg-red hover:bg-very-dark-blue text-sm tracking-widest px-6 p-3 text-white'>READ MORE</button>
            </div>
          </div>
        </div>


        {/* right */}
        <div className=' bg-very-dark-blue text-white w-full  md:w-[900px] p-6 mt-12 md:mt-0'>
          <h2 className='text-orange text-3xl font-bold'>New</h2>
          <div className='flex flex-col divide-y divide-dark-grayish-blue'>
            {news.map((item, index) => {
              return (
                <div className=' py-6 last:pb-0 flex flex-col gap-y-2'>
                  <span className=' font-bold'>{item.title}</span>
                  <p className='text-sm text-grayish-blue'>{item.subtitle}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main