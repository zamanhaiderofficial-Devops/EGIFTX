import React from 'react'

function LastCard() {
    return (
        <div className='max-w-360 mx-auto'>
            <div className='my-32 px-4 sm:px-6 lg:px-30'>
                <div className='bg-[url("/images/last-gift-card.svg")] rounded-3xl bg-cover bg-center bg-no-repeat'>
                    <div className='flex flex-col py-8 sm:py-33.75 px-4 sm:px-8 lg:px-12'>


                        <h3 className='sans-bold text-[28px] sm:text-[36px] lg:text-[48px] leading-8 sm:leading-10 lg:leading-12 text-center sm:text-left'>
                            Get the Y2Y giftcard
                        </h3>


                        <div className='pt-4 sm:pt-6'>
                            <button className='px-6 sm:px-8 py-2 sm:py-3 text-white sans-semibold text-[16px] sm:text-[20px] leading-6 sm:leading-7.5 flex justify-center items-center rounded-full bg-[#413AE9] mx-auto sm:mx-0'>
                                Get it now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default LastCard