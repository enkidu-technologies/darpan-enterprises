import React from 'react'

const ServicesSection = () => {
  return (
    <div class="container px-4 py-5">

    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div class="col d-flex flex-column align-items-start gap-2">
        <h2 class="fw-bold text-body-emphasis">Transforming Spaces with Excellence</h2>
        <p class="text-body-secondary">Your Trusted Partner in Interior, Exterior, and Construction Services</p>
        <a href="#" class="btn btn-primary btn-lg">All Services</a>
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">

          <div class="col d-flex flex-column gap-2">
            <div class="d-inline-flex align-items-center justify-content-start text-primary fs-1">
            <i class="bi bi-0-circle"></i>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Interior Design</h4>
            <p class="text-body-secondary">Enhance the beauty of your home or office with our customized interior design solutions. From modern aesthetics to traditional elegance, we craft spaces that reflect your style and personality.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="d-inline-flex align-items-center justify-content-start text-primary fs-1">
            <i class="bi bi-0-circle"></i>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Exterior Design</h4>
            <p class="text-body-secondary">Give your property a striking first impression with our expert exterior design services. We focus on durability, aesthetics, and innovative architectural elements to enhance your building's facade.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="d-inline-flex align-items-center justify-content-start text-primary fs-1">
            <i class="bi bi-0-circle"></i>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Construction</h4>
            <p class="text-body-secondary">From residential to commercial projects, our construction services ensure superior quality and timely delivery. We handle everything from foundation to finishing with precision and expertise.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="d-inline-flex align-items-center justify-content-start text-primary fs-1">
            <i class="bi bi-0-circle"></i>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Glass Work</h4>
            <p class="text-body-secondary">We provide high-quality glass solutions, including partitions, doors, and decorative glasswork, enhancing the beauty and functionality of your space.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="d-inline-flex align-items-center justify-content-start text-primary fs-1">
            <i class="bi bi-0-circle"></i>
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Aluminum Work</h4>
            <p class="text-body-secondary">Our aluminum work includes doors, windows, facades, and structural solutions that offer durability, style, and energy efficiency.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
  )
}

export default ServicesSection