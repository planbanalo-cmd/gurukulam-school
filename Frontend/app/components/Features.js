import React from 'react';
import { Users, BookOpen, Dumbbell, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Users,
      title: 'Certified Teachers',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    },
    {
      icon: BookOpen,
      title: 'Special Education',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    },
    {
      icon: BookOpen,
      title: 'Book & Library',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    },
    {
      icon: Dumbbell,
      title: 'Sport Clubs',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-orange-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


