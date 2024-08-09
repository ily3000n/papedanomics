'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { MdHotel } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';
import { BsInfoSquareFill } from 'react-icons/bs';
import { Card } from '../../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { dataWisata, dataLagu2, dataIcon } from '@/data';

const Detail: React.FC = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [randomIcon, setRandomIcon] = useState<string | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dataIcon.length);
    setRandomIcon(dataIcon[randomIndex]);
  }, []);

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.removeEventListener('ended', () => {});
      }
    };
  }, [audio]);

  const playRandomSong = () => {
    if (audio) {
      audio.pause();
    }
    const randomIndex = Math.floor(Math.random() * dataLagu2.length);
    const newAudio = new Audio(dataLagu2[randomIndex]);
    newAudio.play();
    setAudio(newAudio);
  };

  if (!dataWisata || !dataWisata[5] || !dataWisata[5].slide) {
    return <div>Data is not available</div>;
  }

  const wisata = dataWisata[5];

  return (
    <div className='bg-[#13182B] min-h-screen pb-24'>
      <h1 className='text-center text-4xl font-extrabold pt-6 text-cyan-500'>{wisata.title.toUpperCase()}</h1>
      <div className='flex flex-col md:flex-row gap-8 p-6 mx-auto max-w-screen-xl'>
        <div className="w-full md:w-7/12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={() => plugin.current.reset()}
            onMouseLeave={() => plugin.current.reset()}
          >
            <CarouselContent>
              {wisata.slide.map((img, index) => (
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
        <div className="w-full md:w-7/12 text-white mx-auto">
          <p className='text-justify ml-4 mt-12'>{wisata.des}</p>
        </div>
      </div>
      <div className='text-cyan-500 text-center text-3xl font-bold mx-auto'>Info Sekitar {wisata.title}</div>
      <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-rows-3 gap-4 mt-4 text-white md:mr-[300px] mx-10'>
        <div className='flex justify-center md:justify-end md:border-r-2 pr-4'>
          <div className='flex items-center'>
            <MdHotel className='text-3xl text-cyan-500' />
            <span className='ml-2 text-center text-cyan-500'>Penginapan</span>
          </div>
        </div>
        <div>
          <p className='text-lg text-justify '>{wisata.penginapan}</p>
        </div>
        <div className='flex justify-center md:justify-end md:border-r-2 pr-4'>
          <div className='flex items-center'>
            <ImSpoonKnife className='text-3xl text-cyan-500' />
            <span className='ml-2 text-center text-cyan-500'>Restoran</span>
          </div>
        </div>
        <div>
          <p className='text-lg text-justify'>{wisata.restoran}</p>
        </div>
        <div className='flex justify-center md:justify-end md:border-r-2 pr-4'>
          <div className='flex items-center'>
            <BsInfoSquareFill className='text-3xl text-cyan-500' />
            <span className='ml-2 text-center text-cyan-500'>Informasi</span>
          </div>
        </div>
        <div>
          <p className='text-lg text-justify'>{wisata.info}</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-8'>
  <h1 className='text-cyan-500 text-3xl font-extrabold mb-5'>Lokasi {wisata.title}</h1>
  
  <div className='w-full max-w-md md:max-w-2xl'>
    <iframe 
      className='rounded-lg w-full h-64 md:h-96' 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.409440123574!2d131.24050957448017!3d-0.8202813352933392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d595581fedb13df%3A0xaf710c750e4d97e7!2sPantai%20Tanjung%20Kasuari%2C%20Sorong%2C%20Papua%20Barat!5e0!3m2!1sid!2sid!4v1723201914704!5m2!1sid!2sid" 
      loading="lazy" 
    />
  </div>
</div>

      <div className='fixed bottom-5 right-5'>
        {randomIcon && (
          <button onClick={playRandomSong} className='p-3 rounded-full bg-blue-500 hover:bg-blue-700 transition-colors'>
            <Image src={randomIcon} alt="Play Icon" width={50} height={50} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Detail;

