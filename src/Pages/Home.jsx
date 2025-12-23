import React from 'react'
import Hero from '../components/home/Hero'
import Categories from '../components/home/Categories'
import Sellers from '../components/home/Sellers'
import Brands from '../components/home/Brands'
import Holiday from '../components/home/Holiday'
import LastCard from '../components/home/LastCard'
import Footer from '../components/home/Footer'
function Home({isDark,setIsDark}) {
  return (
    <div>
        <Hero isDark={isDark} setIsDark={setIsDark} />
        <Categories isDark={isDark} />
        <Sellers isDark={isDark} />
        <Brands isDark={isDark} />
        <Holiday isDark={isDark}/>
        <LastCard />
        <Footer />
    </div>
  )
}

export default Home