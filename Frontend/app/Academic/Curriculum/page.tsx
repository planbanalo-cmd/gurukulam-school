"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  MonitorSmartphone,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const classesOffered = [
  {
    number: "01",
    title: "Pre-Primary",
    classes: "Nursery – KG",
    description:
      "A nurturing foundation built around play-based, activity-oriented learning that develops curiosity, confidence and essential early skills.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Primary School",
    classes: "Class I – V",
    description:
      "Strong academic fundamentals are developed through interactive teaching, practical activities and engaging classroom experiences.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Middle School",
    classes: "Class VI – VIII",
    description:
      "Students explore advanced concepts while developing analytical thinking, subject knowledge and independent learning skills.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Secondary School",
    classes: "Class IX – X",
    description:
      "Focused academic preparation with emphasis on conceptual clarity, regular assessment and readiness for board examinations.",
    icon: Target,
  },
  {
    number: "05",
    title: "Senior Secondary",
    classes: "Class XI – XII",
    description:
      "Stream-based education combined with career guidance and preparation for higher education and future academic opportunities.",
    icon: GraduationCap,
  },
];

const curriculumFeatures = [
  {
    icon: BookOpen,
    title: "Activity-Based Learning",
    description:
      "Interactive and experiential learning methods help students understand concepts more deeply and apply knowledge confidently.",
  },
  {
    icon: CheckCircle2,
    title: "Continuous Evaluation",
    description:
      "Regular assessments and feedback help teachers identify progress, strengths and areas requiring additional support.",
  },
  {
    icon: MonitorSmartphone,
    title: "Technology Integration",
    description:
      "Modern digital resources and technology-supported teaching create an engaging and contemporary learning environment.",
  },
  {
    icon: Users,
    title: "Life Skills Development",
    description:
      "Students develop communication, collaboration, leadership, decision-making and problem-solving skills alongside academics.",
  },
  {
    icon: Trophy,
    title: "Future Readiness",
    description:
      "A strong academic foundation prepares students for higher education, competitive examinations and future career opportunities.",
  },
  {
    icon: Target,
    title: "Value-Based Education",
    description:
      "The curriculum encourages discipline, responsibility, ethics, respect and positive character development.",
  },
];

const learningPrinciples = [
  "Conceptual understanding",
  "Critical and analytical thinking",
  "Creativity and innovation",
  "Practical application of knowledge",
  "Communication and collaboration",
  "Character and value development",
];

