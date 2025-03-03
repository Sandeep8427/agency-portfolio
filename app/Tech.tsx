import Image from "next/image";
import React from "react";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  {
    image: "/images/react.png",
    text: "React JS & Native",
  },
  {
    image: "/logo/nextjs.svg",
    text: "Next JS",
  },
  {
    image: "/logo/node.svg",
    text: "Node JS",
  },
  {
    image: "/logo/shopify.svg",
    text: "Shopify Liquid",
  },
  {
    image: "/images/PHP.webp",
    text: "Php laravel for shopify backend",
  },
  {
    image: "/images/NODE.webp",
    text: "Node JS for shopify backend",
  },
];

const Brands = () => {
  return (
    <div>
      <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div
          className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50"
        >
          Technologies we <br /> work in
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
        Leveraging cutting-edge technologies, we build robust solutions tailored to your needs. From web and mobile development to Shopify and backend systems, we use the best tools to drive innovation.
        </p>

        <div className="grid grid-cols-3 items-center justify-center mx-auto md:w-4/5 cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20 text-center">
              <Image
                priority
                src={logo.image}
                width={500}
                height={500}
                alt={logo.text}
                className="w-full bg-white h-auto max-w-full rounded-lg"
              />
              <p className="text-white mt-2">{logo.text}</p>
            </div>
          ))}
        </div>

        {/* <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white  ",
            font.className
          )}
        >
          &quot;We got rid of nearly a dozen different tools because of what
          White Owl does for us.&quot;
        </div>

        <div className="items-center flex justify-center flex-col text-white">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="pt-2 xl:pt-0  w-10 xl:w-14 "
          />

          <div className=" text-center">
            <div className="text-sm  font-medium pt-4">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Brands;
