import React from "react";
import "../styles/navbar.css";


const Navbar = ({ setShow, size }) => {
    return (
        <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shoping
        </span>
        <span className="my_shop" onClick={() => setShow(true)}>
          Home
        </span>
        <span className="my_shop" onClick={() => setShow(true)}>
        About
        </span>
        <span className="my_shop" onClick={() => setShow(true)}>
        Shop
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      New Arrivals
                    </a>
                  </li>
                </ul>
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;
