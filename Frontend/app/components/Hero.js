import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center py-10 md:py-0">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://themewagon.github.io/fox/images/bg_1.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 md:px-8 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
          Education Needs Complete Solution
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl">
          A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>

        <button className="bg-orange-600 hover:bg-orange-700 transition duration-300 px-6 md:px-8 py-3 md:py-4 text-white rounded-lg font-semibold text-sm md:text-base shadow-lg">
          Contact Us
        </button>
      </div>
    </section>
  );
}

