import React from 'react'
import UltimateHero from './AboutCollege'
import CollegeSection from './CollegeSection'
import PageSEO from '../../seo/PageSEO'

const About = () => {
  return (
    <>
      <PageSEO 
        pageKey="about"
        structuredDataType="EducationalOrganization"
      />
      <div>
          <UltimateHero />
          <CollegeSection />
      </div>
    </>
  )
}

export default About