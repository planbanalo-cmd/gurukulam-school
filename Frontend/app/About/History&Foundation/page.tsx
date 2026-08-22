"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Images,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Trophy,
} from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const stats = [
  {
    value: "1500+",
    label: "Students",
    icon: Users,
  },
  {
    value: "80+",
    label: "Teachers",
    icon: GraduationCap,
  },
  {
    value: "20+",
    label: "Years of Excellence",
    icon: Award,
  },
  {
    value: "100%",
    label: "Commitment to Excellence",
    icon: Trophy,
  },
];

const strengths = [
  {
    icon: Brain,
    title: "Holistic Development",
    description:
      "We nurture intellectual, emotional, social and physical growth to help students develop into well-rounded individuals.",
  },
  {
    icon: HeartHandshake,
    title: "Value-Based Education",
    description:
      "Strong moral values, discipline, responsibility and respect form an important part of everyday school life.",
  },
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description:
      "Our teachers act as mentors who guide, encourage and inspire students throughout their educational journey.",
  },
  {
    icon: Lightbulb,
    title: "Modern Learning",
    description:
      "Interactive classrooms, technology integration and activity-based learning make education engaging and meaningful.",
  },
  {
    icon: Users,
    title: "Student-Centric Approach",
    description:
      "Individual needs are considered so every student receives the encouragement and attention required to grow.",
  },
  {
    icon: Trophy,
    title: "Co-Curricular Excellence",
    description:
      "Sports, arts, cultural activities and other experiences complement academics and help students discover their talents.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    description:
      "We strive to provide a secure, positive and nurturing environment where students can learn with confidence.",
  },
  {
    icon: Target,
    title: "Future-Ready Skills",
    description:
      "Critical thinking, creativity, communication, collaboration and leadership prepare students for the future.",
  },
];

const galleryImages = [
  "/images/GurukulamLogo.jpeg",
  "/images/about-1.jpg",
  "/images/about-2.jpg",
  "/images/about-3.jpg",
  "/images/about-4.jpg",
  "/images/about-5.jpg",
];

