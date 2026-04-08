import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogs = [
    {
      title: 'Importance of Early Education in Child Development',
      author: 'Dr. Rajesh Kumar',
      date: 'March 15, 2024',
      excerpt: 'Early education plays a crucial role in developing cognitive, emotional and social skills in children. Learn how we nurture these abilities.',
      category: 'Education'
    },
    {
      title: 'Building Confidence Through Classroom Participation',
      author: 'Ms. Priya Sharma',
      date: 'March 10, 2024',
      excerpt: 'Active classroom participation helps students build confidence and develop communication skills essential for their future success.',
      category: 'Students'
    },
    {
      title: 'The Role of Technology in Modern Education',
      author: 'Mr. Arvind Singh',
      date: 'March 5, 2024',
      excerpt: 'Technology is transforming education by providing new tools and resources for interactive and engaging learning experiences.',
      category: 'Technology'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Stay informed with our latest news, updates and insights from the school.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
              {/* Category Badge */}
              <div className="bg-orange-600 px-4 py-2">
                <span className="text-white text-xs font-bold uppercase tracking-wide">{blog.category}</span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>

                {/* Meta */}
                <div className="flex flex-col gap-2 mb-4 text-xs md:text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{blog.excerpt}</p>

                {/* Read More Link */}
                <button className="flex items-center gap-2 text-orange-600 font-semibold text-sm hover:text-orange-700 transition group">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
