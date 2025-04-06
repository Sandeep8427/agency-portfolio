"use client";


const WebsiteDesign = () => {
  return (
    <div className="relative bg-black py-20 px-6 sm:px-10 overflow-hidden">
  {/* Decorative Blurs */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-700 opacity-30 blur-3xl rounded-full z-0" />
  <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-sky-500 opacity-30 blur-3xl rounded-full z-0" />

  {/* Section Heading */}
  <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
    <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-300">
      Build a Website That Builds Your Brand
    </h2>
    <p className="mt-6 text-lg text-neutral-300 max-w-2xl mx-auto">
      Your website is more than a digital brochure. It's a tool for connection, credibility, and growth — let&apos;s make it unforgettable.
    </p>
  </div>

  {/* Benefits Grid */}
  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {[
      {
        title: "✨ First Impressions Matter",
        desc: "A sleek, fast-loading website captivates visitors in seconds. Don’t let an outdated look drive people away.",
      },
      {
        title: "🌐 Be Discoverable",
        desc: "With smart SEO and structure, your site can reach the right audience at the right time.",
      },
      {
        title: "🔒 Build Trust Instantly",
        desc: "Modern design, clear messaging, and smooth navigation build confidence in your brand.",
      },
      {
        title: "🚀 Convert Visitors to Clients",
        desc: "Your website is a conversion engine. We build user journeys that drive real results.",
      },
      {
        title: "🛠️ Own & Control Your Platform",
        desc: "Unlike social media, a website gives you full ownership of your content, style, and message.",
      },
      {
        title: "⚡ Stay Ahead of the Curve",
        desc: "Technology evolves fast. We use modern stacks to keep your site future-ready and blazing fast.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition duration-300"
      >
        <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
        <p className="text-neutral-300 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>

  {/* CTA */}
  {/* <div className="relative z-10 text-center mt-20">
    <h3 className="text-2xl font-semibold text-white mb-2">
      Ready to Make a Digital Impact?
    </h3>
    <p className="text-neutral-400 mb-6">
      Let’s build a website that tells your story and grows your brand.
    </p>
    <button className="bg-gradient-to-r from-purple-600 to-sky-500 hover:from-purple-700 hover:to-sky-600 text-white px-8 py-3 rounded-full text-lg font-medium transition">
      Start Your Journey
    </button>
  </div> */}
</div>

  );
};

export default WebsiteDesign;
