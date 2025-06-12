import React from 'react'
import img1 from '../../images/pic3.jpg'

const OurServices = () => {
  return (
    <div>
        <i className='bi bi-gear display-1 text-primary'></i>

        <h2 className='text-primary mt-2 mb-2'>At Darpan Enterprises,</h2>

        <p>we specialize in delivering high-quality architectural and construction solutions that redefine spaces with elegance and functionality. With expertise in glass, aluminum, construction, and design, we ensure excellence in every project we undertake.</p>

        <img src={img1} style={{width: "100%"}} className='' alt="" />
    </div>
  )
}

export default OurServices