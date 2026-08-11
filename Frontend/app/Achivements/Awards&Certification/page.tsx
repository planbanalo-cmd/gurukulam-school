'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Award,
  BadgeCheck,
  Medal,
  Trophy,
  Star,
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Recognized Excellence',
    desc: 'Awarded for academic excellence and overall performance.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified & Approved',
    desc: 'Fully certified and educationally approved.',
  },
  {
    icon: Medal,
    title: 'Inspiring Leadership',
    desc: 'Recognized leadership in school activities.',
  },
  {
    icon: Trophy,
    title: 'Achievements',
    desc: 'Academic, sports, and co-curricular excellence.',
  },
  {
    icon: Star,
    title: 'Continuous Growth',
    desc: 'Focused quality education and student development.',
  },
];


const achievements = [
  '/images/studentachivement/award1.jpeg',
  '/images/studentachivement/award2.jpeg',
  '/images/studentachivement/award3.jpeg',
  '/images/studentachivement/award4.jpeg',
];

export default function AwardsCertificationPage() {
  return (
    <div className="min-h-screen bg-[#E8EFE9] overflow-hidden">
      {/* HERO */}
      <section className="relative py-20 px-4 md:px-10 lg:px-20">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F4EE] via-[#E4ECE6] to-[#DCE7E1]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#146B4D] uppercase">
              Awards & Certification
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-gray-700 leading-relaxed">
              Gurukulam The School takes pride in its achievements,
              certifications, and outstanding student performance.
            </p>
          </motion.div>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-16">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[24px] shadow-xl border border-[#D8C98D]/30 p-6 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#146B4D] text-white flex items-center justify-center">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#146B4D]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* TOPPERS SECTION */}
         
          {/* AWARDS */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <div className="bg-[#146B4D] rounded-[32px] shadow-2xl p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
                Awards & Certifications
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="relative h-[350px] rounded-[24px] overflow-hidden shadow-2xl bg-white"
                  >
                    <Image
                      src={img}
                      alt={`Award ${index + 1}`}
                      fill
                      sizes="(max-width:768px) 100vw,
                             (max-width:1200px) 50vw,
                             25vw"
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CERTIFICATES */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <div className="bg-[#146B4D] rounded-[32px] shadow-2xl p-6 md:p-10 relative overflow-hidden">
              {/* DECORATIVE BOXES */}
              <div className="absolute top-10 left-10 w-16 h-16 rounded-2xl bg-[#D8C98D]/10" />
              <div className="absolute bottom-10 right-10 w-20 h-20 rounded-2xl bg-[#D8C98D]/10" />

              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
                Certificates
              </h2>

              <div className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="relative w-full md:w-[450px] h-[600px] bg-white rounded-[24px] overflow-hidden shadow-2xl border border-[#D8C98D]/30">
                  <Image
                    src="/images/CBSEAffiliation.jpeg"
                    alt="Certificate"
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>

                <p className="mt-5 text-white text-center text-lg">
                  CBSE Affiliation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}