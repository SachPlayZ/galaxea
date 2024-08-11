import React from 'react'
import Image from 'next/image'

const creators = [
  { id: 1, name: 'Maqsood Iqbal', nftsCreated: 100 },
  { id: 2, name: 'PrussianPanda', nftsCreated: 85 },
  { id: 3, name: 'Emnate', nftsCreated: 75 },
  { id: 4, name: 'KrustyKoala', nftsCreated: 60 },
  { id: 5, name: 'Breezy Wild', nftsCreated: 45 },
];

const TopCreators = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-12'>
      <div className='flex flex-col bg-zinc-900 h-40 w-[90vw] rounded-lg border border-gray-800 p-6'>
        <div className='flex'>
        <div className='flex space-x-2 ms-3'>
          <Image className='' src='/rocket.svg' height={28} width={28} alt='hero1'/>
          <h2 className='text-white text-lg'><strong>Top Creators of this week</strong></h2>
        </div>
        <h2 className='text-[#7A5AF8] cursor-pointer ms-auto mr-3'>See More</h2>
      </div>

      <div className='mt-4 flex justify-between'>
        {creators.map(creator => (
          <div key={creator.id} className='flex items-center justify-between p-4 mb-2 rounded-lg'>
            <div className='flex items-center space-x-4'>
              <Image className='rounded-full' src={`/user${creator.id}.png`} height={32} width={32} alt='creator-avatar' />
              <div>
                <h3 className='text-white'>{creator.name}</h3>
                <p className='text-gray-400 text-sm'>{creator.nftsCreated} NFTs created</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default TopCreators
