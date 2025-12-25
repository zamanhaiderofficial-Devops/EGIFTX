import React from 'react'
import { href } from 'react-router-dom'

const holidayCards = [
    {
        middleImage: '/images/holiday-cards-middle.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'Anacapri',
        value: 'Value €100.00 - €100.00',
        items: '1 items',
        href: '',

    },
    {
        middleImage: '/images/holiday-cards-middle.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'Anghami Plus',
        value: 'Value €5.44 - €5.98',
        items: '2 items',
        href: '',
    },
    {
        middleImage: '/images/holiday-cards-middle-apple.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'App Store & iTunes',
        value: 'Value €2.00 - €50.00',
        items: '11 items',
        href: '',
    },
    {
        middleImage: '/images/holiday-cards-middle-gift.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: "Applebee's",
        value: 'Value €25.00 - €25.00',
        items: '1 items',
        href: '',
    },
    {
        middleImage: '/images/holiday-cards-middle.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'Aramis',
        value: 'Value €50.00 - €50.00',
        items: '1 items',
        href: '',
    },
    {
        middleImage: '/images/holiday-cards-middle.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'Arezzo',
        value: 'Value €100.00 - €100.00',
        items: '1 items',
        href: '',
    },
    {
        middleImage: '/images/holiday-cards-middle-asdasvg.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'Asda',
        value: 'Value €1.00 - €1.00',
        items: '1 items',
        href: '',
    },
    {
        middleImage: '/images/holiday-cards-middle.svg',
        topImage: '/images/holiday-cards-top.svg',
        heading: 'ASOS',
        value: 'Value €5.00 - €5.00',
        items: '1 items',
        href: '',
    },
]
function Holiday({ isDark }) {
    return (
        <div>
            <div className='max-w-360 mx-auto'>
                <div className='sm:pt-32 pt-20 lg:px-30 md:px-10 px-3'>
                    <div>
                        <h4 className={`text-[30px] leading-7.5 hanken-medium ${isDark ? "text-white" : "text-black"}`}>Holiday specials</h4>
                    </div>
                    <div className='sm:pt-6 pt-2'>

                        <div className='sm:my-39 my-10'>
                            <div className='bg-[url("/images/holiday-section-mainCard.svg")] rounded-3xl bg-cover bg-center bg-no-repeat'>
                                <div className='py-8 sm:py-39'>
                                    <h2 className={`text-center text-[20px]  sm:text-[48px] leading-12 sans-bold  text-white `}>Giftcards for Holiday season</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sm:pt-22 pt-5'>
                        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                            {holidayCards.map((cards, index) => {
                                return (
                                    <a key={index} href={cards.href} className='group' >


                                        <div className={`${isDark ? "bg-[#121030]" : "bg-[#EAE9FD]"} border border-[#FFFFFF1A] group-hover:border-[#413AE9] relative overflow-hidden rounded-[15px] min-h-69 max-w-full   w-full lg:max-w-[386.66px] h-full flex flex-col justify-between group-hover:shadow-[5px_5px_20px_0px_rgba(0,27,245,0.2)] transition-all duration-300`}>


                                            <div className={`  relative mt-2.5 mx-2.5 rounded-[15px] ${isDark ? "bg-linear-to-r from-[#8A38F5] via-[#491E8C] to-[#04031D]" : "bg-linear-to-r from-[#D6B7FF] via-[#8A38F5] to-[#1E3A8A] border border-[#A1AFD6]"}`}>
                                                <img src={cards.middleImage} className='relative py-10.5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 z-0' alt="" />
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
                    <div className='mt-8 flex justify-center items-center'>
                        <a href="">
                            <button className={`text-[14px] leading-6 sans-medium flex gap-2 cursor-pointer bg-[#F5F5F5] py-2.5 px-6.25 rounded-full`}>See More  <img src="/images/right-small-arrow.svg" alt="" className='' /></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Holiday