'use client'
import React from 'react'
import Image from 'next/image'
import { dataWisata } from '@/data'

const Card2 = () => {
  return (
    <div className='bg-[#13182B]'>
      <h1 className='py-5 font-extrabold text-center text-4xl'>WISATA PAPUA BARAT</h1>
      <div className='w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 py-5 mx-auto'>
        {dataWisata.map((wisata) => (
          <div key={wisata.id} className='w-full sm:w-[400px] h-auto flex flex-col bg-white rounded-xl drop-shadow-lg'>
            <Image
              className='rounded-t-xl h-60 object-cover'
              src={wisata.img ?? '/defaultImage.jpg'} // Default image in case img is undefined
              width={500}
              height={500}
              alt={`Picture of ${wisata.title ?? 'Unknown'}`} // Default title in case title is undefined
            />
            <div className='w-full flex flex-col p-3 text-black text-center bg-blue-950'>
              <span className='font-bold text-lg text-white'>{wisata.title ?? 'Unknown'}</span>
              <span className='font-medium text-sm text-white'>{wisata.address ?? 'No description available.'}</span>
              <button 
                onClick={() => window.location.href = wisata.link ?? '#'} // Default link in case link is undefined
                className="mt-2 p-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                VISIT {wisata.title?.toUpperCase() ?? 'UNKNOWN'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card2
