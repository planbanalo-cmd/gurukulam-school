'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Users,
  BookOpen,
  BrainCircuit,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const facultyFeatures = [
  {
    icon: GraduationCap,
    title: 'Qualified & Experienced',
    desc: 'Highly qualified educators with years of teaching expertise.',
  },
  {
    icon: Users,
    title: 'Student-Centric Approach',
    desc: 'Focused on helping every student learn effectively.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Development',
    desc: 'Teachers regularly participate in workshops and training.',
  },
  {
    icon: BrainCircuit,
    title: 'Mentorship & Guidance',
    desc: 'Providing academic and personal development support.',
  },
  {
    icon: Sparkles,
    title: 'Innovative Teaching',
    desc: 'Interactive teaching methods and smart learning.',
  },
];

const teachers = [
  {
    name: 'Archana Pandey',
    role: 'M3 Class',
    image: '/images/Faculty/PrePrimary/Archana.jpeg',
  },
  {
    name: 'Anju',
    role: '2nd Class',
    image: '/images/Faculty/PrePrimary/Anju.jpeg',
  },
  {
    name: 'Kavita',
    role: 'M2 Class',
    image: '/images/Faculty/PrePrimary/Kavita.jpeg',
  },
  {
    name: 'Gunjan',
    role: 'M3 Class',
    image: '/images/Faculty/PrePrimary/Gunjan.jpeg',
  },
  {
    name: 'Monika',
    role: 'Coordinator',
    image: '/images/Faculty/PrePrimary/MonikaCO.jpeg',
  },
  {
    name: 'Monika',
    role: 'Class 1',
    image: '/images/Faculty/PrePrimary/MonikaC1.jpeg',
  },
  {
    name: 'Monika',
    role: 'Class 1',
    image: '/images/Faculty/PrePrimary/Monika.jpeg',
  },
];
const seniorTeachers = [
  {
    name: 'Akansha Yadav',
    role: 'PGT English',
    image: '/images/Faculty/Senior/AkanshaYadav.jpeg',
  },
  {
    name: 'Anju',
    role: 'TGT',
    image: '/images/Faculty/Senior/Anju.jpeg',
  },

  {
    name: 'Kajal',
    role: 'PGT Chemistry',
    image: '/images/Faculty/Senior/Kajal.jpeg',
  },
  {
    name: 'Komal',
    role: 'Receptionist',
    image: '/images/Faculty/Senior/Komal.jpeg',
  },
  {
    name: 'Poonam',
    role: 'PGT Hindi',
    image: '/images/Faculty/Senior/Poonam.jpeg',
  },
  {
    name: 'Pinki',
    role: 'PRT',
    image: '/images/Faculty/Senior/Pinki.jpeg',
  },
  {
    name: 'Priya',
    role: 'PGT Eco & Bst',
    image: '/images/Faculty/Senior/Priya.jpeg',
  },
  {
    name: 'Pushpa',
    role: 'PGT Eco & Bst',
    image: '/images/Faculty/Senior/Pushpa.jpeg',
  }, {
    name: 'Tannu',
    role: 'PGT Eco & Bst',
    image: '/images/Faculty/Senior/Tannu.jpeg',
  }, {
    name: 'Khushwinder',
    role: 'PGT Eco & Bst',
    image: '/images/Faculty/Senior/Khushwinder.jpeg',
  }, {
    name: 'Vandana',
    role: 'PGT Eco & Bst',
    image: '/images/Faculty/Senior/Vandana.jpeg',
  },
  {
    name: 'Sumant',
    role: 'PGT Eco & Bst',
    image: '/images/Faculty/Senior/Sumant.jpeg',
  }, {
    name: 'VijenderSharma',
    role: 'PGT Eco & Bst',
    image: '/images/Faculty/Senior/VijenderSharma.jpeg',
  },
  {
    name: 'Vinay Sharma',
    role: 'PGT Eco & Bst',
    image: '/images/Faculty/Senior/VinaySharma.jpeg',
  },
  {
    name: 'Dhananjay',
    role: 'Coordinator',
    image: '/images/Faculty/Senior/Dhananjay.jpeg',
  },
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-[#F6F4EE] overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative py-20 px-4 md:px-10 lg:px-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/faculty/faculty-bg.jpg')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#F6F4EE]/90 backdrop-blur-[2px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#146B4D] uppercase">
              Faculty
            </h1>

            <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
              The backbone of Gurukulam The School is our dedicated,
              experienced, and student-centric faculty team.
            </p>
          </motion.div>

          {/* INTRO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-14 bg-white/95 backdrop-blur-md rounded-[28px] shadow-2xl border border-[#D8C98D]/40 p-6 md:p-10"
          >
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              At Gurukulam The School, our faculty is the foundation
              of our academic excellence. We are proud to have a team
              of highly qualified, passionate, and dedicated educators
              who are committed to nurturing and empowering students.
            </p>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-6">
              Our teachers inspire critical thinking, creativity, and
              confidence while ensuring every child receives
              personalized guidance and support.
            </p>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#146B4D] text-center mb-10">
              What Makes Our Faculty Special
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              {facultyFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="bg-[#146B4D] text-white rounded-[24px] p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                      <Icon size={32} />
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-white/85 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* PRE PRIMARY */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#146B4D] text-center mb-10">
              Pre-Primary Wing Teachers
            </h2>

            {/* GROUP IMAGE */}
            <div className="relative w-full flex items-center justify-center rounded-[30px] overflow-hidden shadow-2xl border border-[#D8C98D]/40 py-4">
             <Image
  src="/images/Faculty/PrePrimary/GroupPrePrimary.jpeg"
  alt="Faculty Group"
  width={1200}
  height={800}
  loading="lazy"
  placeholder="blur"
  blurDataURL="/images/Faculty/PrePrimary/GroupPrePrimary.jpeg"
  className="w-full h-auto object-contain"
/>
            </div>
            {/* TEACHERS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {teachers.map((teacher, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white rounded-[24px] overflow-hidden shadow-xl border border-[#D8C98D]/30"
                >
                  <div className="relative h-72 w-full bg-[#F6F4EE]">
                  <Image
  src={teacher.image}
  alt={teacher.name}
  fill
  loading="lazy"
  placeholder="blur"
  blurDataURL={teacher.image}
  sizes="(max-width: 768px) 100vw,
  (max-width: 1200px) 50vw,
  25vw"
  className="object-cover object-top"
/>
                  </div>

                  <div className="bg-[#146B4D] text-white text-center p-4">
                    <h3 className="font-semibold text-sm md:text-base">
                      {teacher.name}
                    </h3>

                    <p className="text-white/80 text-xs md:text-sm mt-1">
                      {teacher.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* NOTE */}
            <div className="mt-12 bg-white rounded-[24px] shadow-xl border border-[#D8C98D]/40 p-6 md:p-8 max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="text-[#146B4D] mt-1"
                  size={28}
                />

                <div>
                  <h3 className="text-xl font-bold text-[#146B4D]">
                    Note
                  </h3>

                  <ul className="mt-3 text-gray-700 space-y-2">
                    <li>• Nursery Class</li>
                    <li>• LKG Class</li>
                    <li>• UKG Class</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SENIOR WING */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#146B4D] text-center mb-10">
              Senior Wing Teachers
            </h2>

           <div className="relative w-full flex items-center justify-center rounded-[30px] overflow-hidden shadow-2xl border border-[#D8C98D]/40 py-4">
              <Image
                src="/images/Faculty/Senior/GroupSenior.jpeg"
                alt="Faculty Group"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {seniorTeachers.map((teacher, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white rounded-[24px] overflow-hidden shadow-xl border border-[#D8C98D]/30"
                >
                  <div className="relative h-72 w-full bg-[#F6F4EE]">
                   <Image
  src="/images/Faculty/Senior/GroupSenior.jpeg"
  alt="Faculty Group"
  width={1200}
  height={800}
  loading="lazy"
  placeholder="blur"
  blurDataURL="/images/Faculty/Senior/GroupSenior.jpeg"
  className="w-full h-auto object-contain"
/>
                  </div>

                  <div className="bg-[#146B4D] text-white text-center p-4">
                    <h3 className="font-semibold text-sm md:text-base">
                      {teacher.name}
                    </h3>

                    <p className="text-white/80 text-xs md:text-sm mt-1">
                      {teacher.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}