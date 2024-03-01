import React from 'react'
import HomeBannerAnimate from './homepage-animate'

const HomePage = () => {
  return (
    <>
    <div className='text-center text-blue-300 text-5xl pt-4'>3D object demo</div>
    <div className='flex h-[90vh] items-center'><HomeBannerAnimate /></div>
    </>
  )
}

export default HomePage