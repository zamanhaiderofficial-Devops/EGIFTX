import React from 'react'
import CartDrawer from '../components/home/Cart'
import Header from '../components/home/Header'
function CartPage({ isDark, setIsDark }) {
  return (
    <div className={`transition-colors min-h-screen duration-300 ${isDark ? "bg-[#04031D]" : "bg-white"}`}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <CartDrawer isDark={isDark} />
    </div>
  )
}

export default CartPage;