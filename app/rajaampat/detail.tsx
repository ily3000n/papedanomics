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
    <div className='bg-[#13182B] h-full pb-[6rem]'>
      <h1 className='text-center text-4xl font-extrabold pt-6 text-white'>RAJA AMPAT</h1>
      <div className='flex flex-col md:flex-row gap-16 p-4 mx-4'>
        <div className="w-full md:w-5/12 md:mx-16">
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
                        className="object-cover w-full h-64 md:h-96 rounded-lg"
                        width={400}
                        height={300}
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between mt-2">
              <CarouselPrevious className="text-white bg-gray-800 p-2 rounded">Previous</CarouselPrevious>
              <CarouselNext className="text-white bg-gray-800 p-2 rounded">Next</CarouselNext>
            </div>
          </Carousel>
        </div>
        <div className="w-full md:w-1/2 text-white mx-4 md:mx-0">
          <h2 className="text-2xl font-bold">{dataWisata[0].title}</h2>
          <p className='mt-2'>{dataWisata[0].des}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail
