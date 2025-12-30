// import React from 'react'

// function CartDrawer({open,onClose}) {
//   return (
//     <div>
//           {/* ....................CART DRAWER................ */}

//             <>
//               {/* Backdrop */}
//               <div
//                 className={`
//     fixed inset-0 bg-black/50 z-50
//     transition-opacity duration-300
//     ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
//   `}
//                 onClick={onClose}
//               />
//               <div className={``} >
//                 <div className={`bg-[#F8F8FF] w-full max-w-100 sm:max-w-140 h-screen fixed z-60 transition-transform duration-500 ease-in-out top-0 ${open ? "translate-x-0" : "translate-x-full"} `} style={{ right: 0 }}>
//                   <div className='sm:px-6 px-3 py-9 flex flex-col h-full'>
//                     <div className='flex justify-between'>
//                       <h2 className='sans-semibold text-[20px] leading-7.5 text-[#262626]'>Shopping cart</h2>
//                       {/* ...this is close icon.... */}
//                       <img src="/images/cart-close-arrow-black.svg" className='cursor-pointer' onClick={onClose} alt="Close" />
//                     </div>
//                     <div className='bg-linear-to-r from-[#B43AED] to-[#2239FE] px-10 sm:px-23.5 py-4 mt-[43.1px] rounded-[10px]'>
//                       <h5 className='text-[#F5F5F5] text-[15px] sm:text-[20px] sans-semibold leading-7.5'>Get up to 30% off on your 1st order </h5>
//                     </div>
//                     <div className='mt-8 space-y-8'>
//                       <div className='p-5 bg-[#FFFFFF] border border-[#413AE926] rounded-2xl'>
//                         <div className='flex sm:gap-5 gap-3'>
//                           {/* ....product image will be displayed here..... */}
//                           <img src="/images/product-img-model.svg" alt="Product Image" className='sm:w-35.5 sm:h-35.5 w-30 h-30 rounded-[15px]' />

//                           {/* .....product name and its delete button are here in below container.... */}
//                           <div className='flex flex-col w-full'>
//                             <div className='flex justify-between'>
//                               <h2 className='sans-medium  sm:text-[28px] text-[#262626] leading-7.5'>App Store & iTunes</h2>
//                               <button>
//                                 <img src="/images/delete-product-button.svg" alt="" className='w-6 h-6' />
//                               </button>
//                             </div>

//                             {/* ...the quantity of the product and its incrase decrease button in quantity are here... */}
//                             <div className='flex mt-5 gap-6.25 items-center'>
//                               <h2 className='sans-medium text-[14px] leading-6'>Quantity</h2>
//                               <div className='bg-[#F8F8F8] px-2 py-2 rounded-[5px] border border-[#DADADA54]'>
//                                 <div className='flex items-center gap-1'>
//                                   {/* ....quantity decrease button.... */}
//                                   <button className='p-1'>
//                                     <img src="/images/quantity-decrease-button.svg" className='h-6 w-6' alt="" />


//                                   </button>

//                                   {/* ...the total quantity will be here... */}

//                                   <p className='sans-regular text-[16px] leading-6'>1</p>
//                                   {/* ...... quantity incrase button...... */}
//                                   <button className='p-1'>
//                                     <img src="/images/quantity-increase-button.svg" alt="" className='w-6 h-6' />


//                                   </button>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className='border-t border-[#5555554D] mt-6.25'></div>

//                             {/* .........price would be available here ...... */}
//                             <div className='mt-2'>
//                               <span className='sans-medium text-[22px] leading-7.5 text-[#413AE9]'>€100</span>
//                             </div>
//                           </div>

//                         </div>
//                       </div>
//                     </div>
//                     <div className='border-t mt-6 border-[#262626]'></div>
//                     {/* ......  the last bill details would be available here ...... */}
//                     <div className='flex justify-between mt-6'>
//                       <span className='sans-semibold text-[#262626] text-[20px] leading-7.5 '>Subtotal</span>

//                       {/* ....price would be available here .... */}
//                       <span className='sans-semibold text-[20px] text-[#413AE9] leading-7.5 '>€5-€100</span>
//                     </div>
//                     <div className='mt-6 flex sm:gap-6 sm:fkex-row flex-col space-y-3'>
//                       <button className='bg-transparent border border-[dark grey] rounded-[10px] px-[78.5px] py-[12.5px]'>
//                         <span className='text-[20px] text-[#262626] leading-7.5 sans-semibold'>View cart</span>
//                       </button>
//                       {/* ....the total bill would be displayed here.... */}
//                       <button className='bg-[#413AE9]  rounded-[10px] px-5.75 py-[12.5px]'>
//                         <span className='text-[20px] text-white leading-7.5 sans-semibold'>Checkout (€5-€100)</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>

