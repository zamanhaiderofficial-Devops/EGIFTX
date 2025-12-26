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
          'bg-[url("/images/mobile-hero-dark.svg")] sm:bg-[url("/images/dark-hero-img.png")]'
          :
          'bg-[url("/images/mobile-hero-light.svg")] sm:bg-[url("/images/hero-img.png")]'
          }`}>
          <div className='max-w-360 mx-auto'>
            {/* Sticky header on scroll */}
            <div className={`fixed top-0 right-0 pb-1 left-0 z-40 bg-linear-to-r from-[#504af1] via-[#855ed1] to-[#f1afe4] rounded-bl-2xl rounded-br-2xl transition-all duration-300   ${scroll ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
              }`}>

              <header className='max-w-360 mx-auto'>
                <div className='flex items-center mt-3 justify-between px-4 md:px-10 lg:px-30 '>

                  <div className='sm:w-[136.4px] sm:h-[41.3px] w-[89.7px] h-[27.3px]'>
                    <img src="/images/logo.svg" alt="" />
                  </div>



                  {/* ....ul... */}
                  <nav className='lg:flex gap-4 hidden'>
                    {navLinks.map((link, index) => (
                      <Link key={index} to={link.Link} className='text-white sans-regular cursor-pointer'>
                        {link.name}
                      </Link>

                    ))}

                  </nav>

                  {/* Desktop buttons */}
                  <div className='flex gap-5'>
                    <div className='hidden lg:flex gap-2'>
                      <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
                      <div className='bg-[#0D0A57] rounded-[170px] px-6 py-2.25 items-center'>
                        <button className='text-white text-[16px] leading-6 sans-regular'>Log in</button>
                      </div>
                    </div>
                    <div className='flex gap-2 items-center'>

                      <div className='bg-linear-to-r from-[#B43AED] to-[#100F0F] rounded-[300px] py-[12.25px] px-[13.13px] flex items-center justify-center'>
                        <button className=''>
                          <img src="/images/bucket-icon.svg" alt="Cart" className='h-5.25 w-5.25' />
                        </button>
                      </div>
                      <AiOutlineMenu
                        onClick={() => setToggle(!toggle)}
                        className="text-white text-2xl cursor-pointer lg:hidden flex" />

                    </div>
                  </div>
                </div>

              </header>
            </div>

            {/* Original header - always visible at top */}
            <header className='flex items-center sm:pt-7.5 pt-4  justify-between lg:px-30 md:px-10 px-4'>
              <div className='sm:w-[136.4px] sm:h-[41.3px] w-[89.7px] h-[27.3px]'>
                <img src="/images/logo.svg" alt="" />
              </div>



              {/* ....ul... */}
              <nav className='lg:flex gap-4 hidden'>
                {navLinks.map((link, index) => (
                  <Link key={index} to={link.Link} className='text-white sans-regular cursor-pointer'>
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Desktop buttons */}
              <div className='flex gap-5'>
                <div className='hidden lg:flex gap-2'>
                  <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
                  <div className='bg-[#0D0A57] rounded-[170px] px-6 py-2.25 items-center'>
                    <button className='text-white text-[16px] leading-6 sans-regular'>Log in</button>
                  </div>
                </div>
                <div className='flex gap-2 items-center'>

                  <div className='bg-linear-to-r from-[#B43AED] to-[#100F0F] rounded-[300px] py-[12.25px] px-[13.13px] flex items-center justify-center'>
                    <button className=''>
                      <img src="/images/bucket-icon.svg" alt="Cart" className='h-5.25 w-5.25' />
                    </button>
                  </div>
                  <AiOutlineMenu
                    onClick={() => setToggle(!toggle)}
                    className="text-white text-2xl cursor-pointer lg:hidden flex" />

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
              <div className={`fixed z-50 w-78.75  ${isDark ? "bg-[#110D74]" : "bg-[#413AE9]"} h-screen top-0 text-white
                      transition-transform duration-500 ease-in-out rounded-tl-xl
                      ${toggle ? "translate-x-0" : "translate-x-full"}`}
                style={{ right: 0 }}>
                <div>
                  <div className='flex mt-9.75 items-center justify-center gap-2.5'>
                    <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
                    <div className='bg-[#0D0A57] rounded-[170px] px-6 py-2.25 items-center'>
                      <button className='text-white text-[16px] leading-6 sans-regular'>Log in</button>
                    </div>
                    <IoClose
                      onClick={() => setToggle(!toggle)}
                      className="text-white h-10 w-10 cursor-pointer flex lg:hidden  "
                    />

                  </div>
                  <div className='border-t border-[#807CF0] mt-6.25'></div>
                  <nav className="flex flex-col    mt-8.75">
                    {
                      navLinks.map((link, index) => (
                        <Link
                          key={index}
                          to={link.Link}
                          className='text-xl mt-2.5 cursor-pointer hover:text-gray-200 text-left pl-12  sans-semibold w-48'

                        >
                          {link.name}
                        </Link>
                      ))
                    }
                  </nav>
                </div>

              </div>
            </>

            {/* ...........Hero........section....... */}
            <div>
              <div className='sm:mt-20 md:mt-35.5 mt-17 pl-4    md:pl-11 lg:pl-30 flex flex-col  pb-45.25'>
                <h5 className='md:leading-18.5  text-[34px] leading-12  sm:text-[50px] md:text-[74px] text-white max-w-87.5   sm:max-w-3xl sans-medium '>
                  Access your favourite
                  brands with us
                </h5>
                <p className='sm:mt-6 mt-3 text-[15px] sm:ml-0  sm:text-[20px] leading-7.5 text-white max-w-3xl sans-semibold'>The smoothest way of paying everywhere.</p>
                <div className='bg-white rounded-[117px] py-4 max-w-88  sm:max-w-115 mt-6 sm:mr-0 mr-2'>
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


    </div>
  )
}