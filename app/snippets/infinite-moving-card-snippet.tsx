"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <>
      <div className="text-white px-4 pt-20 md:pt-32">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-900 to-yellow-300 bg-opacity-50">
          What our <br /> clients say about us
        </div>
      </div>

      <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "Thewhiteowls is a blend of professionalism and client centric attitude. They are expert in their field and really wish their clients achieve success in their respective businesses.",
    name: "William Allen",
    title: "",
  },
  {
    quote:
      "Thewhiteowls has really automated some of our website’s processes. We now spend no time doing manual work. The website has made our work more easy. Thanks to its scheduling feature, we don’t need staff to work outside of business hours.",
    name: "Liam Wilson",
    title: "",
  },
  {
    quote:
      "Thewhiteowls is a blend of professionalism and client centric attitude. They are expert in their field and really wish their clients achieve success in their respective businesses.",
    name: "Sophia Carter",
    title: "",
  },
  {
    quote:
      "To take my business online Thewhiteowls not only host the website with precise name they also look into the requirements of my online store to make the interface more user friendly. They not only delivered it in the certain time frame but in budget also",
    name: "Ava Martinez",
    title: "",
  },
  {
    quote:
      "After reviewing our requirements Thewhiteowls created numerous modifications at our websites. Most importantly with each modification our websites performance increased. Needless to say we are extremely satisfied with the results.",
    name: "Lucas Young",
    title: "",
  },
];
