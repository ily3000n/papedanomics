'use client'
import React, { useRef } from 'react';
import Card2 from "@/components/Card2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";

export default function Home() {
  const card2Ref = useRef<HTMLDivElement>(null);

  const scrollToCard2 = () => {
    if (card2Ref.current) {
      card2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="">
      <Header />
      <Slider scrollToCard2={scrollToCard2} />
      <div style={{ height: '0vh' }}></div> {/* Placeholder for demonstration */}
      <Card2 ref={card2Ref} />
      <Footer />
    </div>
  );
}
