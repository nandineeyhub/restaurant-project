import React from 'react'
import Feature from '../Component/Feature/index'
import Products from '../Component/Products/index'
import { productData, productDataTwo } from '../Component/Products/data';
import Footer from '../Component/Footer/index';
const Body = () => {
  return (
      <>
        <Feature/>
        <Products heading='Top Rated Delicacies...' data={productData} />
        <Products heading='Other special dishes...' data={productDataTwo} />
        <Footer/>
      </>
  )
}

export default Body