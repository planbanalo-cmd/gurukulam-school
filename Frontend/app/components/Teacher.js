'use client';

export default function Teachers() {
  const teachers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Head of Mathematics',
      description: 'M.Sc, B.Ed with 15+ years of teaching experience in mathematics.',
      initials: 'RK'
    },
    {
      name: 'Ms. Priya Sharma',
      position: 'English Language Specialist',
      description: 'B.A, B.Ed focused on developing communication and language skills.',
      initials: 'PS'
    },
    {
      name: 'Mr. Arvind Singh',
      position: 'Science Department Lead',
      description: 'M.Sc Physics, B.Ed with expertise in practical science education.',
      initials: 'AS'
    },
    {
      name: 'Ms. Deepika Patel',
      position: 'Social Studies Coordinator',
      description: 'M.A History, B.Ed passionate about developing historical consciousness.',
      initials: 'DP'
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.7s ease-out forwards;
        }

        .teacher-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
        }

        .teacher-card:hover {
          transform: translateY(-12px);
          border-color: rgb(249, 115, 22);
          box-shadow: 0 25px 50px rgba(249, 115, 22, 0.15);
        }

        .avatar-container {
          position: relative;
          overflow: hidden;
        }

        .avatar-circle {
          transition: all 0.4s ease;
        }

        .teacher-card:hover .avatar-circle {
          transform: scale(1.1);
        }

        .avatar-bg {
          background: linear-gradient(135deg, rgb(249, 115, 22), rgb(217, 119, 6));
        }

        .teacher-card:hover .avatar-bg {
          background: linear-gradient(135deg, rgb(249, 115, 22), rgb(234, 179, 8));
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4 animate-fade-in-up">
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              Meet Our Faculty
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up text-balance" style={{animationDelay: '0.1s'}}>
            Our Teachers
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Dedicated educators committed to nurturing excellence and developing well-rounded individuals through passion and expertise.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="teacher-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl flex flex-col h-full border border-slate-100"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Avatar Section */}
              <div className="avatar-bg avatar-container h-32 md:h-40 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20 bg-white/10"></div>
                <div className="avatar-circle w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center text-white text-xl md:text-3xl font-bold shadow-lg">
                  {teacher.initials}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Name */}
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">
                  {teacher.name}
                </h3>

                {/* Position */}
                <p className="text-orange-600 font-semibold text-sm mb-4 inline-block">
                  {teacher.position}
                </p>

                {/* Divider */}
                <div className="w-8 h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-4"></div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {teacher.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
