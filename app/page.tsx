import Hero from '@/components/component/Hero'
import TopCreators from '@/components/component/TopCreators'
import TopCreatorsCarousel from '@/components/component/TopCreatorsCarousel'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <TopCreators />
      <TopCreatorsCarousel />
    </div>
  )
}

export default page