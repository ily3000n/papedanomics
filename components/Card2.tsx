'use client'
import React from 'react'
import Image from 'next/image'


const Card2 = () => {
  return (
    <div className='bg-[#13182B]'>
        <h1 className='py-5 font-extrabold text-center text-4xl'>WISATA PAPUA BARAT</h1>
        <div className='w-fit flex flex-col gap-3 py-5 px-10'>
            <div className='w-[400px] h-auto flex flex-col bg-white rounded-xl drop-shadow-lg'>
            <Image
                className='rounded-t-xl h-60 object-cover'
                src="/rajaAmpatThumbnail.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                />
                <div className='w-full flex flex-col p-3 text-black text-center bg-blue-950'>
                    <span className='font-bold text-lg text-white'>
                        RAJA AMPAT

                    </span>
                    <span className='font-medium text-sm text-white'>
                        Deskripsi raja ampat adalah =Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro tempore labore voluptate rerum quia asperiores reprehenderit consequuntur sapiente nesciunt nulla sit architecto ab voluptatem velit corrupti hic, illo, dolor voluptas!

                    </span>
                    
                    
                    <button onClick={() => window.location.href = '/rajaampat'} className="mt-2 p-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          VISIT RAJA AMPAT
        </button>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Card2