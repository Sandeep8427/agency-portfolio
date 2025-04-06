// "use client";

// import Link from "next/link";


// import Navbar from "@/components/Navbar";
// import Image from "next/image";

// const imagePath = "/images/greenTick.svg"

// const plans = [
//   {
//     index: 0,
//     name: "Basic",
//     price: " US $499",
//     features: [
//       "Fully responsive on all screens",

//       "Design + Development",

//       "Private communication channel",
//       "1-3 days turnaround time",
//     ],
//     style:
//       " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
//     description:
//       "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
//     button: "Buy Now",
//   },
//   {
//     index: 1,
//     name: "Premium",
//     price: "US $1299",
//     features: [
//       "Fully responsive on all screens",
//       "React / Next.js / Tailwind CSS code",
//       "Design + Development",
//       "24-hour support response time",
//       "Private communication channel",
//       "3-5 days turnaround time",
//     ],
//     style:
//       " rounded-3xl  py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
//     description:
//       "Best for early-stage startups, businesses, and freelancers that need a marketing side to showcase their work and vision.",
//     button: "Buy Now",
//   },
//   {
//     index: 2,
//     name: "Enterprise",
//     feature: "Contact Us",
//     price: "Let's Talk!",
//     features: [
//       "Fully responsive on all screens",
//       "React / Next.js / Tailwind CSS code",
//       "Design + Development",
//       "Unlimited Revisions",
//       "24-hour support response time",
//       "Private communication channel",
//       "Priority Development Queue",
//       "Dedicated Project Manager",
//     ],
//     style:
//       " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50  ",
//     description:
//       "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
//     button: "Contact Us",
//   },
// ];

// const Pricing = () => {
//   const showNavItem = false;
//   return ( 
//     <div className="w-full  md:items-center md:justify-center
//      bg-black/[0.96] antialiased 
//      bg-grid-white/[0.02] relative overflow-hidden">

// <Navbar
//              scrollToWebsiteDesign={() => {}}
//              scrollToGraphicDesign={() => {}}
//              scrollToShopifyStores={() => {}}
//              scrollToBrands={() => {}}
//              scrollToServices={() => {}}
//              showNavItem={showNavItem}
//       />

// <div className="flex items-center justify-center flex-col   ">
//           <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
//             Simple Pricing <br /> Choose your plan
//           </div>
//           <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 pb-20  items-start ">
//             {plans.map((plan, index) => (
//               <div
//                 key={plan.name}
//                 className="h-full flex flex-col justify-between border rounded-3xl px-6  "
//               >
//                 <div className={plan.style}>
//                   <div className="text-4xl flex font-medium">
//                     {plan.name}
//                     {/* render feature tag only for enterprise tab*/}
//                     {/* {plan.feature === "Contact Us" && (
//                       <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center ">
//                         Contact Us
//                       </div>
//                     )} */}
//                   </div>
//                   <div className="text-3xl pt-6 ">{plan.price}</div>
//                   <div className="py-6">{plan.description}</div>

//                   <ul>
//                     {plan.features.map((feature) => (
//                       <li
//                         key={feature}
//                         className="text-lg  py-2 flex space-x-2 items-center"
//                       >
//                         {/* render checkmark only for enterprise tab*/}
//                         {/* {plan.feature === "Contact Us" ? (
//                           <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
//                         ) : ( */}
//                           {/* <PiCheckCircleFill className="text-green-600 mr-2 text-xl" /> */}
//                           <Image
//                                           priority
//                                           src={imagePath}
//                                           width={18}
//                                           height={18}
//                                           alt="greenTick"
//                                           className="mr-2 mt-1.5 self-start"
//                                         />
//                         {/* // )} */}

//                           <p>

//                         {feature}
//                           </p>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className={plan.button}>
//                   {index === 0 && (
//                     <Link
//                       href="https://buy.stripe.com/6oEg1WdsibFr1EYbIK"
//                       className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
//                     >
//                       Buy Now
//                     </Link>
//                   )}
//                     {index === 1 && (
//                       <Link
                        
//                         href="https://buy.stripe.com/14k2b65ZQ8tf5Ve28c"  
//                         className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300" 
//                       >
//                         Buy Now
//                         </Link>
//                     )}
//                     {index === 2 && (

//                           <Link
//                           href="/contact"
//                           className="rounded-3xl my-4  py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-purple-500 to-blue-300"
//                         >
//                           Contact Us
//                         </Link>
//                     )}  
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//   </div>
//   )
// };

// export default Pricing;


"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const imagePath = "/images/greenTick.svg";

