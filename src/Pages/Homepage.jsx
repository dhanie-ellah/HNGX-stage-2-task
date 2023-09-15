import React from 'react'
import Header from '../Components/Header'
import FeaturedMovies from '../Components/FeaturedMovies'
// import Details from '../Components/Details'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <div>
      <Header />
      <FeaturedMovies />
      {/* <Details/> */}
      <Footer/>
    </div>
  )
}

export default Homepage