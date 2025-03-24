import React from 'react'
import PageTitle from '../components/contact/PageTitle'
import GetInTouch from '../components/about/GetInTouch'
import ContactForm from '../components/contact/ContactForm'
import ContactFlex from '../components/contact/ContactFlex'

const Contact = () => {
  return (
    <>
      <PageTitle/>
      <div className='p-lg-5 p-2'>
        <GetInTouch/>
        <ContactFlex/>
        <ContactForm/>
      </div>
    </>
  )
}

export default Contact