export default function AboutGurukulam() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-gray-900 overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-4 md:px-8 lg:px-16 pt-6 md:pt-10 pb-20">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[36px] md:rounded-[48px] bg-gradient-to-br from-[#083f35] via-[#0D6453] to-[#296236] min-h-[560px] flex items-center">

            {/* Background decorations */}

            <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full border border-white/10" />

            <div className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full bg-[#E4CC6F]/10 blur-3xl" />

            <div className="absolute -bottom-48 -left-32 w-[500px] h-[500px] rounded-full bg-black/10 blur-3xl" />

            <div className="absolute top-20 right-[25%] w-2 h-2 rounded-full bg-[#E4CC6F]" />

            <div className="absolute top-[35%] right-[15%] w-3 h-3 rounded-full bg-white/30" />

            {/* Content */}

            <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center w-full p-8 md:p-14 lg:p-20">

              <div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white text-sm font-semibold"
                >
                  <Sparkles className="w-4 h-4 text-[#E4CC6F]" />
                  Our Story • Our Values • Our Vision
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.7 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] text-white mt-7"
                >
                  About
                  <br />
                  <span className="text-[#E4CC6F]">
                    Gurukulam
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.7 }}
                  className="mt-7 text-white/75 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl"
                >
                  A learning community inspired by the timeless values of
                  the Gurukul tradition and strengthened by modern education,
                  technology and innovative learning practices.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-wrap gap-3 mt-9"
                >
                  {[
                    "Holistic Education",
                    "Strong Values",
                    "Modern Learning",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md text-white text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E4CC6F]" />
                      {item}
                    </div>
                  ))}
                </motion.div>

              </div>

              {/* Hero visual */}

              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="hidden lg:flex justify-center"
              >

                <div className="relative">

                  <div className="absolute inset-0 rounded-full bg-[#E4CC6F]/20 blur-3xl" />

                  <div className="relative w-[310px] h-[310px] rounded-full border border-white/15 bg-white/5 backdrop-blur-xl flex items-center justify-center">

                    <div className="w-[245px] h-[245px] rounded-full bg-white flex items-center justify-center shadow-2xl p-10">

                      <img
                        src="/images/GurukulamLogo.jpeg"
                        alt="Gurukulam The School"
                        className="max-w-full max-h-full object-contain"
                      />

                    </div>

                  </div>

                  <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-4">

                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                      Established
                    </p>

                    <p className="text-2xl font-black text-[#156445]">
                      2002
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <div className="flex items-center gap-3 text-[#156445] text-sm font-bold tracking-wider">
                <span className="w-10 h-[2px] bg-[#156445]" />
                WHO WE ARE
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight mt-5">
                More Than
                <br />
                <span className="text-[#156445]">
                  Just Education
                </span>
              </h2>

              <p className="text-gray-500 mt-6 leading-relaxed">
                At Gurukulam, education is viewed as a journey of
                discovery, character building and personal growth.
              </p>

            </motion.div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >

              <p className="text-gray-700 text-lg leading-relaxed">
                Gurukulam The School, Rewari, was established on
                <strong> 20 March 2002</strong> and carries a rich
                educational legacy built around teaching excellence
                and student development.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Inspired by the ancient Indian Gurukul system,
                Gurukulam combines mentorship, strong moral foundations
                and holistic education with contemporary teaching
                methodologies.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Our learning environment encourages students to think
                critically, explore creatively and develop the confidence
                to take responsibility for their own growth.
              </p>

              <div className="pt-3 flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#156445]/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#156445]" />
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Learning with Purpose
                  </p>
                  <p className="text-sm text-gray-500">
                    Knowledge • Character • Confidence
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 py-10">

        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all p-6"
              >

                <div className="w-11 h-11 rounded-xl bg-[#156445]/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#156445]" />
                </div>

                <div className="text-3xl md:text-4xl font-black text-[#156445]">
                  {item.value}
                </div>

                <p className="text-gray-500 text-sm mt-1">
                  {item.label}
                </p>

              </motion.div>
            );

          })}

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[36px] bg-[#0D6453]">

            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#E4CC6F]/10 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12 lg:p-16">

              <div>

                <div className="inline-flex items-center gap-2 text-[#E4CC6F] text-sm font-bold">
                  <Sparkles className="w-4 h-4" />
                  OUR EDUCATIONAL PHILOSOPHY
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mt-5 leading-tight">
                  Ancient Values.
                  <br />
                  <span className="text-[#E4CC6F]">
                    Modern Learning.
                  </span>
                </h2>

                <p className="text-white/70 text-lg leading-relaxed mt-6 max-w-xl">
                  We believe that the best education brings together
                  timeless values with modern knowledge and skills.
                  Students are encouraged to learn, question, collaborate
                  and become responsible members of society.
                </p>

              </div>

              <div className="grid sm:grid-cols-2 gap-4">

                {[
                  "Character & Values",
                  "Academic Excellence",
                  "Leadership",
                  "Creativity",
                ].map((item) => (

                  <div
                    key={item}
                    className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-md"
                  >

                    <CheckCircle2 className="w-5 h-5 text-[#E4CC6F] mb-4" />

                    <p className="text-white font-semibold">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#156445]/10 text-[#156445] text-sm font-bold">
              <Award className="w-4 h-4" />
              WHY GURUKULAM
            </div>

            <h2 className="text-4xl md:text-5xl font-black mt-5">
              Building
              <span className="text-[#156445]">
                {" "}Future-Ready{" "}
              </span>
              Individuals
            </h2>

            <p className="text-gray-500 text-lg mt-5 leading-relaxed">
              Our approach goes beyond academic achievement to help
              students develop confidence, character, creativity and
              the skills required for an evolving world.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {strengths.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-3xl border border-gray-100 p-7 shadow-sm hover:shadow-xl transition-all duration-300"
                >

                  <div className="w-12 h-12 rounded-2xl bg-[#156445]/10 flex items-center justify-center group-hover:bg-[#156445] transition-colors">

                    <Icon className="w-6 h-6 text-[#156445] group-hover:text-white transition-colors" />

                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mt-6">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mt-3">
                    {item.description}
                  </p>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION & VISION
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 py-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-md p-8 md:p-10"
          >

            <div className="w-14 h-14 rounded-2xl bg-[#156445]/10 flex items-center justify-center">
              <Target className="w-7 h-7 text-[#156445]" />
            </div>

            <p className="text-xs font-bold tracking-widest text-[#156445] mt-7">
              OUR MISSION
            </p>

            <h3 className="text-3xl font-black mt-2">
              Nurturing Character & Excellence
            </h3>

            <p className="text-gray-500 leading-relaxed mt-5">
              To provide an enriching educational environment that
              develops academic excellence, strong character,
              discipline, creativity and social responsibility.
            </p>

          </motion.div>


          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#0D6453] rounded-3xl shadow-md p-8 md:p-10"
          >

            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-[#E4CC6F]" />
            </div>

            <p className="text-xs font-bold tracking-widest text-[#E4CC6F] mt-7">
              OUR VISION
            </p>

            <h3 className="text-3xl font-black text-white mt-2">
              Preparing Students for Tomorrow
            </h3>

            <p className="text-white/70 leading-relaxed mt-5">
              To empower students with knowledge, values and
              future-ready skills so they can confidently contribute
              to society and make a meaningful difference.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">

            <div>

              <div className="flex items-center gap-2 text-[#156445] text-sm font-bold">
                <Images className="w-4 h-4" />
                CAMPUS LIFE
              </div>

              <h2 className="text-4xl md:text-5xl font-black mt-3">
                Experience
                <span className="text-[#156445]">
                  {" "}Gurukulam
                </span>
              </h2>

            </div>

            <p className="text-gray-500 max-w-md">
              A glimpse into the learning environment, campus
              culture and experiences that make Gurukulam special.
            </p>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {galleryImages.map((src, i) => (

              <motion.button
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className={`relative overflow-hidden rounded-2xl bg-gray-200 group ${
                  i === 0
                    ? "md:col-span-2 md:row-span-2 aspect-square"
                    : "aspect-[4/3]"
                }`}
              >

                <img
                  src={src}
                  alt={`Gurukulam campus ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

              </motion.button>

            ))}

          </div>

        </div>

      </section>


      {/* LIGHTBOX */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={galleryImages.map((src) => ({
          src,
        }))}
      />


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 pb-16 pt-10">

        <div className="max-w-5xl mx-auto text-center bg-white rounded-[32px] border border-gray-100 shadow-xl p-8 md:p-14">

          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#156445]/10 flex items-center justify-center">

            <GraduationCap className="w-7 h-7 text-[#156445]" />

          </div>

          <h2 className="text-3xl md:text-4xl font-black mt-6">
            A Place to Learn.
            <span className="text-[#156445]">
              {" "}A Place to Grow.
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            At Gurukulam, every student is encouraged to discover
            their potential, develop their character and prepare
            confidently for the future.
          </p>

        </div>

      </section>

    </main>
  );
}