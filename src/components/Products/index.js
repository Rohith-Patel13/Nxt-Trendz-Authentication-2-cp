// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header/index'

const Products = () => {
  const jwt = Cookies.get('jsonWebTokenName')
  console.log(jwt)

  if (!jwt) {
    return <Redirect to="/login" /> // Return the Redirect component
  }

  return (
    <>
      <Header />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
      />
    </>
  )
}

export default Products
