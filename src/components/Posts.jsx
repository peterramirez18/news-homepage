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
        <div className='mx-auto max-w-[1150px] mt-[69px] px-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>
                {posts.map((item, index) => {
                    return (
                        <div className='flex gap-x-6'>
                            <img className=' h-[127px]' src={item.image} alt="" />
                            <div className='flex flex-col gap-y-2'>
                                <span className=' font-semibold text-3xl text-grayish-blue'>0{index + 1}</span>
                                <span className=' font-extrabold hover:text-red cursor-pointer text-lg '>{item.title}</span>
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