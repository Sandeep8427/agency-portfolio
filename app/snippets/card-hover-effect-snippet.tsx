import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  PiAppStoreLogo,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
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
    title: "Website development",
    description:
      "Our extremely knowledgeable website developers create and maintain dynamic websites. We take also full responsibility for site's technical nitty grittys from performance to capacity. We create content for the site but also measures speed of website and how to handle the traffic.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiStorefront className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Website Designing",
    description:
      "At the white owls we are bound to reflect your vision, values and offerings to the target clients at the same time ensures with our visuals elements to achieve your brand consistency. Our aim to create user friendly website to build an online presence with a positive impression. ",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiLock className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Shopify Theme Development",
    description:
      "We make a unique client experience with customized Shopify theme which is purely based on your needs and specifications. Moreover with our knowledge and skills we can add enhanced and customized featuers to your Shopify theme to make your store more user friendly. ",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMegaphone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Shopify App development",
    description:
      "With the knowledge of our dedicated team and with their expertise on Shopify, we can add some advanced features to your Shopify store which not only creates an online store but captivates target audiences. At the same time provides lot of customized solutions to improve the overall functionality of the Shopify store to provide better user experience.",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Shopify backend API integration using Node JS and PHP:",
    description:
      "To measure up with the customer's needs we provide in time setup 24/7 customer support and secure integration. Along with the mobile responsive themes for your Shopify store. With the help of node js and PHP our experts adds more flexibility and scalability to your business needs. ",
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "App development",
    description:
      "With the huge skill set and knowledge of our technically sound tram, we can create solutions which enable digital transformation and boost up your business efficiency while maintaining enhancing user experience. ",
  },
];
