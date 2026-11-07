import React from 'react'
import Carousel from './Carousel'
import Slides from './Slides'
import Services from './Services'
import ProductCards from './ProductCards'

const Home = () => {
  return (
    <>
      <Carousel />
      <Slides />
      <ProductCards />
      <Services />
    </>
  )
}

export default Home