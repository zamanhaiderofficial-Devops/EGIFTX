import React, { useState } from "react"
import Home from "./Pages/Home"
import CartPage from "./Pages/CartPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-[#04031D]" : "bg-white"
      }`}>
      < BrowserRouter>

        <Routes>
          <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/cart" element={<CartPage isDark={isDark} setIsDark={setIsDark} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;


