'use client';

import React, { useEffect, useState } from 'react';

export default function InfrastructurePage() {

 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ ADD THIS (missing state)
  const [expanded, setExpanded] = useState<number | null>(null);

  const facilities = [
    {
      title: "Classrooms",
      desc: "Our classrooms are spacious, well-ventilated, and equipped with modern teaching aids, creating an interactive and engaging learning environment for students.",
      image: "/images/classroom.jpg"
    },
    {
      title: "Laboratories",
      desc: "We provide well-equipped science and computer laboratories that encourage practical learning, experimentation, and innovation.",
      image: "/images/lab.jpg"
    },
    {
      title: "Library",
      desc: "Our library is a knowledge hub with a wide collection of books, reference materials, and digital resources to promote reading habits and research skills.",
      image: "/images/library.jpg"
    },
    {
      title: "Sports Facilities",
      desc: "We offer excellent sports infrastructure with dedicated spaces and coaching to support physical fitness, teamwork, and overall development.",
      image: "/images/sports.jpg"
    },
    {
      title: "Transport",
      desc: "The school provides safe and reliable transport facilities with well-maintained buses and trained staff, ensuring comfortable travel for students.",
      image: "/images/bus.jpg"
    },
    {
      title: "Hostel",
      desc: "Our residential hostel offers a safe, disciplined, and homely environment with proper care, nutritious meals, and academic support for students.",
      image: "/images/hostel.jpg"
    }
  ];
   const toggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/campus-bg.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Infrastructure
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Modern facilities designed to support holistic learning and development.
          </p>
        </div>
      </section>

      {/* 🔥 INTRO */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">

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

      {/* 🔥 FACILITIES GRID */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10">
          School Facilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, index) => {
            const isExpanded = expanded === index;
            const shortText = item.desc.slice(0, 100) + "...";

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
              >
                
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-600 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {isExpanded ? item.desc : shortText}
                  </p>

                  <button
                    onClick={() => toggle(index)}
                    className="mt-2 text-orange-600 font-semibold text-sm hover:underline"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>

      {/* 🔥 VIRTUAL TOUR */}
      <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            360° Campus Virtual Tour
          </h2>

          <p className="text-gray-700 text-lg mb-8">
            Explore our campus through an immersive 360-degree virtual tour that showcases our infrastructure, facilities, and vibrant learning environment—giving you a complete experience of life at Gurukulam from anywhere.
          </p>

          {/* Replace with real tour link */}
          <a
            href="#"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Explore Virtual Tour
          </a>

        </div>
      </section>

    </div>
  );
}