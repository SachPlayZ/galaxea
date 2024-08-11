import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Stack from './Stack'

const Hero = () => {
  return ( 
    <div className='flex h-screen pb-10 bg-black items-center text-white'>
        
        <div className='flex flex-col w-1/2 items-center'>
          <div className="space-y-8">
          <div className='space-y-6'>

            <h1
            className='text-6xl leading-snug'>Create and Collect<br/>your Favourite Avatar</h1>
            <p className='text-lg text-gray-500'>NFT Marketplace brings artist and creators together on a single<br/> platform.</p>
            <Button className='bg-purple-500 text-white hover:bg-purple-600 rounded-3xl px-10'>Start Collecting</Button>
          </div>

            <div className='flex space-x-6 *:space-x-2'>
              <div className='flex'>
                <Image src='/itemdep.svg' height={32} width={32} alt='hero1'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl'>+12.8k</h2>
                  <p className='text-gray-500'>Items Deployed</p>
                </div>
              </div>
              <div className='flex'>
                <Image src='/heroart2.svg' height={32} width={32} alt='hero1'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl'>9.5k</h2>
                  <p className='text-gray-500'>Art Works</p>
                </div>
              </div>
              <div className='flex'>
                <Image src='/commu.svg' height={32} width={32} alt='hero1'/>
                <div className='flex flex-col'>
                  <h2 className='text-2xl'>10.5k</h2>
                  <p className='text-gray-500'>Communities</p>
                </div>
              </div>
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <div className="w-[500px] h-[510px] rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 ">

              <Stack />

          </div>
        </div>
    </div>
  )
}

export default Hero