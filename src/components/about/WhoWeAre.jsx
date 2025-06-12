import React from 'react'
import img1 from '../../images/pic1.jpg'

const WhoWeAre = () => {
  return (
    <div>
        <i className='bi bi-windows text-primary display-1'></i>
        <h2 className='text-primary fs-1 pt-5'>Who We Are ?</h2>
        <p className='fw-bold'>Welcome to Darpan Enterprises, your trusted partner in industry/service focus, e.g., manufacturing, consulting, etc. With a commitment to excellence and innovation, we have been delivering high-quality solutions tailored to meet our clients' needs.</p>

        <img src={img1} className='mt-5 mb-5' alt="" style={{width: "100%"}} />

        <h3>Our Mission</h3>
        <p>At Darpan Enterprises, our mission is to provide mention key offerings: quality products, expert services, customer satisfaction, etc. while maintaining the highest standards of professionalism and integrity. We strive to build long-term relationships with our clients by delivering value-driven solutions.</p>
    </div>
  )
}

export default WhoWeAre