import React from 'react'
import Hero from '../components/home/Hero'
import Categories from '../components/home/Categories'
import Sellers from '../components/home/Sellers'
import Brands from '../components/home/Brands'
import Holiday from '../components/home/Holiday'
import LastCard from '../components/home/LastCard'
import Footer from '../components/home/Footer'
function Home() {
  return (
    <div>
        <Hero />
        <Categories />
        <Sellers />
        <Brands />
        <Holiday />
        <LastCard />
        <Footer />
    </div>
  )
}

export default Home