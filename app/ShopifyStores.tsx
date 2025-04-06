"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stores = [
  {
    image: "/images/shopify/2.jpg",
    quote: "Noctua Webworks showed us how to get started, what to do, and how to do it.",
    name: "Jason Scer",
  },
  {
    image: "/images/shopify/1.jpg",
    quote:
      "We had no idea how to get started, but Noctua Webworks showed us the way. We created something amazing.",
    name: "John Prency",
  },
  {
    image: "/images/shopify/3.jpg",
    quote:
      "The team at Noctua Webworks is amazing. They helped us create a stunning store we're proud of.",
    name: "Miguel Martinez",
  },
  {
    image: "/images/shopify/4.jpg",
    quote:
      "Starting out was overwhelming, but Noctua Webworks made everything clear and simple. We built something incredible.",
    name: "Sarah Mitchell",
  },
  {
    image: "/images/shopify/5.jpg",
    quote:
      "Noctua Webworks turned our confusion into confidence. Their expertise helped bring our vision to life.",
    name: "David Carter",
  },
];

const ShopifyStores = () => {
  return (
    <section className="mt-16 md:py-20 bg-gradient-to-br from-[#f6f5f4] to-[#e9e7e6] w-full rounded-3xl">
      <div className="px-6 py-10 md:px-12 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-500">
            Shopify Theme Development <br /> & Customization
          </h2>
          <p className="mt-4 text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto">
            Noctua Webworks crafts bespoke Shopify themes tailored to your brand and built for performance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center transition-all hover:shadow-2xl hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Image
                src={store.image}
                alt={store.name}
                width={350}
                height={350}
                className="rounded-xl object-cover"
              />
              <p className="text-neutral-700 font-medium text-base mt-4 italic">
                "{store.quote}"
              </p>
              <p className="text-neutral-900 font-semibold text-lg mt-2">
                — {store.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
