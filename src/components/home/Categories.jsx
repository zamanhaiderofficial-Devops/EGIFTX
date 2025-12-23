import { div } from 'framer-motion/client'
import React from 'react'

const categories = [
  {
    image: '/images/gift-card.svg',
    title: 'Gift Cards',

    imageClass: 'w-[204.36px] h-[120.52px]',
    padding: 'pt-[29.48px] px-[52.82px]',
    contentMargin: 'mt-[30px]',
  },
  {
    image: '/images/gamescard.svg',
    title: 'Games',

    imageClass: 'w-[226px] h-[110.08px]',
    padding: 'pt-[34.7px] px-[42px]',
    contentMargin: 'mt-[35.22px]',
  },
  {
    image: '/images/crypto-card.svg',
    title: 'Crypto',

    imageClass: 'w-[263px] h-[91.15px]',
    padding: 'pt-[44.16px] px-[23.5px]',
    contentMargin: 'mt-[44.69px]',
  },
  {
    image: '/images/software-card.svg',
    title: 'Software & Apps',

    imageClass: 'w-[167.37px] h-[142.97px]',
    padding: 'pt-[21.03px] px-[71px]',
    contentMargin: 'mt-[16px]',
  },
  {
    image: '/images/travel-card.svg',
    title: 'Travel',

    imageClass: 'w-[228px] h-[110.02px]',
    padding: 'pt-[34.37px] px-[41px]',
    contentMargin: 'mt-[35.25px]',
  },
  {
    image: '/images/payment-card.svg',
    title: 'Payment Cards',

    imageClass: 'w-[228px] h-[110.29px]',
    padding: 'pt-[34.59px] px-[41px]',
    contentMargin: 'mt-[35.12px]',
  },
]
function Categories({isDark}) {
  return (
    <div>
      <div className='max-w-360 mx-auto'>
        <div className='flex items-start sm:p-25 gap-12.25 xl:flex-row flex-col overflow-hidden category-section'>
          <h2 className={`text-[48px] leading-12 sans-bold ${isDark ? "text-white" : "text-black"}`}>Categories</h2>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 w-full'>
            {categories.map((category, index) => {
              return (
                <div key={index} className='group'>

                <div  className={`w-full relative z-20   rounded-[20px] overflow-hidden ${isDark ? "bg-[#09063A] group-hover:bg-[#0D0A57] transition-colors duration-300"  : "bg-[#F5F5F5]"}  `}>


                  <div className={`absolute opacity-0 inset-0 overflow-hidden  hover:cursor-pointer z-10 rounded-[20px]  transition-all duration-700 pointer-events-none bg-linear-to-br from-[#B43AED] from-0% via-[#6628A5] via-25% to-[#0B1353] to-100%  ease-[cubic-bezier(0.16,1,0.3,1)] ${isDark ? "" : "group-hover:opacity-100"}`}></div>
                  <div className='relative z-30'>

                    <div className={`flex justify-center relative 
      ${category.padding} sm:justify-start`}>
                      <img src={category.image} alt="" className={`${category.imageClass} transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-110`} />
                    </div>
                    <div className={category.contentMargin}>
                       <div className={`${isDark ? "bg-[#0D0A57] group-hover:bg-[#09063A]" : ""}`}>

                      <div className={`w-full border-t  group-hover:border-[#413AE9] ${isDark ? "border-[#413AE9]" : "border-[#DADADA]"}`} />
                      <div className={`py-3.75 flex justify-between items-center  `}>

                        <h3 className={`text-[22px] leading-7.5 sans-medium pl-5 group-hover:text-white ${isDark ? "text-white" : "text-black"}`}>
                          {category.title}
                        </h3>
                        <div className="w-6.75 h-6.75 mr-[16.5px] relative">
                          {isDark ? (
                            <img src="/images/white-arrow.svg" alt="" className="absolute block" />
                          ) : (
                            <>
                              <img
                                src="/images/black-arrow.svg"
                                alt=""
                                className="absolute group-hover:hidden block"
                              />
                              <img
                                src="/images/white-arrow.svg"
                                alt=""
                                className="absolute group-hover:block hidden"
                              />
                            </>
                          )}
                        </div>

                      </div>
                       </div>
                    </div>
                  </div>
                </div>
                </div>
              );
            })}


          </div>
        </div>

      </div>

    </div>
  )
}

export default Categories