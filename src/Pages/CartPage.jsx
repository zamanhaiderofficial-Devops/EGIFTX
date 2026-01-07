import React from 'react'
import CartDrawer from '../components/home/Cart'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'

function CartPage({ isDark, setIsDark }) {
  return (
    <div className={`transition-colors min-h-screen duration-300 ${isDark ? "bg-[#04031D]" : "bg-white"}`}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <CartDrawer isDark={isDark} />
      <Footer />
    </div>
  )
}

export default CartPage;