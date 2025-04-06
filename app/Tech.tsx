/* eslint-disable */

import Image from "next/image";
import React from "react";
import { Lora } from "next/font/google";
import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

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

        {/* Logos Grid */}
        <div className="grid pt-10 grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 px-6 md:px-0">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center bg-[#2a2a2a] p-6 rounded-xl hover:shadow-lg hover:scale-[1.03] transition-all"
            >
              <Image
                src={logo.image}
                width={100}
                height={100}
                alt={logo.text}
                className="object-contain w-20 h-20 mb-4"
              />
              <p className="text-sm text-white md:text-base text-center">{logo.text}</p>
            </motion.div>
          ))}
        </div>

        {/* <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white  ",
            font.className
          )}
        >
          &quot;We got rid of nearly a dozen different tools because of what
          Noctua Webworks does for us.&quot;
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
