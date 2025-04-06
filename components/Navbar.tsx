"use client";

/* eslint-disable */

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";

interface NavbarProps {
  scrollToWebsiteDesign: () => void;
  scrollToGraphicDesign: () => void;
  scrollToShopifyStores: () => void;
  scrollToBrands: () => void;
  scrollToServices: () => void;
  showNavItem: boolean;
}

const Navbar = ({
  scrollToWebsiteDesign,
  scrollToGraphicDesign,
  scrollToShopifyStores,
  scrollToBrands,
  scrollToServices,
  showNavItem,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        {/* Logo */}
        <div className="">
          <Link className="flex flex-col gap-2 cursor-pointer items-center justify-center" href="/">
            <Image
              priority
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
            {/* <div className="md:text-2xl sm:text-xl text-white">Noctua Webworks</div> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex space-x-10 items-center text-slate-300 text-center 
          bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50"
        >
          {!showNavItem ? (
            <Link href="/">Home</Link>
          ) : (
            <>
              <div
                onClick={scrollToWebsiteDesign}
                className="hover:text-gray-50 cursor-pointer"
              >
                Website Development
              </div>
              <div
                onClick={scrollToGraphicDesign}
                className="hover:text-gray-50 cursor-pointer"
              >
                Website Design
              </div>
              <div
                onClick={scrollToShopifyStores}
                className="hover:text-gray-50 cursor-pointer"
              >
                Shopify Stores
              </div>
              <div
                onClick={scrollToBrands}
                className="hover:text-gray-50 cursor-pointer"
              >
                Tech Stack
              </div>
            </>
          )}

          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div className="relative">
              <X
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
              />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToServices={scrollToServices}
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
