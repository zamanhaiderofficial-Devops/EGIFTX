import { React, useState, useMemo,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const payment = [
  {
    image: '/images/payment-card-icon.svg',
    darkImage: '/images/payment-card-icon-dark.svg',
    padding: 'py-4',
  },
  {
    image: '/images/paypal-payment.svg',
    darkImage: '/images/paypal-payment-dark.svg',
    padding: 'py-[21px]'
  },
  {
    image: '/images/googlepay-payment.svg',
    darkImage: '/images/googlepay-payment-dark.svg',
    padding: 'py-[23px]'
  }
]

function CartDrawer({ isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const Navigate = useNavigate();
    useEffect(() => {
    if (isOpen) {

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  // ....sample products...
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "App Store & iTunes",
      image: "/images/product-img-model.svg",
      basePrice: 100,
      quantity: 1
    },
    {
      id: 2,
      name: "Google Play Card",
      image: "/images/product-img-model.svg",
      basePrice: 50,
      quantity: 2
    },
    {
      id: 3,
      name: "PlayStation Store",
      image: "/images/product-img-model.svg",
      basePrice: 75,
      quantity: 1
    }
  ]);

  //  Calculate subtotal dynamically based on all products
  const subtotal = useMemo(() => {
    return products.reduce((total, product) => {
      return total + (product.basePrice * product.quantity);
    }, 0);
  }, [products]);

  //   delivery fee and tax
  const deliveryFee = 2;
  const tax = 4;

  //  Calculate total = subtotal + delivery + tax
  const total = useMemo(() => {
    return subtotal + deliveryFee + tax;
  }, [subtotal]);

  // Handle delete function
  const handleDelete = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  // Handle increase quantity
  const increaseQuantity = (productId) => {
    setProducts(products.map(product =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    ));
  };

  // Handle decrease quantity
  const decreaseQuantity = (productId) => {
    setProducts(products.map(product =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ));
  };

  return (
    <div>
      {/* ....................CART DRAWER................ */}
      <>
        {/* Drawer */}
        <div data-cart-drawer
          className={`w-full max-w-360 mx-auto pt-25 px-4 md:px-6`}>
          <div className='max-w-300 flex xl:flex-row flex-col gap-6 md:gap-10 items-start mx-auto xl:mx-25'>
            <div className='xl:max-w-[527.5px] w-full'>
              <div className="text-center">
                <h2 className={`sans-semibold text-[20px] leading-7.5 ${isDark ? "text-white" : "text-[#262626]"}`}>Shopping cart</h2>
              </div>
              <div className={`h-full w-full rounded-[20px] ${isDark ? "bg-[]" : "bg-[]"}`}>
                <div className=''>
                  <div className="flex flex-col">
                    {products.map((product) => (
                      <div key={product.id} className={`p-5 border border-[#413AE926] mt-8 rounded-2xl ${isDark ? "bg-[#1B184E]" : "bg-[#FFFFFF]"}`}>
                        <div className="flex sm:gap-7.5 gap-3">
                          {/* ....product image will be displayed here..... */}
                          <img
                            src={product.image}
                            alt="Product Image"
                            className="sm:w-35.5 sm:h-35.5 w-30 h-30 rounded-[15px]"
                          />

                          {/* .....product name and its delete button are here in below container.... */}
                          <div className="flex flex-col w-full">
                            <div className="flex flex-wrap gap-3 sm:gap-8 w-full items-center justify-between">
                              <h2 className={`sans-medium text-[20px] sm:text-[28px] leading-7.5 ${isDark ? "text-white" : "text-[#262626]"}`}>{product.name}</h2>
                              {/* onClick handler */}
                              <button onClick={() => handleDelete(product.id)}>
                                <img src="/images/delete-product-button.svg" alt="" className={`w-6 h-6 ${isDark ? "hidden" : "block"}`} />
                                <img src="/images/delete-product-button-white.svg" alt="" className={`w-6 h-6 ${isDark ? "block" : "hidden"}`} />
                              </button>
                            </div>

                            {/* ...the quantity of the product and its increase decrease button in quantity are here... */}
                            <div className="flex mt-5 gap-6.25 items-center">
                              <h2 className={`sans-medium text-[14px] leading-6 ${isDark ? "text-white" : "text-black"}`}>Quantity</h2>
                              <div className={` ${isDark ? "bg-[#232058] border-[#DADADA17]" : "bg-[#F8F8F8] border-[#DADADA54]"} p-1.25 rounded-[5px] border`}>
                                <div className="flex items-center gap-1">
                                  {/* onClick handler for decrease */}
                                  <button onClick={() => decreaseQuantity(product.id)} className={`p-1 ${isDark ? "hidden" : "block"}`}>
                                    <img src={product.quantity <= 1 ? "/images/quantity-decrease-button.svg" : "/images/quantity-decrease-enable-button.svg"} className="h-6 w-6" alt="" />
                                  </button>
                                  <button onClick={() => decreaseQuantity(product.id)} className={`p-1 ${isDark ? "block" : "hidden"}`}>
                                    <img src={product.quantity <= 1 ? "/images/quantity-decrease-button-dark-mode.svg" : "/images/quantity-decrease-button-dark-mode-enable.svg"} className="h-6 w-6" alt="" />
                                  </button>

                                  {/* Display dynamic quantity */}
                                  <p className={`sans-regular text-[16px] leading-6 ${isDark ? "text-white" : "text-black"}`}>{product.quantity}</p>

                                  {/* onClick handler for increase */}
                                  <button onClick={() => increaseQuantity(product.id)} className={`p-1 ${isDark ? "hidden" : "block"}`}>
                                    <img src="/images/quantity-increase-button.svg" alt="" className="w-6 h-6" />
                                  </button>
                                  <button onClick={() => increaseQuantity(product.id)} className={`p-1 ${isDark ? "block" : "hidden"}`}>
                                    <img src="/images/quantity-increase-button-dark-mode.svg" alt="" className="w-6 h-6" />
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* ....Divider line...... */}
                            <div className="border-t border-[#5555554D] mt-6.25"></div>

                            {/* .........price would be available and displayed here ...... */}
                            <div className="mt-2">
                              {/* basePrice × quantity for total product price */}
                              <span className={`sans-medium text-[22px] leading-7.5 ${isDark ? "text-[#9577F1]" : "text-[#413AE9]"}`}>
                                €{product.basePrice * product.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* .....order summary and payment details are here ..... */}
            <div className={`border  w-full   xl:max-w-158.25 rounded-2xl ${isDark ? "border-[#2E2979] bg-[#161437]" : "border-[#DADADA] bg-[#FFFFFF]"}`}>
              <div className='flex flex-col mt-7.5 px-4 sm:px-7.5 mb-7.5'>
                <h5 className={`sans-medium text-[22px] leading-7.5 ${isDark ? "text-white" : "text-black"}`}>Order Summary</h5>
                <div className={`border mt-4 ${isDark ? "border-t-[#2E2979]" : " border-t-[#262626]"}`}></div>

                {/*  Subtotal  calculated dynamically */}
                <div className='flex justify-between mt-6'>
                  <p className={`sans-regular leading-6 text-[16px] ${isDark ? "text-white" : "text-black"}`}>Subtotal</p>
                  <span className={`${isDark ? "text-[#B68FF5]" : "text-[#413AE9]"} sans-regular text-[16px] leading-6 `}>€{subtotal}</span>
                </div>

                {/* Delivery Fee - Fixed */}
                <div className='flex justify-between mt-6'>
                  <p className={`sans-regular leading-6 text-[16px] ${isDark ? "text-white" : "text-black"}`}>Delivery Fee</p>
                  <span className={`sans-regular text-[16px] leading-6  ${isDark ? "text-[#B68FF5]" : "text-[#413AE9]"}`}>€{deliveryFee}</span>
                </div>

                <div className={`border-t border-b  mt-6 ${isDark ? "border-t-[#2E2979] border-b-[#2E2979]" : "border-t-[#DADADA] border-b-[#DADADA]"}`}>
                  {/* Tax - Fixed */}
                  <div className='flex justify-between py-1.75'>
                    <p className={`sans-regular leading-6 text-[16px] ${isDark ? "text-white" : "text-black"}`}>Tax</p>
                    <span className={`sans-regular text-[16px] leading-6  ${isDark ? "text-[#B68FF5]" : "text-[#413AE9]"}`}>€{tax}</span>
                  </div>
                </div>

                {/*  Total  calculated dynamically */}
                <div className='flex justify-between mt-6'>
                  <p className={`sans-semibold leading-7.5 text-[20px] ${isDark ? "text-white" : "text-black"}`}>Total</p>
                  <span className={`sans-regular text-[16px] leading-6  ${isDark ? "text-[#B68FF5]" : "text-[#413AE9]"}`}>€{total}</span>
                </div>

                <div className={`border-t mt-7.5 ${isDark ? " border-t-[#2E2979]" : " border-t-[#DADADA]"}`}></div>

                <div className='flex justify-between mt-5 items-center'>
                  <p className={`sans-semibold leading-7.5 text-[20px] ${isDark ? "text-white" : "text-black"}`}>Payment method</p>
                  {/* ...this arrow is used to hide and show other details below it..... */}
                  <div onClick={() => setIsOpen(!isOpen)} className=''>
                    <img src={` ${isDark ? "/images/drop-down-arrow-white.svg" : "/images/drop-down-arrow-black.svg"} `} className={`cursor-pointer  transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} alt="" />
                  </div>
                </div>

                {/* ...hide show content on button click... */}
                {isOpen && (
                  <>
                    {/* paymetn cards ways.... */}
                    <div className='flex flex-wrap sm:flex-nowrap gap-3.75 mt-7.5'>
                      {payment.map((method, index) => {
                        return (
                          <div key={index} className={` ${isDark ? "bg-[#231F65] border-[#2E2979]" : "bg-[#F5F5F5] border-[#DADADA]"} ${method.padding} px-3 w-full sm:w-45.25 border  rounded-[7px] flex  items-center`}>
                            <img src={isDark ? method.darkImage : method.image} className='' alt="" />
                          </div>
                        )
                      })}
                    </div>
                    <div className='flex flex-wrap sm:flex-nowrap mt-7.5 gap-[7.5px]'>
                      <div className={`relative w-full py-4 px-3 sm:max-w-69.5 rounded-[50px] ${isDark ? "bg-[#231F65]" : "bg-[#F5F5F5]"}`}>
                        <input
                          type="text"
                          placeholder="Card number"
                          className={`w-full bg-transparent sans-medium text-[14px] leading-6  rounded-md focus:outline-none ${isDark ? "text-white placeholder-white" : "text-[#7A7A7A] placeholder-[#7A7A7A]"}`}
                        />
                        <img
                          src={`${isDark ? "/images/card-number-lock-white.svg" : "/images/card-number-lock-grey.svg"}`}
                          alt="lock icon"
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none"
                        />
                      </div>
                      <div className="flex w-full sm:w-auto gap-[7.5px]">
                        <div className={`relative w-full  py-4 px-5 sm:max-w-37.5 rounded-[50px] ${isDark ? "bg-[#231F65]" : "bg-[#F5F5F5]"}`}>
                          <input
                            type="text"
                            placeholder="Expiry date"
                            className={`w-full bg-transparent focus:outline-none sans-medium text-[14px] leading-6  rounded-md ${isDark ? "placeholder-white text-white" : "placeholder-[#7A7A7A] text-[#7A7A7A]"}`}
                          />
                        </div>
                        <div className={`relative w-full py-4 px-3 sm:max-w-32.5 rounded-[50px] ${isDark ? "bg-[#231F65]" : "bg-[#F5F5F5]"}`}>
                          <input
                            type="text"
                            placeholder="CVV"
                            className={`w-full bg-transparent focus:outline-none sans-medium text-[14px] leading-6 rounded-md ${isDark ? "placeholder-white text-white" : "placeholder-[#7A7A7A] text-[#7A7A7A]"}`}
                          />
                          <img
                            src={`${isDark ? "/images/card-number-lock-white.svg" : "/images/card-number-lock-grey.svg"}`}
                            alt="lock icon"
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className={`relative w-full py-4 px-3 mt-7.5 rounded-[50px] ${isDark ? "bg-[#231F65]" : "bg-[#F5F5F5]"}`}>
                      <input
                        type="text"
                        placeholder="Card holder name"
                        className={`w-full bg-transparent focus:outline-none sans-medium text-[14px] leading-6  rounded-md ${isDark ? "placeholder-white text-white" : "placeholder-[#7A7A7A] text-[#7A7A7A]"}`}
                      />
                    </div>
                    <div className="mt-7.5">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-blue-500"
                        />
                        <span className={`text-[14px] leading-6  sans-medium ${isDark ? "text-white" : "text-[#7A7A7A]"}`}>
                          Remember details for faster checkout
                        </span>
                      </label>
                    </div>
                  </>
                )}

                <div className='bg-[#413AE9] rounded-[10px] py-[12.5px] text-center mt-7.5'>
                  <button className='text-white sans-semibold'>Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default CartDrawer;