//     </div>
//   )
// }

// export default CartDrawer
import React from 'react'

function CartDrawer({ open, onClose }) {
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
          className={`bg-[#F8F8FF] w-full max-w-100 sm:max-w-140 h-screen fixed z-60 transition-transform duration-500 ease-in-out top-0 ${open ? "translate-x-0" : "translate-x-full"
            }`}
          style={{ right: 0 }}
        >
          <div className="flex flex-col h-full sm:px-6 px-3 py-9">
            {/* ...............Header of cart stays fixed................ */}
            <div className="flex justify-between mb-4">
              <h2 className="sans-semibold text-[20px] leading-7.5 text-[#262626]">Shopping cart</h2>
              {/* ...this is close icon.... */}
              <img
                src="/images/cart-close-arrow-black.svg"
                className="cursor-pointer"
                onClick={onClose}
                alt="Close"
              />
            </div>

            {/* ...........Scrollable content starts here............ */}
            <div className="overflow-y-auto flex-1 space-y-8">
              {/* ..............Promo banner................ */}
              <div className="bg-linear-to-r from-[#B43AED] to-[#2239FE] px-10 sm:px-23.5 py-4 mt-[43.1px] rounded-[10px]">
                <h5 className="text-[#F5F5F5] text-[15px] sm:text-[20px] sans-semibold leading-7.5 whitespace-nowrap">
                  Get up to 30% off on your 1st order
                </h5>
              </div>

              {/* ..............Product item................ */}
              <div className="p-5 bg-[#FFFFFF] border border-[#413AE926] rounded-2xl">
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
                      <h2 className="sans-medium sm:text-[28px] text-[#262626] leading-7.5">App Store & iTunes</h2>
                      <button>
                        <img src="/images/delete-product-button.svg" alt="" className="w-6 h-6" />
                      </button>
                    </div>

                    {/* ...the quantity of the product and its increase decrease button in quantity are here... */}
                    <div className="flex mt-5 gap-6.25 items-center">
                      <h2 className="sans-medium text-[14px] leading-6">Quantity</h2>
                      <div className="bg-[#F8F8F8] px-2 py-2 rounded-[5px] border border-[#DADADA54]">
                        <div className="flex items-center gap-1">
                          {/* ....quantity decrease button.... */}
                          <button className="p-1">
                            <img src="/images/quantity-decrease-button.svg" className="h-6 w-6" alt="" />
                          </button>

                          {/* ...the total quantity will be here... */}
                          <p className="sans-regular text-[16px] leading-6">1</p>

                          {/* ...... quantity increase button...... */}
                          <button className="p-1">
                            <img src="/images/quantity-increase-button.svg" alt="" className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* ....Divider line...... */}
                    <div className="border-t border-[#5555554D] mt-6.25"></div>

                    {/* .........price would be available here ...... */}
                    <div className="mt-2">
                      <span className="sans-medium text-[22px] leading-7.5 text-[#413AE9]">€100</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ..........You can add more product items here.......... */}

              {/* ...........Last bill details and buttons................ */}
              <div className="border-t mt-6 border-[#262626] pt-6">
                {/* ......  the last bill details would be available here ...... */}
                <div className="flex justify-between">
                  <span className="sans-semibold text-[#262626] text-[20px] leading-7.5">Subtotal</span>

                  {/* ....price would be available here .... */}
                  <span className="sans-semibold text-[20px] text-[#413AE9] leading-7.5">€5-€100</span>
                </div>

                {/* ....buttons (View Cart / Checkout).......... */}
                <div className="mt-6 flex sm:gap-6 sm:flex-row flex-col sm:space-y-0 space-y-3">
                  <button className="bg-transparent border border-[dark grey] rounded-[10px] px-[78.5px] py-[12.5px]">
                    <span className="text-[20px] text-[#262626] leading-7.5 sans-semibold whitespace-nowrap">View cart</span>
                  </button>
                  <button className="bg-[#413AE9] border border-[#413AE9] rounded-[10px] px-[78.5px] py-[12.5px]">
                    <span className="text-[20px] text-white leading-7.5 sans-semibold whitespace-nowrap">Checkout (€5-€100)</span>
                  </button>
                </div>
              </div>
            </div>
            {/* ...........Scrollable content ends here............ */}
          </div>
        </div>
      </>
    </div>
  )
}

export default CartDrawer;
