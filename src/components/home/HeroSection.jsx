import React from 'react'

const HeroSection = () => {
  return (
    <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">Darpan Enterprises</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">At Darpan Enterprises, we specialize in interior design, exterior design, construction, glass work, and aluminum work to bring your vision to life. With a commitment to quality craftsmanship and innovative solutions, we create spaces that are both functional and aesthetically stunning.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">View Services</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">About Us</button>
      </div>
    </div>
  </div>
  )
}

export default HeroSection