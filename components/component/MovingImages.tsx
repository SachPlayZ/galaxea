import React from 'react'
import { InfiniteMovingCards } from '../ui/parallax-scroll';


const MovingImages = () => {
  return (
    <div>
        <InfiniteMovingCards className='pt-14' images1={images1} images2={images2} images3={images3} />
    </div>
  )
}

const images1 = [
    '/hero1.png',
    '/hero2.png',
    '/hero3.png',
    '/hero4.png',
    '/user1.png',
    '/user2.png',
    '/user3.png',
    '/user4.png',
  ];
  const images2 = [
    '/user5.png',
    '/user6.png',
    '/user7.png',
    '/user8.png',
    '/user9.png',
    '/user10.png',
    '/user11.png',
    '/user12.png',
  ];
  const images3 = [
    '/user13.png',
    '/user14.png',
    '/user15.png',
    '/user16.png',
    '/user17.png',
    '/user18.png',
    '/user19.png',
    '/user20.jpg',
  ];

export default MovingImages