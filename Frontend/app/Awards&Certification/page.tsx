'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Trophy,
  ShieldCheck,
  GraduationCap,
  Music,
  BadgeCheck,
  X,
  Star,
} from 'lucide-react';

export default function AchievementsPage() {

  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

  const achievementSections = [
    {
      title: 'Academic Awards',
      icon: <GraduationCap size={22} />,
      cover: '/images/awards/academic-cover.jpg',

      images: [
        {
          image: '/images/awards/academic1.jpg',
          title: 'Board Exam Toppers',
          desc: 'Students achieved outstanding CBSE board examination results with district merit positions.',
        },

        {
          image: '/images/awards/academic2.jpg',
          title: 'Olympiad Achievement',
          desc: 'Students secured excellent ranks in Science & Mathematics Olympiads.',
        },

        {
          image: '/images/awards/academic3.jpg',
          title: 'Scholarship Winners',
          desc: 'Meritorious students received scholarships for academic excellence.',
        },

        {
          image: '/images/awards/academic4.jpg',
          title: 'Academic Excellence',
          desc: 'Recognition for consistent outstanding academic performance.',
        },
      ],

      achievements: [
        'Board Exam Results & Toppers',
        'District / School Rank Holders',
        'Olympiad Achievements',
        'Scholarship Winners',
      ],
    },

    {
      title: 'School-Level & Institutional Awards',
      icon: <Award size={22} />,
      cover: '/images/awards/school-cover.jpg',

      images: [
        {
          image: '/images/awards/school1.jpg',
          title: 'Best School Award',
          desc: 'Recognized for excellence in education and holistic development.',
        },

        {
          image: '/images/awards/school2.jpg',
          title: 'Educational Excellence',
          desc: 'Awarded for innovation in teaching and learning.',
        },

        {
          image: '/images/awards/school3.jpg',
          title: 'Institutional Recognition',
          desc: 'Recognized by educational organizations and institutions.',
        },
      ],

      achievements: [
        'Best School Recognition',
        'Excellence in Education',
        'Institutional Achievements',
      ],
    },

    {
      title: 'Sports Achievements',
      icon: <Trophy size={22} />,
      cover: '/images/awards/sports-cover.jpg',

      images: [
        {
          image: '/images/awards/sports1.jpg',
          title: 'District Championship',
          desc: 'Students won district-level sports competitions.',
        },

        {
          image: '/images/awards/sports2.jpg',
          title: 'State Medalists',
          desc: 'Outstanding achievements in state-level tournaments.',
        },

        {
          image: '/images/awards/sports3.jpg',
          title: 'Inter-School Winners',
          desc: 'Victory in multiple inter-school championships.',
        },

        {
          image: '/images/awards/sports4.jpg',
          title: 'Athletic Excellence',
          desc: 'Students excelled in athletics and team sports.',
        },
      ],

      achievements: [
        'District & State Medals',
        'Inter-School Competitions',
        'National Level Participation',
      ],
    },

    {
      title: 'Co-Curricular Achievements',
      icon: <Music size={22} />,
      cover: '/images/awards/cultural-cover.jpg',

      images: [
        {
          image: '/images/awards/cultural1.jpg',
          title: 'Debate Competition',
          desc: 'Students secured top positions in debate competitions.',
        },

        {
          image: '/images/awards/cultural2.jpg',
          title: 'Dance & Music',
          desc: 'Recognition in cultural and performing arts events.',
        },

        {
          image: '/images/awards/cultural3.jpg',
          title: 'Science Exhibition',
          desc: 'Innovative projects showcased in exhibitions.',
        },
      ],

      achievements: [
        'Debate & Quiz Competitions',
        'Dance & Music Achievements',
        'Science Exhibition Recognition',
      ],
    },

    {
      title: 'Infrastructure & Safety Certifications',
      icon: <ShieldCheck size={22} />,
      cover: '/images/awards/safety-cover.jpg',

      images: [
        {
          image: '/images/awards/safety1.jpg',
          title: 'Fire Safety Certificate',
          desc: 'Certified for maintaining fire safety standards.',
        },

        {
          image: '/images/awards/safety2.jpg',
          title: 'Building Safety',
          desc: 'Infrastructure verified and certified for student safety.',
        },

        {
          image: '/images/awards/safety3.jpg',
          title: 'Health & Sanitation',
          desc: 'Recognition for hygiene and sanitation excellence.',
        },
      ],

      achievements: [
        'Fire Safety Certificate',
        'Building Safety Certificate',
        'Health & Sanitation Standards',
      ],
    },

    {
      title: 'Quality & Standards',
      icon: <BadgeCheck size={22} />,
      cover: '/images/awards/quality-cover.jpg',

      images: [
        {
          image: '/images/awards/quality1.jpg',
          title: 'Smart School Initiative',
          desc: 'Implementation of modern digital learning systems.',
        },

        {
          image: '/images/awards/quality2.jpg',
          title: 'Educational Programs',
          desc: 'Participation in national educational initiatives.',
        },

        {
          image: '/images/awards/quality3.jpg',
          title: 'Quality Standards',
          desc: 'Commitment to high-quality educational practices.',
        },
      ],

      achievements: [
        'Digital / Smart School',
        'Educational Program Participation',
        'Quality Education Standards',
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[linear-gradient(120deg,#f5f1e8_0%,#eef5f1_40%,#f9f7f2_70%,#f5f1e8_100%)] py-16 px-4">

      {/* WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <img
          src="/images/GurukulamLogo.jpeg"
          alt="logo"
          className="w-[500px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/70 border border-[#156445]/20 shadow-md mb-6">
            <Star className="text-[#156445]" size={18} />
            <span className="text-[#156445] font-semibold text-sm tracking-wide">
              Excellence • Recognition • Success
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] bg-clip-text text-transparent">
            Awards & Certificates
          </h1>

          <p className="text-gray-700 mt-5 max-w-4xl mx-auto text-lg leading-relaxed">
           Gurukulam The School takes pride in its commitment to excellence in education. Our institution has been recognized for its high academic standards, innovative teaching methods, and holistic development approach. We have received numerous awards and certifications that reflect our dedication to providing quality.
          </p>

        </motion.div>

        {/* ALBUM GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {achievementSections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedAlbum(section)}
              className="relative group cursor-pointer"
            >

              {/* GLOW */}
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] opacity-20 blur-xl group-hover:opacity-40 transition duration-300"></div>

              {/* CARD */}
              <div className="relative h-full overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl border border-[#156445]/15 shadow-2xl">

                {/* COVER IMAGE */}
                <div className="relative h-64 overflow-hidden">

                  <img
                    src={section.cover}
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* TITLE */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

                    <div>
                      <h2 className="text-white text-2xl font-bold leading-tight">
                        {section.title}
                      </h2>

                      <p className="text-white/80 text-sm mt-1">
                        {section.images.length} Photos Available
                      </p>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      {section.icon}
                    </div>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                 

                  {/* BUTTON */}
                  <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#156445] to-[#0D6453] text-white font-semibold hover:opacity-90 transition">
                    View Album
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>

        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >

            {/* MODAL BOX */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative bg-white rounded-3xl max-w-7xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedAlbum(null)}
                className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center"
              >
                <X size={22} />
              </button>

              {/* HEADER IMAGE */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">

                <img
                  src={selectedAlbum.cover}
                  alt={selectedAlbum.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="absolute bottom-8 left-8">

                  <h2 className="text-white text-4xl md:text-5xl font-bold">
                    {selectedAlbum.title}
                  </h2>

                  <p className="text-white/80 text-lg mt-2">
                    Achievement Gallery Collection
                  </p>

                </div>

              </div>

              {/* GALLERY */}
              <div className="p-8">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {selectedAlbum.images.map((item: any, index: number) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white"
                    >

                      {/* IMAGE */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-5">

                        <h3 className="text-white text-xl font-bold mb-2">
                          {item.title}
                        </h3>

                        <p className="text-white/90 text-sm leading-relaxed">
                          {item.desc}
                        </p>

                      </div>

                    </motion.div>
                  ))}

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}