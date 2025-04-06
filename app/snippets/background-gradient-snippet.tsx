"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export function BackgroundGradientSnippet() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/images/fast-loading.webp`}
          alt="jordans"
          height="600"
          width="600"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Blending Aesthetics with Performance
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          We create visually stunning websites that are optimized for speed,
          accessibility, and SEO to ensure a powerful online presence.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <Link href="/book">
            <span>Book your call </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              now
            </span>
          </Link>
        </button>
      </BackgroundGradient>
    </div>
  );
}
