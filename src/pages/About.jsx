import React from 'react'
import PageTitle from '../components/about/PageTitle'
import WhoWeAre from '../components/about/WhoWeAre'
import WhyChooseUs from '../components/about/WhyChooseUs'
import GetInTouch from '../components/about/GetInTouch'
import WhatWeDo from '../components/about/WhatWeDo'

const About = () => {
  return (
    <>
      <PageTitle/>
      <div className="container p-5">
        <WhoWeAre/>
        <WhatWeDo/>
        <WhyChooseUs/>
        <GetInTouch/>
      </div>
    </>
  )
}

export default About