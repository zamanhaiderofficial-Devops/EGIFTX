import React, { useState } from 'react'
import { navLinks } from "../navLinks";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import ThemeSwitch from '../ThemeSwitch';

function Header({ isDark, setIsDark }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className={`fixed z-40 bg-linear-to-r from-[#504af1] via-[#855ed1] to-[#f1afe4] rounded-bl-2xl rounded-br-2xl`}>
        <div data-sticky-header className={`fixed top-0 right-0 pb-1 left-0 z-40 bg-linear-to-r from-[#504af1] via-[#855ed1] to-[#f1afe4] rounded-bl-2xl rounded-br-2xl transition-transform duration-300   ${scroll ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
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
                  <Link to="/cart">
                    <div className='cursor-pointer bg-linear-to-r from-[#B43AED] to-[#100F0F] rounded-[300px] py-[12.25px] px-[13.13px] flex items-center justify-center'>
                      <button className='cursor-pointer'>
                        <img src="/images/bucket-icon.svg" alt="Cart" className='h-5.25 w-5.25' />
                      </button>
                    </div>
                  </Link>
                  <AiOutlineMenu
                    onClick={() => setToggle(!toggle)}
                    className="text-white text-2xl cursor-pointer lg:hidden flex" />

                </div>
              </div>
            </div>

          </header>
        </div>

        {/* ................sidebar drawer for mobile....... */}


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
      </div>
    </div>
  )
}

export default Header