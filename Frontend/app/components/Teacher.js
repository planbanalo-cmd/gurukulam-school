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
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Teachers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Dedicated educators committed to nurturing excellence and developing well-rounded individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              {/* Avatar */}
              <div className="bg-orange-600 h-32 md:h-40 flex items-center justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl md:text-4xl font-bold">
                  {teacher.initials}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                <p className="text-orange-600 font-semibold text-sm md:text-base mb-3">{teacher.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{teacher.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
