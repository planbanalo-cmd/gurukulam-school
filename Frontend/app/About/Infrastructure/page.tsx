'use client';

import React, { useEffect, useState } from 'react';

export default function InfrastructurePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expanded, setExpanded] = useState<number | null>(null);

  const facilities = [
    {
      title: "Classrooms",
      desc: "Our classrooms are spacious, well-ventilated, and equipped with modern teaching aids, creating an interactive and engaging learning environment for students.",
      image: "/images/Infrastructure/Classroom.jpeg"
    },
    {
      title: "Laboratories",
      desc: "We provide well-equipped science and computer laboratories that encourage practical learning, experimentation, and innovation.",
      image: "/images/Infrastructure/Lab.jpeg"
    },
    {
      title: "Library",
      desc: "Our library is a knowledge hub with a wide collection of books, reference materials, and digital resources to promote reading habits and research skills.",
      image: "/images/Infrastructure/Library.jpeg"
    },
    {
      title: "Sports Facilities",
      desc: "We offer excellent sports infrastructure with dedicated spaces and coaching to support physical fitness, teamwork, and overall development.",
      image: "/images/Infrastructure/Sports.jpeg"
    },
    {
      title: "Transport",
      desc: "The school provides safe and reliable transport facilities with well-maintained buses and trained staff, ensuring comfortable travel for students.",
      image: "/images/Infrastructure/Bus.jpeg"
    },
    {
      title: "Hostel",
      desc: "Our residential hostel offers a safe, disciplined, and homely environment with proper care, nutritious meals, and academic support for students.",
      image: "/images/Infrastructure/Hostel.jpeg"
    }
  ];

  const toggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-[#f7f6ef] via-white to-[#eef3ec]">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/campus-bg.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#CFAF5C] to-white bg-clip-text text-transparent">
            Infrastructure
          </h1>
          <p className="text-gray-200 mt-4 text-lg max-w-xl mx-auto">
            Modern facilities designed to support holistic learning and development.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-[#e6e2c8] rounded-2xl shadow-xl p-8 md:p-12">

          <p className="text-gray-700 text-lg mb-5 leading-relaxed">
            Gurukulam The School offers a well-designed and modern infrastructure that supports a dynamic and effective learning environment. Our campus is thoughtfully planned to provide students with the best facilities for academic, co-curricular, and personal development.
          </p>

          <p className="text-gray-700 text-lg mb-5 leading-relaxed">
            Spacious and well-ventilated classrooms, equipped with modern teaching aids, create an engaging and interactive learning experience. The school is supported by well-equipped laboratories, a resourceful library, and smart classrooms that enhance both understanding and curiosity among students.
          </p>

          <p className="text-gray-700 text-lg mb-5 leading-relaxed">
            We also provide excellent sports facilities, ensuring students maintain physical fitness and develop teamwork and discipline. Dedicated spaces for arts and co-curricular programs encourage creativity and overall growth.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Safety and comfort are our top priorities. The campus is secure, clean, and student-friendly, creating an environment where learners feel confident, safe, and motivated.
          </p>

        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#156445] to-[#CFAF5C] bg-clip-text text-transparent">
            School Facilities
          </h2>

          {/* 📱 MOBILE ACCORDION */}
          <div className="md:hidden space-y-4">
            {facilities.map((item, index) => {
              const isOpen = expanded === index;

              return (
                <div key={index} className="rounded-xl border bg-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center p-4"
                  >
                    <span className="font-semibold text-[#156445]">{item.title}</span>
                    <span className="text-[#CFAF5C] text-xl">{isOpen ? "−" : "+"}</span>
                  </button>

                  {isOpen && (
                    <div className="p-4">
                      <img src={item.image} className="w-full h-40 object-cover rounded-lg mb-3" />
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 💻 DESKTOP CARDS */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((item, index) => {
              const isExpanded = expanded === index;

              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-[#e6e2c8] shadow-lg hover:shadow-2xl transition duration-500"
                >
                  {/* Image */}
                  <div className="h-52 overflow-hidden">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#156445] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {isExpanded ? item.desc : item.desc.slice(0, 100) + "..."}
                    </p>

                    <button
                      onClick={() => toggle(index)}
                      className="mt-3 text-[#CFAF5C] font-semibold text-sm hover:underline"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-[#156445] via-[#CFAF5C] to-[#156445] blur-xl opacity-20"></div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#eef3ec] py-16 text-center">
        <h2 className="text-3xl font-bold text-[#156445] mb-4">
          360° Campus Virtual Tour
        </h2>

        <p className="text-gray-600 mb-6">
          Experience our campus through an immersive virtual tour.
        </p>

        <a
          href="#"
          className="inline-block bg-gradient-to-r from-[#156445] to-[#0d4d35] text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
        >
          Explore Now
        </a>
      </section>

    </div>
  );
}