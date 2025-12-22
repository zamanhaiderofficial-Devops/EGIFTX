import React from 'react'

function Dummycode() {
  return (
    <div>
        {/* ........sellers section old code ........... */}
         {sellers.map((sellers, index) => {
                            return (
                                <div key={index} className={`bg-[#EAE9FD] relative overflow-hidden rounded-3xl min-h-54.25 w-full md:max-w-96.5 h-full p-6 flex flex-col justify-between`}>

                                    <div className='flex items-end justify-end'>
                                        <img src={sellers.topImage} alt="" />
                                    </div>
                                    <div className='relative w-full h-full'>
                                        <img
                                            src={sellers.middleImage}
                                            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 z-0'
                                            alt=""
                                        />
                                    </div>


                                    <div className='flex items-end justify-between relative z-10'>
                                        <div className='space-y-1'>
                                            <h1 className='text-[22px] leading-7.5 sans-medium text-[#FAFAFA] whitespace-nowrap'>{sellers.heading}</h1>
                                            <p className='text-[16px] leading-6 font-normal sans-regular text-[#DADADA]'>{sellers.value}</p>
                                        </div>
                                        <div>
                                            <span className='text-black text-[14px] font-normal hanken-regular leading-5 bg-[#FFE4E4] py-1 px-3 rounded-full'>1 items</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {/* ..........Holiday section code........ */}
                         {holidayCards.map((cards,index) => {
                            return(
                                 <div key={index} className={`bg-[#F8F8FF] relative overflow-hidden rounded-3xl min-h-[217.5px] max-w-full   w-full lg:max-w-[386.66px] h-full p-6 flex flex-col justify-between`}>

                            <div className='flex items-end justify-end'>
                                 <img src={cards.topImage} alt="" />
                            </div>

                            <div>
                                <img src={cards.middleImage} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 z-0' alt="" />
                            </div>

                            <div className='flex items-end justify-between relative z-10'>
                                <div className='space-y-1'>
                                <h1 className='text-[20px] leading-7.5 hanken-semibold text-[#413AE9] whitespace-nowrap'>{cards.heading}</h1>
                                    <p className='text-[16px] leading-6  sans-regular text-[#555555]'>{cards.value}</p>
                                </div>
                                <div>
                                    <span className='text-black text-[14px] font-normal hanken-regular leading-5 bg-[#FFFFFF] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] py-1 px-3 rounded-full'>{cards.items}</span>
                                </div>
                            </div>
                        </div>
                            )
                        })}
    </div>
  )
}

export default Dummycode