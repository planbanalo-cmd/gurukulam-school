import React from 'react';

export default function Courses() {
  const courses = [
    {
      title: 'Pre-Primary Education',
      description: 'Nurturing young minds with age-appropriate learning activities and play-based education.',
      students: '120'
    },
    {
      title: 'Primary Education',
      description: 'Building strong foundation in reading, writing, mathematics and science.',
      students: '280'
    },
    {
      title: 'Secondary Education',
      description: 'Comprehensive education with focus on critical thinking and skill development.',
      students: '350'
    },
    {
      title: 'Higher Secondary Education',
      description: 'Advanced subjects preparing students for higher education and careers.',
      students: '210'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive education programs designed to develop knowledge, skills and character.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-orange-600">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">{course.description}</p>
              <div className="flex justify-between items-center pt-4 border-t border-orange-200">
                <span className="text-sm text-gray-600">Students enrolled</span>
                <span className="text-2xl font-bold text-orange-600">{course.students}</span>
              </div>
              <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 transition duration-300 text-white py-2 rounded-lg font-semibold text-sm md:text-base">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
