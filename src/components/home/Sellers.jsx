import { a } from 'framer-motion/client'
import React from 'react'


const sellers = [
    {
        middleImage: '/images/egift-logo2.svg',
        topImage: '/images/egift-logo1.svg',
        heading: '1-800-PetSupplies',
        value: 'Value €25.00 - €25.00',
        href : '',
        
    },
    {
        middleImage: '/images/gift-icon.svg',
        topImage: '/images/egift-logo1.svg',
        heading: 'Abbonamenti',
        value: 'Value €24.29 - €24.29',
        href : '',
    },
    {
        middleImage: '/images/egift-logo2.svg',
        topImage: '/images/egift-logo1.svg',
        heading: 'Abercrombie & Fitch',
        value: 'Value €25.00 - €25.00',
        href : '',
    }
]
function Sellers() {
    return (
        <div>
            <div className='max-w-360 mx-auto'>
                <div className='lg:px-30 md:px-10  px-15  pt-32.25 sellers-section'>
                    <h4 className='sans-medium text-[28px] leading-7.5'>Top sellers right now</h4>
                    <div className='grid mt-6 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5.25'>
                           {sellers.map((cards, index) => {
                                return (
                                    <a href={cards.href} key={index}>

                                    <div  className={`bg-[#EAE9FD] relative overflow-hidden rounded-[15px] min-h-69 max-w-full   w-full lg:max-w-[386.66px] h-full flex flex-col justify-between`}>
                                              <div className='bg-linear-to-r border border-[#A1AFD6] from-[#D6B7FF] via-[#8A38F5] to-[#1E3A8A] relative mt-2.5 mx-2.5 rounded-[15px]'>
                                            <img src={cards.middleImage} className='relative py-10.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 z-0' alt="" />
                                        </div>
                                        <div className='flex items-end justify-between relative z-10 my-5 mx-7.5 '>
                                            <div className='space-y-1'>
                                                <h1 className='text-[20px] leading-7.5 hanken-semibold text-[#1E3A8A] whitespace-nowrap'>{cards.heading}</h1>
                                                <p className='sm:text-[16px] text-[12px] leading-4  sm:leading-6  sans-regular text-[#555555]'>{cards.value}</p>
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