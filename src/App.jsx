import React, { useState } from "react"
import Home from "./Pages/Home"
import { BrowserRouter } from "react-router-dom"
function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-[#04031D]" : "bg-white"
      }`}>
      < BrowserRouter>

        <Home isDark={isDark} setIsDark={setIsDark} />
      </BrowserRouter>
    </div>
  )
}

export default App
