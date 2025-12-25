import { a } from 'framer-motion/client'
import React from 'react'


const sellers = [
    {
        middleImage: '/images/egift-logo2.svg',
        topImage: '/images/egift-logo1.svg',
        heading: '1-800-PetSupplies',
        value: 'Value €25.00 - €25.00',
        href: '',

    },
    {
        middleImage: '/images/gift-icon.svg',
        topImage: '/images/egift-logo1.svg',
        heading: 'Abbonamenti',
        value: 'Value €24.29 - €24.29',
        href: '',
    },
    {
        middleImage: '/images/egift-logo2.svg',
        topImage: '/images/egift-logo1.svg',
        heading: 'Abercrombie & Fitch',
        value: 'Value €25.00 - €25.00',
        href: '',
    }
]
function Sellers({ isDark }) {
    return (
        <div>
            <div className='max-w-360 mx-auto'>
                <div className='lg:px-30 md:px-10 px-3   sm:pt-32.25 pt-20 sellers-section'>
                    <div className='flex justify-between'>
                        <h4 className={`sans-medium text-[20px] sm:text-[28px] leading-7.5 ${isDark ? "text-white" : "text-black"}`}>Top sellers right now</h4>
                        <div className='flex gap-2.5 items-center'>
                            <span className={`sm:text-[20px] text-[15px] leading-7.5 sans-semibold ${isDark ? "text-white" : "text-black"}`}>View All</span>
                            <a href="">
                                <img src={isDark ? "/images/white-arrow.svg" : "/images/black-arrow.svg"} className='h-5.75 w-5.75' alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='grid mt-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5.25'>
                        {sellers.map((cards, index) => {
                            return (
                                <a href={cards.href} key={index} className='group '>

                                    <div className={`${isDark ? "bg-[#121030]" : "bg-[#EAE9FD]"} border border-[#FFFFFF1A] group-hover:border-[#413AE9] relative overflow-hidden rounded-[15px] min-h-69 max-w-full   w-full lg:max-w-[386.66px] h-full flex flex-col justify-between group-hover:shadow-[5px_5px_20px_0px_rgba(0,27,245,0.2)] transition-all duration-300 `}>
                                        <div className={`  relative mt-2.5 mx-2.5 rounded-[15px] ${isDark ? "bg-linear-to-r from-[#8A38F5] via-[#491E8C] to-[#04031D]" : "bg-linear-to-r from-[#D6B7FF] via-[#8A38F5] to-[#1E3A8A]"}`}>
                                            <img src={cards.middleImage} className='relative py-10.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90 z-0' alt="" />
                                        </div>
                                        <div className='flex items-end justify-between relative z-10 my-5 mx-7.5 '>
                                            <div className='space-y-1'>
                                                <h1 className={`text-[20px] leading-7.5 hanken-semibold  whitespace-nowrap ${isDark ? "text-[#9592F3]" : "text-[#1E3A8A]"}`}>{cards.heading}</h1>
                                                <p className={`sm:text-[16px] text-[12px] leading-4  sm:leading-6  sans-regular  ${isDark ? "text-[#DADADA]" : "text-[#555555]"}`}>{cards.value}</p>
                                            </div>
                                            <div>
                                                <span className='text-white text-[14px] font-normal hanken-regular leading-5 bg-linear-to-r from-[#B43AED] from-30% to-[#2239FE] to-100% shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] py-1 px-2 sm:px-3 rounded-full'>11 items</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sellers