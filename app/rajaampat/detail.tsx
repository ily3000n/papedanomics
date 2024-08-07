'use client'
import Image from 'next/image'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { dataWisata } from '@/data'

const Detail: React.FC = () => {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  if (!dataWisata || !dataWisata[0] || !dataWisata[0].slide) {
    return <div>Data is not available</div>
  }

  return (
    <div className='bg-[#13182B] min-h-screen pb-24'>
      <h1 className='text-center text-4xl font-extrabold pt-6 text-white'>RAJA AMPAT</h1>
      <div className='flex flex-col md:flex-row gap-8 p-6 mx-auto max-w-screen-xl'>
        <div className="w-full md:w-7/12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={() => plugin.current.reset()}
            onMouseLeave={() => plugin.current.reset()}
          >
            <CarouselContent>
              {dataWisata[0].slide.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <Image
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="object-cover w-full h-64 md:h-80 lg:h-96 rounded-lg"
                        width={400}
                        height={300}
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between mt-4">
              <CarouselPrevious className="text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition">Previous</CarouselPrevious>
              <CarouselNext className="text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition">Next</CarouselNext>
            </div>
          </Carousel>
        </div>
        <div className="w-full md:w-7/12 text-white mx-auto sm:mx-auto sm:text-red-700 md:mx-auto md:text-blue-500">
          <h2 className="text-3xl font-bold">{dataWisata[0].title}</h2>
          <p className='mt-6 text-justify '>{dataWisata[0].des}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail
