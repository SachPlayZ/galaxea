import Hero from '@/components/component/Hero'
import MovingImages from '@/components/component/MovingImages'
import TopCreators from '@/components/component/TopCreators'
import TopCreatorsCarousel from '@/components/component/TopCreatorsCarousel'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <TopCreators />
      <TopCreatorsCarousel />
      <MovingImages />
    </div>
  )
}

export default page