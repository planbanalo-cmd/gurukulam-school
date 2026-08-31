"use client";

import React, { useState } from "react";

export default function Features() {
  const [expanded, setExpanded] = useState(null);

  const features = [
    {
      number: "01",
      title: "Residential School",
      description:
        "Our residential program provides a safe, disciplined, and nurturing environment where students live, learn, and grow together. With a structured routine, personalized care, and continuous academic support, we ensure holistic development beyond the classroom. Students build independence, strong values, and lifelong friendships while staying focused on their goals.",
    },
    {
      number: "02",
      title: "Competitive Exam Preparation",
      description:
        "We prepare students to excel in competitive exams through a focused and result-oriented approach. With expert faculty, structured study plans, and regular assessments, students develop strong conceptual clarity and problem-solving skills. Our program builds confidence and equips learners to succeed in exams like Olympiads and other national-level competitions.",
    },
    {
      number: "03",
      title: "Sports Excellence",
      description:
        "At Gurukulam, sports are an integral part of education. We offer professional training, modern facilities, and dedicated coaching to help students excel in various sports. Our aim is to develop teamwork, discipline, physical fitness, and a winning mindset while encouraging students to pursue their passion for sports.",
    },
    {
      number: "04",
      title: "Pre-Primary Wing",
      description:
        "Our Pre-Primary Wing focuses on building a strong foundation for young learners in a joyful and engaging environment. Through activity-based learning, creative exploration, and individual attention, we nurture curiosity, confidence, and essential life skills. We ensure every child enjoys learning while developing academically and socially.",
    },
  ];

  const toggleReadMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f9f6] py-20 sm:py-24 md:py-28">
      {/* =================================================
          BACKGROUND DECORATION
      ================================================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#156445]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#E4CC6F]/10 blur-3xl" />

      {/* Decorative Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #156445 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          {/* Small Label */}

          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#156445]/15 bg-white px-5 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#CFAF5C]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#156445] sm:text-sm">
              Beyond the Classroom
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-extrabold leading-tight text-[#123D30] sm:text-4xl md:text-5xl lg:text-6xl">
            What We{" "}
            <span className="bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] bg-clip-text text-transparent">
              Offer
            </span>
          </h2>

          {/* Gold Divider */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-[#CFAF5C]/40" />

            <span className="h-2 w-2 rounded-full bg-[#CFAF5C]" />

            <span className="h-px w-12 bg-[#CFAF5C]/40" />
          </div>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg md:leading-8">
            A holistic educational experience designed to nurture academic
            excellence, character, confidence, discipline and the unique
            potential of every student.
          </p>
        </div>

        {/* =================================================
            FEATURE GRID
        ================================================= */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {features.map((feature, index) => {
            const isExpanded = expanded === index;

            const shortText =
              feature.description.length > 145
                ? feature.description.slice(0, 145) + "..."
                : feature.description;

            return (
              <article
                key={feature.number}
                className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#156445]/10
                  bg-white
                  p-7
                  shadow-[0_10px_40px_rgba(21,100,69,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#CFAF5C]/50
                  hover:shadow-[0_20px_50px_rgba(21,100,69,0.12)]
                  sm:p-8
                "
              >
                {/* =================================================
                    TOP GOLD LINE
                ================================================= */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-1
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-[#156445]
                    via-[#CFAF5C]
                    to-[#E4CC6F]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

                {/* =================================================
                    NUMBER
                ================================================= */}

                <div className="mb-7 flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#156445]/5
                      text-sm
                      font-extrabold
                      text-[#156445]
                      transition-all
                      duration-300
                      group-hover:bg-[#156445]
                      group-hover:text-white
                    "
                  >
                    {feature.number}
                  </div>

                  <div
                    className="
                      h-px
                      w-12
                      bg-[#CFAF5C]/40
                      transition-all
                      duration-300
                      group-hover:w-16
                    "
                  />
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="
                    min-h-[56px]
                    text-xl
                    font-bold
                    leading-snug
                    text-[#163D31]
                    transition-colors
                    duration-300
                    group-hover:text-[#156445]
                  "
                >
                  {feature.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    mt-4
                    flex-1
                    text-sm
                    leading-7
                    text-gray-600
                  "
                >
                  {isExpanded
                    ? feature.description
                    : shortText}
                </p>

                {/* =================================================
                    READ MORE
                ================================================= */}

                {feature.description.length > 145 && (
                  <button
                    type="button"
                    onClick={() => toggleReadMore(index)}
                    className="
                      mt-5
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-[#156445]
                      transition-all
                      duration-300
                      hover:text-[#B08D35]
                    "
                  >
                    {isExpanded
                      ? "Read Less"
                      : "Read More"}

                    <span
                      className={`text-base transition-transform duration-300 ${
                        isExpanded
                          ? "rotate-180"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </button>
                )}

                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}

                <div className="mt-7 flex items-center gap-1.5">
                  <span className="h-1 w-2 rounded-full bg-[#CFAF5C]/40" />

                  <span
                    className="
                      h-1
                      w-8
                      rounded-full
                      bg-[#CFAF5C]
                      transition-all
                      duration-500
                      group-hover:w-14
                    "
                  />

                  <span className="h-1 w-2 rounded-full bg-[#CFAF5C]/40" />
                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM MESSAGE
        ================================================= */}

        <div className="mx-auto mt-12 max-w-3xl text-center md:mt-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#156445]/10 bg-white px-5 py-3 shadow-sm">
            <span className="text-sm font-semibold text-[#156445]">
              Learning
            </span>

            <span className="h-1 w-1 rounded-full bg-[#CFAF5C]" />

            <span className="text-sm font-semibold text-gray-500">
              Character
            </span>

            <span className="h-1 w-1 rounded-full bg-[#CFAF5C]" />

            <span className="text-sm font-semibold text-[#156445]">
              Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

