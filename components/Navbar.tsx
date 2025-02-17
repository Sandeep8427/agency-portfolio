import Image from "next/image";
import Link from "next/link";
import React from "react";
Link;

const Navbar = () => {
  return (
    <div className="text-white">
      <div className="p-6 md:p-10 flex items-center justify-between z-50 ">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.svg"
              alt="Logo"
              height={100}
              width={100}
              className="w-[10] h-[10] md:w[14] md:h[14]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
