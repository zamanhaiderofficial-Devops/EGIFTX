import React from 'react'

function Footer() {
    return (
        <div>
            <div className='bg-[#09063A] rounded-tr-4xl rounded-tl-4xl'>
                <div className='mx-auto max-w-360'>
                    <div className='mt-20 flex px-10 sm:px-15 md:px-40 justify-between footer-section'>
                        <div className='pt-20'>
                            <h5 className='text-[30px] leading-7.5 hanken-medium text-[#CECECE]'>Join our Newsletter</h5>
                            <div className="mt-4 inline-flex rounded-full p-px bg-linear-to-r from-[#B43AED] to-[#2239FE]">
                                <button className="text-[14px] leading-5 text-[#CECECE] px-4 py-2.5 flex items-center justify-center gap-2 rounded-full bg-[#09063A] hanken-medium">
                                    Email address
                                    <img src="/images/right-small-arrow-white.svg" alt="" />
                                </button>
                            </div>

                            <div className='mt-12 flex flex-col gap-1'>
                                <span className='text-[30px] leading-7.5 hanken-medium text-[#CECECE]'>Giftcards</span>
                                <span className='text-[30px] leading-7.5 hanken-medium text-[#CECECE]'>Terms & Conditions</span>
                                <span className='text-[30px] leading-7.5 hanken-medium text-[#CECECE]'>Privacy & Policy</span>

                            </div>
                        </div>
                        <div className='pt-20'>
                            <div className='flex flex-col text-[#7D7D7D]'>
                                <img src="/images/footer-logo.svg" alt="" className='w-33.5 h-9.25' />
                                <p className='max-w-70 mt-4 hanken-regular'>We are building the next generation of
                                    gitfting in order to enhance sharing and
                                    caring for humans of the world.</p>
                                <h2 className='hanken-semibold text-[16px] leading-6 pt-2'>
                                    Company Information
                                </h2>
                                <p className='max-w-75 text-[16px] leading-6 hanken-regular'> egiftx is operated by Veritas Studios
                                    Limited Company number: 762738 The
                                    Green, Dublin Airport Central, Dublin
                                    Airport, Swords, Co. Dublin K67 E2H3,
                                    Ireland.</p>

                                <h5 className='text-[16px] leading-6 hanken-semibold pt-2'>Contact Us</h5>
                                <p className='hanken-regular text-[16px] leading-6'>contact@egiftx.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-20 flex justify-center flex-col items-center'>
                        <div className='flex gap-6'>
                            <img src="/images/visa-payment.svg" alt="" />
                            <img src="/images/mastercard-payment.svg" alt="" />
                        </div>
                        <span className='hanken-regular text-[16px] leading-6 text-[#7D7D7D] mt-4 mb-6'>© 2025 egiftx. All rights reserved</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer