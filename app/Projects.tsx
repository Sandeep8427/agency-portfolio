"use client";

import Image from "next/image";

const projects = [
  {
    title: "Pind Pind Library",
    image: "/projects/pind-pind-library.png",
    description: "A community-driven village-to-village library website for encouraging reading in religious places.",
    link: "https://pind-pind-library.vercel.app/"
  },
];

const ProjectsSection = () => {
  return (
    <div className="text-white px-4 pt-20 md:pt-32">
     <div className="text-4xl md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200  bg-opacity-50">
     Recent Projects We’ve  <br /> Brought to Life
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
        Here’s a glimpse of the digital experiences we’ve designed and developed — each project crafted with vision, precision, and purpose.
        </p>

      <div className="grid pt-10 gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111] border border-neutral-800 rounded-xl overflow-hidden shadow-xl transition hover:shadow-purple-900/30"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-neutral-400 text-sm">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sky-300 hover:underline"
                >
                  View Live ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
