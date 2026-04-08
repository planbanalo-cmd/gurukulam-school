import { Shield, GraduationCap, Users, Home, Lightbulb, Trophy } from 'lucide-react';

export default function WhatWeOffer() {
  const offers = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
    },
    {
      icon: GraduationCap,
      title: 'Regular Classes',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
    },
    {
      icon: Users,
      title: 'Certified Teachers',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
    },
    {
      icon: Home,
      title: 'Sufficient Classrooms',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Lessons',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
    },
    {
      icon: Trophy,
      title: 'Sports Facilities',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-4 hover:shadow-lg rounded-lg transition duration-300">
                <div className="mb-6">
                  <Icon className="w-14 h-14 md:w-16 md:h-16 text-orange-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{offer.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{offer.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
