'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  Globe,
  Camera,
  Play,
  
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // WHATSAPP FORM SUBMIT
  const handleWhatsAppSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const phoneNumber = '919996007479'; // YOUR WHATSAPP NUMBER

    const whatsappMessage = `
*New Contact Form Message*

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email}

📌 Subject: ${formData.subject}

📝 Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F6F4EE] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-24 px-4 md:px-10 lg:px-20 overflow-hidden bg-gradient-to-r from-[#146B4D] via-[#F6F4EE] to-[#146B4D]">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#146B4D]">
              Contact Us
            </h1>

            <p className="mt-6 text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              We are here to help you with admissions, academics,
              boarding facilities, transport, and all school-related
              queries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl border border-[#D8C98D]/40"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#146B4D]">
                Get In Touch
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Feel free to contact us for admissions, fee structure,
                boarding details, transport facilities, academic
                support, or general enquiries.
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {/* ADDRESS */}
              <div className="flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-[#146B4D]/10 flex items-center justify-center">
                  <MapPin className="text-[#146B4D]" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#146B4D]">
                    School Address
                  </h3>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Gurukulam The School CBSE Residential School
                    <br />
                    VPO Masani, NH48, Near Masani Barrage,
                    <br />
                    Rewari, Haryana 123106
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-[#146B4D]/10 flex items-center justify-center">
                  <Phone className="text-[#146B4D]" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#146B4D]">
                    Phone Number
                  </h3>

                  <p className="text-gray-600 mt-2">
                    +91 9996007479
                    <br />
                    +91 9996009098
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-[#146B4D]/10 flex items-center justify-center">
                  <Mail className="text-[#146B4D]" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#146B4D]">
                    Email Address
                  </h3>

                  <p className="text-gray-600 mt-2">
                    gurukulamtheschool07@gmail.com
                  </p>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-[#146B4D]/10 flex items-center justify-center">
                  <Clock3 className="text-[#146B4D]" size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#146B4D]">
                    Working Hours
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Monday - Saturday
                    <br />
                    8:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-[#146B4D] mb-5">
                Follow Us
              </h3>

              <div className="flex gap-4">
                {[
                  {
                    icon: Globe,
                    link: '#',
                  },
                  {
                    icon: Play,
                    link: '#',
                  },
                  {
                    icon: Camera,
                    link: '#',
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.link}
                      className="w-14 h-14 rounded-full bg-[#146B4D] hover:bg-[#0F5B41] transition-all duration-300 flex items-center justify-center text-white shadow-lg"
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl border border-[#D8C98D]/40"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#146B4D]">
                Send Message
              </h2>

              <p className="mt-5 text-gray-600">
                Fill out the form below and your message will open
                directly in WhatsApp.
              </p>
            </div>

            <form
              onSubmit={handleWhatsAppSubmit}
              className="mt-10 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-14 rounded-xl border border-[#146B4D]/20 
                  bg-[#F7F7F5] px-5 outline-none 
                  focus:ring-2 focus:ring-[#146B4D]
                  text-[#0D6453] placeholder:text-[#6B7280] placeholder:font-medium"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-14 rounded-xl border border-[#146B4D]/20 
                  bg-[#F7F7F5] px-5 outline-none 
                  focus:ring-2 focus:ring-[#146B4D]
                  text-[#0D6453] placeholder:text-[#6B7280] placeholder:font-medium"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-14 rounded-xl border border-[#146B4D]/20 
                bg-[#F7F7F5] px-5 outline-none 
                focus:ring-2 focus:ring-[#146B4D]
                text-[#0D6453] placeholder:text-[#6B7280] placeholder:font-medium"
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full h-14 rounded-xl border border-[#146B4D]/20 
                bg-[#F7F7F5] px-5 outline-none 
                focus:ring-2 focus:ring-[#146B4D]
                text-[#6B7280] font-medium"
              >
                <option value="">Select Subject</option>
                <option>Admission Enquiry</option>
                <option>Boarding Facility</option>
                <option>Transport</option>
                <option>Fee Structure</option>
                <option>General Query</option>
              </select>

              <textarea
                rows={6}
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-[#146B4D]/20 
                bg-[#F7F7F5] p-5 outline-none 
                focus:ring-2 focus:ring-[#146B4D]
                text-[#0D6453] placeholder:text-[#6B7280]
                placeholder:font-medium resize-none"
              />

              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                Send on WhatsApp

                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[32px] shadow-2xl border border-[#D8C98D]/40 bg-white p-4"
          >
            <div className="relative group rounded-3xl overflow-hidden h-[500px]">
              <a
                href="https://maps.app.goo.gl/f75FzxTg1nzH23LZ6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6659015157265!2d77.12345670000001!3d28.567890100000003!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d6d0000001%3A0x1234567890abcdef!2sGurukulam%20School!5e0!3m2!1sen!2sin!4v1618316216000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Gurukulam School Location"
                  className="pointer-events-none"
                ></iframe>

                <div
                  className="absolute inset-0 bg-[#0D6453]/20 
                  opacity-0 group-hover:opacity-100 transition duration-300
                  flex items-center justify-center"
                >
                  <span
                    className="bg-[#E4CC6F] text-[#0D6453] px-6 py-3 rounded-full 
                    font-semibold text-sm md:text-base shadow-lg"
                  >
                    Open Directions
                  </span>
                </div>
              </a>
            </div>

            <div className="text-center mt-5">
              <a
                href="https://maps.app.goo.gl/f75FzxTg1nzH23LZ6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#146B4D] hover:text-[#0D6453] font-semibold text-base inline-flex items-center gap-2 transition"
              >
                Get Directions →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}