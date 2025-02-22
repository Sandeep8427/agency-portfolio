import Navbar from "@/components/Navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import GraphicDesign from "./GraphicDesign";

export default function Home() {
  return (
    <div className="w-full md:justify-center md:items-center bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden relative">
      <Navbar />
      <Spotlight className="hidden md:flex md:-top-80 left-20" fill="white" />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div
          className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          Create grow and <br /> scale your business
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom tailored solutions for your business. We are a team of
          creatives who are exited to help you grow your business.
        </p>
        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
        >
          Book a call
        </Link>

        <div className="w-full pt-20">
          <SliderOne/>
        </div>

        <GraphicDesign />
      </div>
    </div>
  );
}
