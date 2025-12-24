import React, { useState, useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch";

export default function Hero({ isDark, setIsDark }) {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }


    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: 'Entertainment', Link: '' },
    { name: 'Gaming', Link: '' },
    { name: 'Shopping', Link: '' },
    { name: 'Travel', Link: '' },
  ]
  return (
    <div>
      <section className=''>
        <div className={`relative bg-cover bg-no-repeat bg-center rounded-bl-4xl rounded-br-4xl ${isDark ?
            'bg-[url("/images/dark-hero-img.png")]'
            :
            'bg-[url("/images/hero-img.png")]'
          }`}>
          <div className='max-w-360 mx-auto'>
            {/* Sticky header on scroll */}
            <div className={`fixed top-0 right-0 pb-4 left-0 z-40 bg-linear-to-r from-[#504af1] via-[#855ed1] to-[#f1afe4] rounded-bl-2xl rounded-br-2xl transition-all duration-300 ${scroll ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
              }`}>

              <header className='flex items-center pt-7.5 justify-between px-9 sm:justify-around'>
                <div>
                  <img src="/images/logo.svg" alt="" />
                </div>
                {toggle ? (
                  <IoClose
                    onClick={() => setToggle(!toggle)}
                    className="text-white text-2xl cursor-pointer flex md:hidden  "
                  />
                ) : (
                  <AiOutlineMenu
                    onClick={() => setToggle(!toggle)}
                    className="text-white text-2xl cursor-pointer md:hidden flex  "
                  />
                )}

                {/* ....ul... */}
                <nav className='md:flex gap-4 hidden'>
                  {navLinks.map((link, index) => (
                    <Link key={index} to={link.Link} className='text-white sans-regular cursor-pointer'>
                      {link.name}
                    </Link>

                  ))}

                </nav>

                {/* Desktop buttons */}
                <div className='hidden sm:flex gap-5'>
                  <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
                  <div className='bg-[#0D0A57] rounded-[170px] px-6 py-2.25 items-center'>
                    <button className='text-white text-[16px] leading-6 sans-regular'>Log in</button>
                  </div>
                  <div className='bg-linear-to-r from-[#B43AED] to-[#100F0F] rounded-[300px] py-[12.25px] px-[13.13px] flex items-center justify-center'>
                    <button className=''>
                      <img src="/images/bucket-icon.svg" alt="Cart" className='h-5.25 w-5.25' />
                    </button>
                  </div>
                </div>

              </header>
            </div>

            {/* Original header - always visible at top */}
            <header className='flex items-center pt-7.5 sm:justify-around justify-between px-9'>
              <div>
                <img src="/images/logo.svg" alt="" />
              </div>
        
                <AiOutlineMenu
                  onClick={() => setToggle(!toggle)}
                  className="text-white text-2xl cursor-pointer md:hidden flex  "
                />
          

              {/* ....ul... */}
              <nav className='md:flex gap-4 hidden'>
                {navLinks.map((link, index) => (
                  <Link key={index} to={link.Link} className='text-white sans-regular cursor-pointer'>
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Desktop buttons */}
              <div className='hidden sm:flex gap-5'>
                <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
                <div className='bg-[#0D0A57] rounded-[170px] px-6 py-2.25 items-center'>
                  <button className='text-white text-[16px] leading-6 sans-regular'>Log in</button>
                </div>
                <div className='bg-linear-to-r from-[#B43AED] to-[#100F0F] rounded-[300px] py-[12.25px] px-[13.13px] flex items-center justify-center'>
                  <button className=''>
                    <img src="/images/bucket-icon.svg" alt="Cart" className='h-5.25 w-5.25' />
                  </button>
                </div>
              </div>
            </header>

            {/* ..........Responsive Part of header...... */}

            <>
              {/* Click detector - invisible overlay */}
              {toggle && (
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setToggle(false)}
                />
              )}

              {/* Sidebar */}
              <div className={`fixed z-50 w-3/4 md:w-2/3 lg:w-1/2 bg-[#8561f1] h-screen top-0 text-white
    transition-transform duration-500 ease-in-out rounded-tl-xl
    ${toggle ? "translate-x-0" : "translate-x-full"}`}
                style={{ right: 0 }}>

                <nav className="flex flex-col items-start pl-8 mt-5">
                  {
                    navLinks.map((link, index) => (
                      <Link
                        key={link.index}
                        to={link.Link}
                        className='text-xl mt-5 cursor-pointer hover:text-gray-200'
                        onClick={() => setToggle(false)}
                      >
                        {link.name}
                      </Link>
                    ))
                  }
                </nav>

              </div>
            </>

            {/* ...........Hero........section....... */}
            <div>
              <div className='sm:mt-25 md:mt-35.5 mt-13   ml-10 sm:pl-15 md:pl-25 flex flex-col pb-45.25 sm:mr-0 mr-2'>
                <h5 className='md:leading-18.5 leading-15 text-[50px] md:text-[74px] text-white max-w-3xl sans-medium '>
                  Access your favourite
                  brands with us
                </h5>
                <p className='mt-6 text-[20px] leading-7.5 text-white max-w-3xl sans-semibold'>The smoothest way of paying everywhere.</p>
                <div className='bg-white rounded-[117px] py-4 max-w-75  sm:max-w-115 mt-6'>
                  <div className='pl-6 flex items-center gap-6'>
                    <img src="/images/search-icon.svg" alt="search" className='w-[21.36px] h-6' />
                    <input type="text" placeholder='Search brands' className='placeholder-[#4A5565] placeholder:text-[16px] placeholder:leading-6 focus:outline-none sans-regular' />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed bottom bar for mobile -  OUTSIDE THE SECTION */}
      <div className='sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-linear-to-r from-[#504af1] via-[#855ed1] to-[#f1afe4] rounded-tl-3xl rounded-tr-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.15)]'>
        <div className='flex items-center justify-around px-4 py-4 gap-3'>
          <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
          <div className='bg-[#0D0A57] rounded-[170px] px-4 py-2.25 flex items-center'>
            <button className='text-white text-[14px] leading-6 sans-regular whitespace-nowrap'>Log in</button>
          </div>
          <div className='bg-linear-to-r from-[#B43AED] to-[#100F0F] rounded-full p-3 flex items-center justify-center'>
            <button className=''>
              <img src="/images/bucket-icon.svg" alt="Cart" className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}