const coreServices = [
  {
    name: "Static Website Development",
    price: "₹10,000 – ₹15,000",
    features: [
      "Fixed content websites",
      "Fast loading & SEO-friendly",
      "Perfect for portfolios & business info",
    ],
    description:
      "Basic websites with fixed content, ideal for showcasing your portfolio or business information.",
  },
  {
    name: "Dynamic Website Development",
    price: "₹45,000 – ₹65,000",
    features: [
      "Admin panel integration",
      "Real-time content & form handling",
      "Responsive & scalable",
    ],
    description:
      "Feature-rich websites that support real-time content updates, ideal for growing businesses.",
  },
  {
    name: "WordPress Website Development",
    price: "₹15,000 – ₹65,000",
    features: [
      "Custom or pre-built themes",
      "Elementor or block editor",
      "SEO-friendly & responsive",
    ],
    description:
      "From blogs to business sites, we create user-friendly, easy-to-manage WordPress solutions tailored to your needs.",
  },
  {
    name: "Shopify Theme Development",
    price: "Starting from ₹25,000",
    features: [
      "Custom Shopify themes",
      "Brand-aligned design",
      "Conversion-focused UX",
    ],
    description:
      "Custom Shopify themes tailored to your brand and optimized for sales and user experience.",
  },
  {
    name: "Shopify Backend Integration",
    price: "₹20,000 – ₹50,000",
    features: [
      "Node.js / PHP based backend",
      "Custom automation features",
      "Order & data management",
    ],
    description:
      "Build powerful backend tools and custom features for your Shopify store with scalable integrations.",
  },
  {
    name: "React.js Web Applications",
    price: "₹30,000 – ₹70,000+",
    features: [
      "Single-page application",
      "High-performance & dynamic",
      "Reusable component-based structure",
    ],
    description:
      "Modern front-end apps with snappy performance and dynamic interfaces using React.js.",
  },
  {
    name: "Next.js Development",
    price: "₹35,000 – ₹80,000+",
    features: [
      "SEO-optimized SSR pages",
      "API routes & dynamic content",
      "Blazing fast performance",
    ],
    description:
      "Production-ready websites and apps with server-side rendering and SEO capabilities using Next.js.",
  },
  {
    name: "Node.js Backend / API Development",
    price: "₹25,000 – ₹60,000+",
    features: [
      "Secure REST APIs",
      "Scalable backend architecture",
      "Database integration",
    ],
    description:
      "Custom backend and APIs using Node.js for web and mobile applications that scale.",
  },
  {
    name: "React Native App Development",
    price: "₹50,000 – ₹1,50,000+",
    features: [
      "Cross-platform apps",
      "Reusable components",
      "Android & iOS support",
    ],
    description:
      "Robust mobile apps built using React Native to deliver consistent performance across Android and iOS.",
  },
];

const addonServices = [
  {
    name: "Maintenance Plans",
    price: "₹2,000 – ₹10,000/month",
    features: [
      "Bug fixes & updates",
      "Performance optimization",
      "Monthly health reports",
    ],
    description:
      "Ensure your website stays updated, secure, and performs smoothly with our monthly maintenance plans.",
  },
  {
    name: "Domain Connection",
    price: "₹500 – ₹1,000",
    features: [
      "DNS setup",
      "Custom domain linking",
      "Verified configurations",
    ],
    description:
      "Connect and configure your custom domain to your website with verified security.",
  },
  {
    name: "Hosting Setup",
    price: "₹1,500 – ₹5,000",
    features: [
      "Shared / VPS / Cloud",
      "Performance tuning",
      "Uptime monitoring setup",
    ],
    description:
      "Deploy your website to fast, reliable servers with the perfect hosting environment for your needs.",
  },
  {
    name: "SSL Certificate Integration",
    price: "₹1,000 – ₹2,500",
    features: [
      "HTTPS security setup",
      "Free or paid SSL options",
      "SEO & trust benefits",
    ],
    description:
      "Secure your website with an SSL certificate for HTTPS protection and user trust.",
  },
];

const Pricing = () => {
  const showNavItem = false;

  const Section = ({ title, services }) => (
    <section className="w-full py-16 px-6 md:px-10">
      <h2 className="text-4xl text-center font-semibold text-slate-200 mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-7xl">
        {services.map((service) => (
          <div
            key={service.name}
            className="border border-neutral-800 rounded-3xl p-6 bg-gradient-to-b from-neutral-900 to-black text-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-slate-100">
                {service.name}
              </h3>
              <p className="text-xl text-emerald-400 mb-4">{service.price}</p>
              <p className="text-sm text-neutral-400 mb-6">{service.description}</p>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start mb-2 text-sm">
                    <Image
                      src={imagePath}
                      alt="tick"
                      width={18}
                      height={18}
                      className="mr-2 mt-1"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="w-full bg-black/[0.96] text-white antialiased overflow-hidden relative">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
        showNavItem={showNavItem}
      />

      <div className="text-center text-5xl font-bold py-10 text-slate-300 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
        Transparent Pricing <br /> Built for Every Stage
      </div>

      <Section title="🧱 Core Services" services={coreServices} />
      <Section title="🔧 Add-On Services" services={addonServices} />

      <div className="flex justify-center py-10">
        <Link
          href="/contact"
          className="rounded-3xl px-6 py-3 text-white text-lg font-medium bg-gradient-to-r from-emerald-500 to-blue-400 hover:opacity-90 transition"
        >
          Get a Custom Quote
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
