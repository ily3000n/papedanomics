import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-poppins">
    
    <Header />
   
    <Slider />
    <Card />
    <Footer />

    </div>
    
  );
}