export default function CurriculumPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#eef5f1] via-[#faf8f2] to-[#eef5f1]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative px-4 md:px-8 lg:px-16 pt-8 md:pt-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[36px] md:rounded-[46px] bg-gradient-to-br from-[#0D6453] via-[#156445] to-[#296236] shadow-[0_30px_90px_rgba(13,100,83,0.25)]"
          >
            {/* Decorative circles */}
            <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />

            <div className="absolute -bottom-48 -left-48 w-[550px] h-[550px] rounded-full bg-[#E4CC6F]/10 blur-3xl" />

            <div className="absolute top-16 right-20 w-32 h-32 rounded-full border border-white/10" />

            <div className="absolute bottom-16 right-56 w-12 h-12 rounded-full bg-[#E4CC6F]/10" />

            {/* Hero content */}
            <div className="relative z-10 px-7 py-16 md:px-14 md:py-20 lg:px-20">
              <div className="max-w-4xl">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
                >
                  <GraduationCap className="w-4 h-4 text-[#E4CC6F]" />
                  Academic Excellence
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-7 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white"
                >
                  A Curriculum Designed
                  <br />
                  <span className="text-[#E4CC6F]">
                    For Future Leaders
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-6 max-w-3xl text-base md:text-xl leading-relaxed text-white/75"
                >
                  Gurukulam The School follows a structured curriculum aligned
                  with CBSE guidelines, combining academic excellence with
                  creativity, critical thinking, values and holistic
                  development.
                </motion.p>

                {/* Quick points */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="flex flex-wrap gap-3 mt-9"
                >
                  {[
                    "CBSE Aligned",
                    "Holistic Development",
                    "Future Focused",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-md"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E4CC6F]" />
                      {item}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 text-[#156445] text-sm font-bold mb-5">
                <span className="w-9 h-[2px] bg-[#156445]" />
                OUR ACADEMIC APPROACH
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight text-gray-900">
                Learning That Goes
                <br />
                <span className="bg-gradient-to-r from-[#156445] to-[#296236] bg-clip-text text-transparent">
                  Beyond the Classroom
                </span>
              </h2>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600">
                At Gurukulam The School, our curriculum is thoughtfully
                designed to provide students with a strong academic
                foundation while encouraging curiosity, creativity and
                independent thinking.
              </p>

              <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
                We balance academic learning with co-curricular activities,
                practical experiences and life skills so that students develop
                the confidence and capabilities required for the future.
              </p>
            </div>

            {/* Right card */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-[30px] bg-gradient-to-r from-[#156445]/20 to-[#E4CC6F]/20 blur-2xl" />

              <div className="relative rounded-[28px] border border-[#156445]/10 bg-white p-7 md:p-9 shadow-xl">
                <div className="flex items-center gap-4 mb-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#156445]/10">
                    <BookOpen className="h-7 w-7 text-[#156445]" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Our Focus
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-gray-900">
                      Complete Student Development
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {learningPrinciples.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#156445]" />

                      <span className="text-sm md:text-base text-gray-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CLASSES OFFERED
      ====================================================== */}
      <section className="px-4 md:px-8 lg:px-16 py-20 md:py-28 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#156445]/10 px-4 py-2 text-sm font-semibold text-[#156445] mb-5">
              <GraduationCap className="w-4 h-4" />
              ACADEMIC JOURNEY
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Classes &{" "}
              <span className="text-[#156445]">
                Learning Stages
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Our academic structure supports students progressively from
              foundational learning to senior secondary education.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-5 bottom-5 hidden md:block w-px bg-gradient-to-b from-[#156445] via-[#0D6453] to-[#E4CC6F]" />

            <div className="space-y-6">
              {classesOffered.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative md:pl-16"
                  >
                    {/* Number */}
                    <div className="absolute left-0 top-6 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#156445] to-[#0D6453] text-white shadow-lg ring-8 ring-[#eef5f1]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="group rounded-3xl border border-[#156445]/10 bg-white p-6 md:p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className="flex flex-col md:flex-row md:items-center gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#156445]/10 text-[#156445] md:hidden">
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-[#156445]/10 px-3 py-1 text-xs font-bold text-[#156445]">
                              {item.number}
                            </span>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                              {item.title}
                            </h3>

                            <span className="text-sm font-semibold text-[#156445]">
                              {item.classes}
                            </span>
                          </div>

                          <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-600">
                            {item.description}
                          </p>
                        </div>

                        <div className="hidden lg:flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef5f1] text-[#156445]">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRICULUM FEATURES
      ====================================================== */}
      <section className="px-4 md:px-8 lg:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#156445]/10 px-4 py-2 text-sm font-semibold text-[#156445] mb-5">
              <Brain className="w-4 h-4" />
              OUR CURRICULUM
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Built Around{" "}
              <span className="text-[#156445]">
                Meaningful Learning
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Every element of our curriculum is designed to make learning
              engaging, purposeful and relevant to the student's future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -7 }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#156445] to-[#E4CC6F] opacity-0 blur group-hover:opacity-20 transition-all duration-500" />

                  <div className="relative h-full rounded-3xl border border-gray-100 bg-white p-7 shadow-md transition-all duration-300 group-hover:shadow-xl">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#156445] to-[#0D6453] shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ACADEMIC PHILOSOPHY
      ====================================================== */}
      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0D6453] via-[#156445] to-[#296236] shadow-[0_25px_80px_rgba(13,100,83,0.25)]">
            <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#E4CC6F]/10 blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-8 md:p-12 lg:p-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  <Lightbulb className="w-4 h-4 text-[#E4CC6F]" />
                  LEARNING PHILOSOPHY
                </div>

                <h2 className="mt-6 text-3xl md:text-5xl font-black leading-tight text-white">
                  Education That Builds
                  <br />
                  <span className="text-[#E4CC6F]">
                    Confidence & Character
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-white/75">
                  We believe education should prepare students not only for
                  examinations, but also for life. Our curriculum encourages
                  students to think independently, communicate confidently
                  and become responsible members of society.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Academic Excellence",
                  "Critical Thinking",
                  "Creativity",
                  "Leadership",
                  "Discipline",
                  "Strong Values",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#E4CC6F]" />

                    <span className="text-sm text-white/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-4 md:px-8 lg:px-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-[#156445]/10 bg-white p-8 md:p-12 shadow-xl"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#156445]/10">
              <GraduationCap className="h-7 w-7 text-[#156445]" />
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl font-black text-gray-900">
              Building a Stronger Future Through Education
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600">
              At Gurukulam The School, every learning experience is an
              opportunity to discover potential, develop confidence and
              prepare for tomorrow.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}