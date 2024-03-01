import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
import {withRouter, Link} from 'react-router-dom'

import './index.css'

const Header = props => {
  const homeRoute = () => {
    const {history} = props
    console.log(history)
    const jwtGet = Cookies.get('jwt_token')
    console.log(jwtGet, 'while navigating to Home Route')
    if (jwtGet) {
      history.replace('/')
    }
  }

  const productsRoute = () => {
    const {history} = props
    // console.log(history)
    const jwtGet = Cookies.get('jwt_token')
    if (jwtGet) {
      history.replace('/products')
    }
  }

  const cartRoute = () => {
    const {history} = props
    // console.log(history)
    const jwtGet = Cookies.get('jwt_token')

    if (jwtGet) {
      history.replace('/cart')
    }
  }

  const logoutBtnClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />

          <button
            type="button"
            className="nav-mobile-btn"
            onClick={logoutBtnClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-content nav-bar-large-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <ul className="nav-menu">
            <Link to="/" className="nav-menu-item" onClick={homeRoute}>
              Home
            </Link>

            <Link
              to="/products"
              className="nav-menu-item"
              onClick={productsRoute}
            >
              Products
            </Link>

            <Link to="/cart" className="nav-menu-item" onClick={cartRoute}>
              Cart
            </Link>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={logoutBtnClicked}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-img"
              onClick={homeRoute}
            />
          </li>

          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-bar-img"
              onClick={productsRoute}
            />
          </li>

          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-bar-img"
              onClick={cartRoute}
            />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
