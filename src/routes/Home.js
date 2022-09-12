import React from 'react'
import HeroImg from '../components/HeroImg'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Work from '../components/Work'


const Home = () => {
  return (
    <div>
        <NavBar/>
        <HeroImg />
        <Work />
        <Footer />
    </div>
  )
}

export default Home