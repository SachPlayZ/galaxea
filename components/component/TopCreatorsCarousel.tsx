import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const items = [
    {
      title: "Innovative Tech Startup",
      creator: "Alice Johnson",
      creatorImage: "/user1.png",
      images: [
        "/hero1.png",
        "/hero2.png"
      ],
      followers: 1500,
      nft: 5,
      items: 10
    },
    {
      title: "Eco-Friendly Product Line",
      creator: "Bob Smith",
      creatorImage: "/user2.png",
      images: [
        "/hero3.png",
        "/hero4.png"
      ],
      followers: 800,
      nft: 3,
      items: 7
    },
    {
      title: "Artistic NFT Collection",
      creator: "Charlie Davis",
      creatorImage: "/user3.png",
      images: [
        "/hero1.png",
        "/hero2.png"
      ],
      followers: 2200,
      nft: 10,
      items: 15
    },
    {
      title: "Health and Wellness App",
      creator: "Dana Lee",
      creatorImage: "/user4.png",
      images: [
        "/hero3.png",
        "/hero4.png"
      ],
      followers: 1200,
      nft: 7,
      items: 12
    },
    {
      title: "Educational Platform for Kids",
      creator: "Eva Martinez",
      creatorImage: "/user5.png",
      images: [
        "/hero1.png",
        "/hero2.png"
      ],
      followers: 950,
      nft: 4,
      items: 8
    }
  ];
  
  
const TopCreatorsCarousel = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-12'>
      <div className='flex flex-col w-[90vw] p-6 gap-6'>
        <h1 className='text-white text-5xl font-medium'>Top creators of this week</h1>
        <h5 className='text-muted-foreground leading-relaxed'>Subscibe now to get the latest job openings<br /> delivered straight to your inbox.</h5>
        <InfiniteMovingCards items={items} />
    </div>
    </div>
  )
}

export default TopCreatorsCarousel