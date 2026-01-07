import React from 'react'

const brands = [
  { image: '/images/apple.svg' , darkImage: '/images/apple-dark.svg'},
  { image: '/images/amazon.svg' ,  darkImage: '/images/amazon-dark.svg' },
  { image: '/images/spotify.svg' , darkImage: '/images/spotify-dark.svg'},
  { image: '/images/nike.svg' ,darkImage: '/images/nike-dark.svg' },
  { image: '/images/adidas.svg',  darkImage: '/images/adidas-dark.svg'  },
  { image: '/images/mcdonald.svg' , darkImage: '/images/mcdonald-dark.svg'  },
  { image: '/images/queen.svg' ,darkImage: '/images/queen-dark.svg' },
  { image: '/images/zara.svg',  darkImage: '/images/zara-dark.svg' },
  
]

function Brands({isDark}) {
  return (
    <div>
      <div className='max-w-360 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mt-16 sm:mt-24 lg:mt-32 mx-4 sm:mx-8 lg:mx-30'>
          <div className='flex justify-center items-center'>
            <h2 className={`sans-medium text-xl sm:text-2xl lg:text-[28px] leading-tight text-center ${isDark ? "text-white" : "text-black"}`}>
              Access the brands of the world
            </h2>
          </div>

          <div className='mt-4 sm:mt-6 relative overflow-hidden w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto'>
            {/* Left fade effect */}
            <div className={`absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32   ${isDark ? "bg-linear-to-r from-[#04031D] to-transparent z-10 pointer-events-none" : "bg-linear-to-r from-white to-transparent z-10 pointer-events-none"}`}></div>

            {/* Right fade effect */}
            <div className={`absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32 ${isDark ? "bg-linear-to-l from-[#04031D] to-transparent z-10 pointer-events-none" : "bg-linear-to-l from-white to-transparent z-10 pointer-events-none"}`}></div>

            <div className='flex animate-scroll gap-2 sm:gap-3'>
              {/* Repeat brands 3 times for seamless infinite scroll */}
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className={`rounded-xl sm:rounded-2xl flex justify-center items-center shrink-0 ${isDark ? "bg-[#0D0A57]" : "bg-[#EAE9FD]"}`}
                  style={{ width: '70px', height: '70px' }}
                >
                  <img
                    src={isDark ? brand.darkImage : brand.image}
                    alt=""
                    className="w-2/5 h-2/5 object-contain"
                  />

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 10s linear infinite;
        }

        // .animate-scroll:hover {
        //   animation-play-state: paused;
        // }

        /* Responsive box sizes */
        @media (min-width: 640px) {
          .animate-scroll > div {
            width: 80px !important;
            height: 80px !important;
          }
        }

        @media (min-width: 1024px) {
          .animate-scroll > div {
            width: 90px !important;
            height: 90px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Brands