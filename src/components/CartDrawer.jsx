
import React from 'react'


function CartDrawer({ open, onClose, isDark }) {

  return (
    <div>
      {/* ....................CART DRAWER................ */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          onClick={onClose}
        />

        {/* Drawer */}
        <div
          className={` ${isDark ? "bg-[#04031D]" : "bg-[#F8F8FF] "} w-full max-w-100 sm:max-w-140  h-screen fixed z-60 transition-transform duration-500 ease-in-out top-0 ${open ? "translate-x-0" : "translate-x-full"
            }`}
          style={{ right: 0 }}
        >
          <div className="flex flex-col h-full sm:px-6 px-3 py-9">
            {/* ...............Header of cart stays fixed................ */}
            <div className="flex justify-between mb-4">
              <h2 className={`sans-semibold text-[20px] leading-7.5 ${isDark ? "text-white" : "text-[#262626]"}`}>Shopping cart</h2>
              {/* ...this is close icon.... */}
              <div>

                <img
                  src="/images/cart-close-arrow-black.svg"
                  className={`cursor-pointer ${isDark ? "hidden" : "block"}`}
                  alt="Close"
                  onClick={onClose}
                />
                <img
                  src="/images/cart-close-arrow-white.svg"
                  className={`cursor-pointer ${isDark ? "block" : "hidden"}`}
                  alt="Close"
                  onClick={onClose}
                />
              </div>
            </div>

            {/* ...........Scrollable content starts here............ */}
            <div className="overflow-y-auto flex-1 space-y-8 scrollbar-hide">
              {/* ..............Promo banner................ */}
              <div className="bg-linear-to-r from-[#B43AED] to-[#2239FE] px-10 sm:px-23.5 py-4 mt-[43.1px] rounded-[10px]">
                <h5 className="text-[#F5F5F5] text-[15px] sm:text-[20px] sans-semibold leading-7.5 whitespace-nowrap text-center">
                  Get up to 30% off on your 1st order
                </h5>
              </div>

              {/* ..............Product item................ */}
              <div className={`p-5  border border-[#413AE926] rounded-2xl ${isDark ? "bg-[#1B184E]" : "bg-[#FFFFFF]"}`}>
                <div className="flex sm:gap-5 gap-3">
                  {/* ....product image will be displayed here..... */}
                  <img
                    src="/images/product-img-model.svg"
                    alt="Product Image"
                    className="sm:w-35.5 sm:h-35.5 w-30 h-30 rounded-[15px]"
                  />

                  {/* .....product name and its delete button are here in below container.... */}
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <h2 className={`sans-medium sm:text-[28px]  leading-7.5 ${isDark ? "text-white" : "text-[#262626]"} `}>App Store & iTunes</h2>
                      <button>
                        <img src="/images/delete-product-button.svg" alt="" className={`w-6 h-6 ${isDark ? "hidden" : "block"}`} />
                        <img src="/images/delete-product-button-white.svg" alt="" className={`w-6 h-6 ${isDark ? "block" : "hidden"}`} />
                      </button>
                    </div>

                    {/* ...the quantity of the product and its increase decrease button in quantity are here... */}
                    <div className="flex mt-5 gap-6.25 items-center">
                      <h2 className={`sans-medium text-[14px] leading-6 ${isDark ? "text-white" : "text-black"}`}>Quantity</h2>
                      <div className={` ${isDark ? "bg-[#232058] border-[#DADADA17]" : "bg-[#F8F8F8] border-[#DADADA54]"}  p-1.25 rounded-[5px] border `}>
                        <div className="flex items-center gap-1">
                          {/* ....quantity decrease button.... */}

                          <button className={`p-1 ${isDark ? "hidden" : "block"}`}>
                            <img src="/images/quantity-decrease-button.svg" className="h-6 w-6" alt="" />
                          </button>
                          <button className={`p-1 ${isDark ? "block" : "hidden"}`}>
                            <img src="/images/quantity-decrease-button-dark-mode.svg" className="h-6 w-6" alt="" />
                          </button>

                          {/* ...the total quantity will be displayed here... */}
                          <p className={`sans-regular text-[16px] leading-6 ${isDark ? "text-white" : "text-black"}`}>1</p>

                          {/* ...... quantity increase button...... */}
                          <button className={`p-1 ${isDark ? "hidden" : "block"}`}>
                            <img src="/images/quantity-increase-button.svg" alt="" className="w-6 h-6" />
                          </button>
                          <button className={`p-1 ${isDark ? "block" : "hidden"}`}>
                            <img src="/images/quantity-increase-button-dark-mode.svg" alt="" className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* ....Divider line...... */}
                    <div className="border-t border-[#5555554D] mt-6.25"></div>

                    {/* .........price would be available and displayed  here ...... */}
                    <div className="mt-2">
                      <span className={`sans-medium text-[22px] leading-7.5  ${isDark ? "text-[#9577F1]" : "text-[#413AE9]"}`}>€100</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ..........You can add more product items here.......... */}
            </div>

            {/* ...........Last bill details and buttons................ */}
            <div className={`border-t mt-6 ${isDark ? "border-[#433D9D]" : "border-[#262626] "}`}>
              {/* ......  the last bill details would be available here ...... */}
              <div className="flex justify-between mt-6">
                <span className={`sans-semibold  text-[20px] leading-7.5 ${isDark ? "text-[white]" : "text-[#262626]"}`}>Subtotal</span>

                {/* ....price would be available here .... */}
                <span className={`sans-semibold text-[20px] leading-7.5 ${isDark ? "text-white" : "text-[#413AE9] "}`}>€5-€100</span>
              </div>

              {/* ....buttons (View Cart / Checkout).......... */}
              <div className="mt-6 flex justify-between      sm:flex-row flex-col sm:space-y-0 space-y-3">
                <button className={`bg-transparent border  rounded-[10px] px-[78.5px] py-[12.5px] ${isDark ? "border-[#F5F5F5]" : "border-[#262626]"}`}>
                  <span className={`text-[20px]  leading-7.5 sans-semibold whitespace-nowrap ${isDark ? "text-white" : "text-[#262626]"}`}>View cart</span>
                </button>
                <button className="bg-[#413AE9] border border-[#413AE9] rounded-[10px] px-5.75 py-[12.5px]">
                  <span className="text-[20px] text-white leading-7.5 sans-semibold whitespace-nowrap">Checkout (€5-€100)</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </>
    </div>
  )
}

export default CartDrawer;
