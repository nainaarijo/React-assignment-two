import React from 'react'
import logo from '../assest/Group 1.png'

const NavBar = ()=> {
  return (
    <div>
      <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <div className="col-md-3 mb-2 mb-md-0">
        <img src={logo} alt="logo" />
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-5 text-black">Home</a></li>
        <li><a href="#" className="nav-link px-5 text-black ">Services</a></li>
        <li><a href="#" className="nav-link px-5 text-black">ContactUs</a></li>
        
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" className="btn btn me-2">Login</button>
        <button type="button" className="btn btn-warning rounded-5 text-white px-4">Book Scooter</button>
      </div>
    </header>
  </div>
    </div>
  )
}

export default NavBar
