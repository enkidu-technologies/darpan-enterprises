import React from 'react'
import img1 from "../../images/pic4.jpg"

const ContactFlex = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-wrap gap-3'>
        <img src={img1} style={{width: "100%"}} className='m-lg-5 m-2' alt="" />

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9893617054668!2d77.29668757533199!3d28.54003947571552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce41d5d2f3d3b%3A0x17965f352e0fe013!2sPocket%20M%2C%20Sarita%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1742644235125!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default ContactFlex