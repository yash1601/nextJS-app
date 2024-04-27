import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import EmblaCarousel from "./components/Carousel";
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function Home() {
  return (
    <main>
      <header > 
        <div className="">
        <img src="/Home.png" alt="" className="w-full h-[36rem]"/>
        </div>
      </header>
      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </main>
  );
}
