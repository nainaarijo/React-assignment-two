import React from 'react'
import image from '../assest/hero-section.png'

const HeroSection = () => {
  return (
  <div className='container d-flex justify-content-center align-items-center'>
      <div className='col-md-6'>
      <h2>Fair price ride</h2>
      <span className='text-primary-emphasis fs-1 me-3 fw-bold'>Rent our</span><span className='text-danger fs-1 fw-bold'>Scooter</span>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    </div>
    <div className='col-md-6'>
        <img src={image} alt="image" />
    </div>
  </div>
  )
}

export default HeroSection
