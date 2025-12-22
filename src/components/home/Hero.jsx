import React, { useState,useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Hero() {
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
      setScroll(window.scrollY > 50);
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
        <div className='bg-[url("/images/hero-img.png")] relative bg-cover bg-no-repeat bg-center rounded-bl-4xl rounded-br-4xl'>
          <div className='max-w-360 mx-auto'>
            <div className={
              scroll ? "fixed top-0 right-0 pb-4 left-0 z-40 bg-linear-to-r from-[#504af1] via-[#855ed1] to-[#f1afe4] transition-all duration-300 opacity-100 rounded-bl-2xl rounded-br-2xl" : ""
            }>

            <header className='flex items-center pt-7.5 justify-around'>
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
              <div>
                <img src="/images/logo.svg" alt="" />
              </div>

              {/* ....ul... */}
              <nav className='md:flex gap-4 hidden'>
                {navLinks.map((link, index) => (
                  <Link key={index} to={link.Link} className='text-white sans-regular cursor-pointer'>
                    {link.name}
                  </Link>

))}

              </nav>

              <div className='flex gap-1.25'>
                <div className='bg-black rounded-[170px] px-6 py-2.25'>
                  <button className='text-white text-[16px] leading-6 sans-regular'>Log in</button>
                </div>
                <div className='bg-black rounded-[300px] py-[12.25px] px-[13.13px] flex items-center justify-center'>
                  <button className=''>
                    <img src="/images/bucket-icon.svg" alt="Cart" className='h-5.25 w-5.25' />
                  </button>
                </div>
              </div>

            </header>
</div>

            {/* ..........Responsive Part of header...... */}

            <div className={`fixed z-50 w-full bg-[#8561f1] h-screen top-21  text-white
        ${toggle ? "left-0" : "-left-2000 transition-all duration-300"}`}> 
     

              <nav className="flex flex-col items-center justify-center mt-5">
                {
                  navLinks.map((link, index) => (
                    <Link key={link.index} to={link.Link} className='text-xl mt-5 cursor-pointer'>
                      {link.name}
                    </Link>
                  ))
                }
              </nav>
            
            </div>

            {/* ...........Hero........section....... */}
            <div>
              <div className='mt-25 md:mt-35.5  ml-10 sm:pl-15 md:pl-25 flex flex-col pb-45.25 sm:mr-0 mr-2'>
                <h5 className='md:leading-18.5 leading-15 text-[50px] md:text-[74px] text-white max-w-3xl sans-medium '>
                  Access your favourite
                  brands with us
                </h5>
                <p className='mt-6 text-[20px] leading-7.5 text-white max-w-3xl sans-semibold'>The smoothest way of paying everywhere.</p>
                <div className='bg-white rounded-[117px] py-4 max-w-115 mt-6'>
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
