'use client';

import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

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

        .blog-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          border-color: rgb(249, 115, 22);
          box-shadow: 0 20px 40px rgba(249, 115, 22, 0.15);
        }

        .category-badge {
          transition: all 0.3s ease;
        }

        .blog-card:hover .category-badge {
          background: rgb(249, 115, 22);
          transform: scale(1.05);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4 animate-fade-in-up">
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              School Insights & News
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up text-balance" style={{animationDelay: '0.1s'}}>
            Latest News & Updates
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Stay informed with our latest news, updates, and insights from school activities, achievements, and educational developments.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl flex flex-col h-full border border-slate-100"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Category Badge */}
              <div className="relative h-12 bg-gradient-to-r from-orange-600 to-orange-700 flex items-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-white text-xs font-semibold uppercase tracking-widest">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-orange-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 line-clamp-2 leading-tight">
                  {blog.title}
                </h3>

                {/* Meta Information */}
                <div className="flex flex-col gap-3 mb-6 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Calendar className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <User className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <span>{blog.author}</span>
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow">
                  {blog.excerpt}
                </p>

                {/* Read More Button */}
                <button className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors group">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <p className="text-slate-600 text-lg mb-6">Want to read more from our school blog?</p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-amber-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
