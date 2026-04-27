'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const items = [
    {
        name: "Mrs. Neha Sharma",
        role: "Parent",
        review: "Gurukulam has truly transformed my child's confidence and academic performance.",
        image: "/images/parent1.jpg",
    },
    {
        name: "Aarav Singh",
        role: "Student - Class 10",
        review: "Teachers explain concepts in a very simple way. I enjoy learning here.",
        image: "/images/student1.jpg",
    },
    {
        name: "Mr. Rajesh Verma",
        role: "Parent",
        review: "Best decision for my child's future. Highly recommended school.",
        image: "/images/parent2.jpg",
    },
    {
        name: "Simran Kaur",
        role: "Student - Class 12",
        review: "The guidance here helped me achieve my goals.",
        image: "/images/student2.jpg",
    },
    {
        name: "Mrs. Pooja Yadav",
        role: "Parent",
        review: "Excellent environment and discipline. My child loves going to school.",
        image: "/images/parent3.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 via-white to-orange-50">

            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                    What Parents & Students Say
                </h2>
            </div>

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10"
            >
                {items.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="bg-white rounded-2xl shadow-xl p-6 text-center transition hover:scale-105">

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-orange-100 mb-4"
                            />

                            <p className="text-gray-600 text-sm italic mb-4">
                                "{item.review}"
                            </p>

                            <h3 className="font-semibold text-lg text-gray-800">
                                {item.name}
                            </h3>

                            <span className="text-orange-500 text-sm">
                                {item.role}
                            </span>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}