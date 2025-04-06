/* eslint-disable */

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DropDownMenuProps {
  onClose: () => void;
  scrollToServices: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose, scrollToServices }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Enable scrolling after animation completes
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={`
        w-screen
        h-screen
        bg-gradient-to-b 
        from-neutral-50
        to-neutral-400 
        bg-opacity-50
        text-slate-300
        p-6
        space-y-4
        absolute
        top-16
        left-0
        right-0
        z-50
        !translate-x-[-86%]
        rounded-t-3xl
        ${isVisible ? "overflow-auto" : "overflow-hidden"}
      `}
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col flex space-y-10">
        <Link href="/pricing" className="text-black text-2xl">
          Pricing
        </Link>
        <Link href="/contact" className="text-black text-2xl">
          Contact
        </Link>
        <Link href="/book" className="text-black text-2xl">
          Book a call
        </Link>
        <Link href="/#services" className="cursor-pointer text-black text-2xl">
          Services
        </Link>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
