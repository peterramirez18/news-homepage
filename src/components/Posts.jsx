import React from 'react'

// import images

import Image1 from "../assets/images/image-retro-pcs.jpg"
import Image2 from "../assets/images/image-top-laptops.jpg"
import Image3 from "../assets/images/image-gaming-growth.jpg"

const Posts = () => {
    const posts = [
        {
            title: 'Reviving Retro PCs',
            subtitle: 'What happens when old PCs are given modern upgrades?',
            image: Image1
        },
        {
            title: 'Top 10 Laptops of 2022',
            subtitle: 'Our best picks for various needs and budgets.',
            image: Image2
        },
        {
            title: 'The Growth of Gaming',
            subtitle: 'How the pandemic has sparked fresh opportunities.',
            image: Image3
        },

    ]
    return (
        <div className='mx-auto container mt-10 px-5'>
            <div className=' flex flex-col gap-6 md:flex-row '>
                {posts.map((item, index) => {
                    return (
                        <div className='flex gap-x-4'>
                            <img className=' h-[120px]' src={item.image} alt="" />
                            <div className='flex flex-col gap-y-2'>
                                <span className=' font-semibold text-3xl text-grayish-blue'>0{index + 1}</span>
                                <span className=' font-bold hover:text-red cursor-pointer '>{item.title}</span>
                                <span className=' text-sm w-full text-dark-grayish-blue  '>{item.subtitle}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Posts