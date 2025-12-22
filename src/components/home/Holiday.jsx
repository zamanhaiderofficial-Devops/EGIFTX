import React from 'react'
import { href } from 'react-router-dom'

const holidayCards = [
    {
        middleImage: '/images/holiday-cards-middle.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'Anacapri',
        value: 'Value €100.00 - €100.00',
        items: '1 items',
        href : '',

    },
    {
        middleImage: '/images/holiday-cards-middle.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'Anghami Plus',
        value: 'Value €5.44 - €5.98',
        items: '2 items',
        href : '',
    },
    {
        middleImage: '/images/holiday-cards-middle-apple.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'App Store & iTunes',
        value: 'Value €2.00 - €50.00',
        items: '11 items',
        href : '',
    },
    {
        middleImage: '/images/holiday-cards-middle-gift.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: "Applebee's",
        value: 'Value €25.00 - €25.00',
        items: '1 items',
        href : '',
    },
    {
        middleImage: '/images/holiday-cards-middle.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'Aramis',
        value: 'Value €50.00 - €50.00',
        items: '1 items',
        href : '',
    },
    {
        middleImage: '/images/holiday-cards-middle.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'Arezzo',
        value: 'Value €100.00 - €100.00',
        items: '1 items',
        href : '',
    },
    {
        middleImage: '/images/holiday-cards-middle-asdasvg.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'Asda',
        value: 'Value €1.00 - €1.00',
        items: '1 items',
        href : '',
    },
    {
        middleImage: '/images/holiday-cards-middle.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'ASOS',
        value: 'Value €5.00 - €5.00',
        items: '1 items',
        href : '',
    },
]
function Holiday() {
    return (
        <div>
            <div className='max-w-360 mx-auto'>
                <div className=' pt-32 sm:px-30 px-10'>
                    <div>
                        <h4 className='text-[30px] leading-7.5 hanken-medium'>Holiday specials</h4>
                    </div>
                    <div className='pt-6'>
                        <div className='grid'>
                            <div className='relative bg-linear-to-r from-[#7C3AED4D] from-30% to-[#2239FE99] to-60% bg-cover bg-center bg-no-repeat sm:max-w-300 lg:max-w-150  xl:max-w-300 rounded-3xl'>
                                <div className='absolute z-0 top-1/15'>
                                    <img src="/images/holiday-img.svg" alt="" />
                                </div>
                                <div className='flex justify-center items-center py-25 sm:py-44 relative z-10 sm:px-0 px-20'>
                                    <h2 className='sans-bold text-[30px]  sm:text-[30px] leading-10 max-w-187.5  lg:text-[48px] lg:leading-12  text-center '>Giftcards for Holiday season</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-22'>
                        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-5'>
                            {holidayCards.map((cards, index) => {
                                return (
                                    <a key={index} href={cards.href}>

                                    <div className={`bg-[#EAE9FD] relative overflow-hidden rounded-[15px] min-h-69 max-w-full   w-full lg:max-w-[386.66px] h-full flex flex-col justify-between`}>
                                              <div className='bg-linear-to-r border border-[#A1AFD6] from-[#D6B7FF] via-[#8A38F5] to-[#1E3A8A] relative mt-2.5 mx-2.5 rounded-[15px]'>
                                            <img src={cards.middleImage} className='relative py-10.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 z-0' alt="" />
                                        </div>
                                        <div className='flex items-end justify-between relative z-10 my-5 mx-7.5 '>
                                            <div className='space-y-1'>
                                                <h1 className='text-[20px] leading-7.5 hanken-semibold text-[#1E3A8A] whitespace-nowrap'>{cards.heading}</h1>
                                                <p className='sm:text-[16px] text-[12px] leading-4 sm:leading-6  sans-regular text-[#555555]'>{cards.value}</p>
                                            </div>
                                            <div>
                                            <span className='text-white text-[14px] font-normal hanken-regular leading-5 bg-linear-to-r from-[#B43AED] from-30% to-[#2239FE] to-100% shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] py-1 px-2 sm:px-3 rounded-full'>{cards.items}</span>
                                            </div>
                                        </div>
                                    </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div className='mt-8 flex justify-center items-center'>
                        <a href="">
                            <button className='text-[14px] leading-6 sans-medium flex gap-2'>See More  <img src="/images/right-small-arrow.svg" alt="" /></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Holiday