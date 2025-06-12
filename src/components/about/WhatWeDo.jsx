import React from 'react'
import img2 from '../../images/pic2.jpg'

const WhatWeDo = () => {
  return (
    <div>
        <i className='bi bi-gear text-primary display-1'></i>
        <h2 className='text-primary fs-1 mt-2'>What We Do</h2>

        <p>We specialize in our services, ensuring top-notch quality and efficiency in every project we undertake. Our team of skilled professionals is dedicated to meeting customer expectations and staying ahead in the ever-evolving market.</p>

        <img src={img2} className="mt-5 mb-5" style={{width: "100%"}} alt="" />
    </div>
  )
}

export default WhatWeDo