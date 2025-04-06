import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  PiMonitor,
  PiHeadsetFill,
  PiStorefront,
  PiAppStoreLogo,
  PiArrowRight,
} from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Website Development",
    description:
      "We build modern, scalable websites with clean code, fast performance, and great user experience — tailored to your brand and goals.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "App Development",
    description:
      "From web apps to mobile solutions, we develop feature-rich, secure, and responsive apps that scale with your business.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiStorefront className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Shopify Theme Development",
    description:
      "We create custom Shopify themes optimized for performance, branding, and conversions — fully aligned with your store’s needs.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiStorefront className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Shopify Theme Customization",
    description:
      "Enhance and personalize your existing Shopify theme with tailored features, styles, and UX improvements.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Shopify App Development",
    description:
      "We build powerful, custom Shopify apps to extend your store’s functionality and create unique shopping experiences.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "WordPress Website Development",
    description:
      "We develop robust WordPress websites that are secure, SEO-friendly, and easy to manage — tailored for your business.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "WordPress Website with Elementor",
    description:
      "We craft visually stunning, responsive websites using Elementor — giving you full design flexibility with zero code.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "WordPress E-commerce Website",
    description:
      "Launch powerful e-commerce stores using WooCommerce — fully integrated with WordPress and optimized for growth.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiArrowRight className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Shopify to WordPress Migration",
    description:
      "Seamlessly migrate your Shopify store to WordPress without losing data, SEO rankings, or functionality.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiArrowRight className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Shopify to Any Other Stack Migration",
    description:
      "Migrate your Shopify store to modern stacks like Next.js, Laravel, or custom CMS — built for speed and control.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiArrowRight className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "WordPress to Shopify Migration",
    description:
      "Move your WordPress site to Shopify with precision — preserving content, design intent, and search visibility.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiArrowRight className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "WordPress to Any Other Stack Migration",
    description:
      "Upgrade your WordPress site to a fully custom tech stack — with complete flexibility, better performance, and future-ready architecture.",
  },
];
