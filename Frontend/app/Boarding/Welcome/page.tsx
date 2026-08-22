"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Heart,
  Home,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Utensils,
  Dumbbell,
  Moon,
  GraduationCap,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    icon: Home,
    title: "A Home Away From Home",
    description:
      "A warm, caring and structured residential environment where students feel secure, valued and supported.",
  },
  {
    icon: BookOpen,
    title: "Focused Academic Support",
    description:
      "A disciplined routine with dedicated study hours helps students develop consistency and academic confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Supervision",
    description:
      "Students are supported through a carefully supervised residential environment with responsible staff and wardens.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Wellness",
    description:
      "Regular sports, exercise and outdoor activities encourage physical fitness, teamwork and healthy habits.",
  },
  {
    icon: Users,
    title: "Community & Friendship",
    description:
      "Living together helps students build meaningful friendships, communication skills and a strong sense of community.",
  },
  {
    icon: Heart,
    title: "Values & Character",
    description:
      "Daily life encourages discipline, responsibility, empathy, respect and independence.",
  },
];

const boardingHighlights = [
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description: "A secure and carefully supervised residential setting.",
  },
  {
    icon: Clock3,
    title: "Structured Routine",
    description: "A balanced daily schedule combining study, activity and rest.",
  },
  {
    icon: BookOpen,
    title: "Study Support",
    description: "Dedicated academic hours to encourage focused learning.",
  },
  {
    icon: Heart,
    title: "Personal Care",
    description: "A supportive environment where every student matters.",
  },
];

const boardingJourney = [
  {
    number: "01",
    title: "Settle In",
    description:
      "Students become comfortable in their new environment while developing confidence and independence.",
  },
  {
    number: "02",
    title: "Build Routine",
    description:
      "A structured daily rhythm helps students manage academics, activities, personal responsibilities and rest.",
  },
  {
    number: "03",
    title: "Grow Together",
    description:
      "Shared experiences encourage friendship, teamwork, communication and social development.",
  },
  {
    number: "04",
    title: "Become Independent",
    description:
      "Students gradually develop responsibility, self-discipline and life skills that stay with them beyond school.",
  },
];

