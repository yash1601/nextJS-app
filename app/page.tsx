import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <header > 
        <div className="">
        <img src="/Home.png" alt="" className="w-full h-[36rem]"/>
        </div>
      </header>
    </main>
  );
}
