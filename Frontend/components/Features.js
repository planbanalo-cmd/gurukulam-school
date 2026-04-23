import React, { useState } from 'react';
import { Users, BookOpen, Dumbbell } from 'lucide-react';

export default function Features() {
  const [expanded, setExpanded] = useState(null);

  const features = [
    {
      icon: Users,
      title: 'Residential School',
      description:
        'Our residential program provides a safe, disciplined, and nurturing environment where students live, learn, and grow together. With a structured routine, personalized care, and continuous academic support, we ensure holistic development beyond the classroom. Students build independence, strong values, and lifelong friendships while staying focused on their goals.'
    },
    {
      icon: BookOpen,
      title: 'Competitive Exam Preparation',
      description:
        'We prepare students to excel in competitive exams through a focused and result-oriented approach. With expert faculty, structured study plans, and regular assessments, students develop strong conceptual clarity and problem-solving skills. Our program builds confidence and equips learners to succeed in exams like Olympiads and other national-level competitions.'
    },
    {
      icon: BookOpen,
      title: 'Sports Excellence', 
      description:
        'At Gurukulam, sports are an integral part of education. We offer professional training, modern facilities, and dedicated coaching to help students excel in various sports. Our aim is to develop teamwork, discipline, physical fitness, and a winning mindset while encouraging students to pursue their passion for sports.'
    },
    {
      icon: Dumbbell,
      title: 'Primary Wing',
      description:
        'Our Primary Wing focuses on building a strong foundation for young learners in a joyful and engaging environment. Through activity-based learning, creative exploration, and individual attention, we nurture curiosity, confidence, and essential life skills. We ensure every child enjoys learning while developing academically and socially.'
    }
  ];

  const toggleReadMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isExpanded = expanded === index;

            const shortText =
              feature.description.length > 120
                ? feature.description.slice(0, 120) + '...'
                : feature.description;

            return (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-orange-600" />
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {isExpanded ? feature.description : shortText}
                </p>

                {feature.description.length > 120 && (
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="mt-2 text-orange-600 text-sm font-semibold hover:underline"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}