export default function BoardingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#eef5f1] via-[#faf8f2] to-[#eef5f1]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-4 md:px-8 lg:px-16 pt-8 md:pt-12 pb-20 md:pb-28">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] md:rounded-[44px] shadow-[0_30px_100px_rgba(0,0,0,0.18)]"
          >

            {/* IMAGE */}

            <Image
              src="/images/boarding/hostel.jpeg"
              alt="Gurukulam The School Boarding House"
              width={1800}
              height={1000}
              priority
              className="w-full h-[600px] md:h-[720px] object-cover"
            />

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

            {/* HERO CONTENT */}

            <div className="absolute inset-0 flex items-end">

              <div className="w-full p-6 md:p-12 lg:p-16">

                <div className="max-w-4xl">

                  {/* Badge */}

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-medium mb-6"
                  >
                    <Sparkles className="w-4 h-4 text-[#E4CC6F]" />
                    Residential Life at Gurukulam
                  </motion.div>

                  {/* Heading */}

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                    }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
                  >
                    A Home Away
                    <br />
                    <span className="text-[#E4CC6F]">
                      From Home.
                    </span>
                  </motion.h1>

                  {/* Description */}

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                    }}
                    className="text-white/85 text-base md:text-xl leading-relaxed mt-6 max-w-2xl"
                  >
                    A safe, nurturing and disciplined boarding
                    environment where students learn to live,
                    learn, grow and thrive together.
                  </motion.p>

                  {/* Buttons */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5,
                    }}
                    className="flex flex-wrap gap-4 mt-8"
                  >

                    <Link
                      href="/Admission/ApplyOnline"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#156445] font-bold shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      Apply for Admission
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/Boarding/Daily-Schedule"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      View Daily Routine
                    </Link>

                  </motion.div>

                </div>

              </div>

            </div>

            {/* HOSTEL BADGE */}

            <div className="absolute top-6 right-6 md:top-10 md:right-10">

              <div className="hidden sm:flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 text-white">

                <div className="w-10 h-10 rounded-xl bg-[#E4CC6F]/20 flex items-center justify-center">

                  <ShieldCheck className="w-5 h-5 text-[#E4CC6F]" />

                </div>

                <div>
                  <p className="text-xs text-white/60">
                    Boarding Facility
                  </p>

                  <p className="font-semibold">
                    Boys' Hostel
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
          >

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 text-[#156445] font-semibold text-sm mb-4">

                <span className="w-8 h-[2px] bg-[#156445]" />

                LIFE AT GURUKULAM

              </div>

              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">

                More Than a Place
                <br />

                <span className="bg-gradient-to-r from-[#156445] to-[#296236] bg-clip-text text-transparent">
                  To Stay.
                </span>

              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-6">
                At Gurukulam The School, boarding is designed
                to be an extension of the learning experience.
                Students live in an environment that encourages
                independence, discipline, friendship and
                personal growth.
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                With dedicated supervision, structured routines
                and opportunities for recreation and reflection,
                residential life helps students develop the
                confidence and life skills they need for the
                future.
              </p>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute -inset-3 bg-gradient-to-r from-[#156445]/20 to-[#E4CC6F]/20 blur-2xl rounded-3xl" />

              <div className="relative bg-white rounded-3xl border border-[#156445]/10 shadow-xl p-7 md:p-9">

                <div className="flex items-center gap-4 mb-7">

                  <div className="w-12 h-12 rounded-2xl bg-[#156445]/10 flex items-center justify-center">

                    <Home className="w-6 h-6 text-[#156445]" />

                  </div>

                  <div>

                    <h3 className="font-bold text-xl text-gray-900">
                      Boarding Philosophy
                    </h3>

                    <p className="text-sm text-gray-500">
                      Learn • Live • Grow
                    </p>

                  </div>

                </div>

                <div className="space-y-5">

                  {[
                    "A caring residential environment",
                    "Balanced academic and personal development",
                    "Structured routines and responsible living",
                    "Opportunities to build confidence and independence",
                  ].map((text, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle2 className="w-5 h-5 text-[#156445] shrink-0 mt-0.5" />

                      <p className="text-gray-600 text-sm md:text-base">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          HIGHLIGHTS
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#156445]/10 text-[#156445] text-sm font-semibold mb-5">

              <Star className="w-4 h-4" />

              THE BOARDING EXPERIENCE

            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900">

              Designed Around
              <span className="text-[#156445]">
                {" "}Student Well-being
              </span>

            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-base md:text-lg">
              Every part of residential life is thoughtfully
              designed to help students feel secure, supported
              and prepared to grow.
            </p>

          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {boardingHighlights.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="bg-white rounded-2xl border border-[#156445]/10 shadow-md p-6 hover:shadow-xl transition-all duration-300"
                >

                  <div className="w-12 h-12 rounded-xl bg-[#156445]/10 flex items-center justify-center mb-5">

                    <Icon className="w-6 h-6 text-[#156445]" />

                  </div>

                  <h3 className="font-bold text-lg text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mt-2">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY BOARDING
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 py-20 md:py-28 bg-white/50">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="max-w-3xl mb-14"
          >

            <div className="flex items-center gap-3 text-[#156445] text-sm font-semibold mb-4">

              <span className="w-8 h-[2px] bg-[#156445]" />

              WHY BOARDING?

            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">

              Helping Students Become
              <span className="text-[#156445]">
                {" "}Confident & Independent
              </span>

            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {experiences.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative"
                >

                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#156445] to-[#E4CC6F] opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

                  <div className="relative h-full bg-white rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-xl p-7 md:p-8 transition-all duration-500">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#156445] to-[#0D6453] flex items-center justify-center mb-6 shadow-lg">

                      <Icon className="w-6 h-6 text-white" />

                    </div>

                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mt-3">
                      {item.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[#156445] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">

                      Learn more

                      <ArrowRight className="w-4 h-4" />

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          SAFETY / CARE SECTION
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 py-20 md:py-28">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[36px] bg-[#0D6453] shadow-[0_25px_80px_rgba(13,100,83,0.25)]">

            {/* Decorative */}

            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/5 blur-2xl" />

            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#E4CC6F]/10 blur-2xl" />

            <div className="relative grid lg:grid-cols-2">

              {/* LEFT */}

              <div className="p-8 md:p-12 lg:p-16">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm font-semibold mb-6">

                  <ShieldCheck className="w-4 h-4 text-[#E4CC6F]" />

                  SAFETY & CARE

                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">

                  A Place Where
                  <br />

                  <span className="text-[#E4CC6F]">
                    Students Feel Safe.
                  </span>

                </h2>

                <p className="text-white/75 text-base md:text-lg leading-relaxed mt-6 max-w-xl">
                  We understand that sending a child to
                  boarding school is a significant decision.
                  Our residential environment is designed
                  around care, supervision, discipline and
                  student well-being.
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mt-8">

                  {[
                    {
                      icon: ShieldCheck,
                      text: "Supervised environment",
                    },
                    {
                      icon: Clock3,
                      text: "Structured daily routine",
                    },
                    {
                      icon: Heart,
                      text: "Student-focused care",
                    },
                    {
                      icon: Users,
                      text: "Supportive community",
                    },
                  ].map((item, index) => {

                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >

                        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">

                          <Icon className="w-4 h-4 text-[#E4CC6F]" />

                        </div>

                        <span className="text-white/85 text-sm">
                          {item.text}
                        </span>

                      </div>
                    );
                  })}

                </div>

              </div>

              {/* RIGHT VISUAL */}

              <div className="relative min-h-[360px] lg:min-h-full">

                <Image
                  src="/images/boarding/hostel.jpeg"
                  alt="Gurukulam boarding environment"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[#0D6453]/35" />

                <div className="absolute inset-0 flex items-center justify-center p-8">

                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 text-center max-w-sm">

                    <Heart className="w-10 h-10 text-[#E4CC6F] mx-auto mb-4" />

                    <h3 className="text-2xl font-bold text-white">
                      Care Beyond the Classroom
                    </h3>

                    <p className="text-white/75 text-sm mt-3 leading-relaxed">
                      Boarding life at Gurukulam is about
                      creating an environment where students
                      can learn, connect and grow with confidence.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOARDING JOURNEY
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-14"
          >

            <div className="inline-flex items-center gap-2 text-[#156445] font-semibold text-sm mb-4">

              <GraduationCap className="w-4 h-4" />

              THE BOARDING JOURNEY

            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900">

              Growing Through
              <span className="text-[#156445]">
                {" "}Every Experience
              </span>

            </h2>

          </motion.div>

          <div className="relative">

            {/* Line */}

            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#156445]/15 -translate-x-1/2" />

            <div className="space-y-8 md:space-y-0">

              {boardingJourney.map((item, index) => {

                const isLeft =
                  index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: isLeft ? -30 : 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className={`relative md:flex items-center ${
                      isLeft
                        ? "md:justify-start"
                        : "md:justify-end"
                    }`}
                  >

                    <div className="w-full md:w-[45%]">

                      <div className="bg-white rounded-2xl border border-[#156445]/10 shadow-md p-6 hover:shadow-xl transition-all">

                        <div className="flex items-start gap-4">

                          <div className="text-3xl font-black text-[#156445]/20">
                            {item.number}
                          </div>

                          <div>

                            <h3 className="text-xl font-bold text-gray-900">
                              {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mt-2">
                              {item.description}
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* CENTER DOT */}

                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#156445] border-4 border-[#eef5f1]" />

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          DAILY ROUTINE CTA
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[32px] bg-white border border-[#156445]/10 shadow-xl">

            <div className="absolute top-0 right-0 w-80 h-80 bg-[#156445]/5 rounded-full blur-3xl" />

            <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8 p-8 md:p-12">

              <div>

                <div className="flex items-center gap-2 text-[#156445] font-semibold text-sm mb-3">

                  <Clock3 className="w-4 h-4" />

                  LIFE AT GURUKULAM

                </div>

                <h2 className="text-2xl md:text-4xl font-black text-gray-900">
                  Explore a Day in Boarding Life
                </h2>

                <p className="text-gray-600 mt-3 max-w-2xl">
                  Discover how academics, wellness, sports,
                  recreation and rest come together in a
                  thoughtfully structured residential routine.
                </p>

              </div>

              <Link
                href="/Boarding/Daily-Schedule"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#156445] text-white font-semibold shadow-lg hover:bg-[#0D6453] hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                View Daily Schedule
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 pb-10">

        <div className="relative overflow-hidden rounded-[40px] max-w-7xl mx-auto bg-gradient-to-br from-[#0D6453] via-[#156445] to-[#296236] px-7 md:px-16 py-16 md:py-24 text-center shadow-[0_25px_80px_rgba(21,100,69,0.3)]">

          {/* Decorative */}

          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E4CC6F]/20 rounded-full blur-3xl" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm font-medium mb-6">

              <Sparkles className="w-4 h-4 text-[#E4CC6F]" />

              BEGIN THE JOURNEY

            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">

              Give Your Child
              <br />

              <span className="text-[#E4CC6F]">
                A Place to Grow.
              </span>

            </h2>

            <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              Join Gurukulam The School and become part of
              a residential community built around learning,
              character, confidence and holistic development.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">

              <Link
                href="/Admission/ApplyOnline"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#156445] font-bold shadow-xl hover:scale-105 transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/Contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4" />
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}