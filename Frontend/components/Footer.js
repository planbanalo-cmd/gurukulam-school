import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white 
    bg-gradient-to-br from-[#0D6453] via-[#156445] to-[#296236]">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* About */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-[#E4CC6F] rounded-full" />
              GURUKULAM THE SCHOOL
            </h3>
            <p className="text-[#DDE5D8] text-sm leading-relaxed mb-4">
              At Gurukulam, our mission is to shape responsible individuals who are not only academically
              proficient but also morally grounded and socially aware.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="bg-[#CFAF5C] p-2 rounded-full hover:bg-[#E4CC6F] transition">
                <FaFacebook className="w-4 h-4 text-[#0D6453]" />
              </a>
              <a href="#" className="bg-[#CFAF5C] p-2 rounded-full hover:bg-[#E4CC6F] transition">
                <FaYoutube className="w-4 h-4 text-[#0D6453]" />
              </a>
              <a href="#" className="bg-[#CFAF5C] p-2 rounded-full hover:bg-[#E4CC6F] transition">
                <FaInstagram className="w-4 h-4 text-[#0D6453]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#E4CC6F]">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Courses", "Blog", "Contact Us"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-[#DDE5D8] hover:text-[#E4CC6F] transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
           <div>
            <h4 className="text-lg font-bold mb-6 text-[#E4CC6F]">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Courses", "Blog", "Contact Us"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-[#DDE5D8] hover:text-[#E4CC6F] transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#E4CC6F]">Academics</h4>
            <ul className="space-y-3">
              {["Pre-Primary", "Primary", "Secondary", "Higher Secondary", "Admissions"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-[#DDE5D8] hover:text-[#E4CC6F] transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          {/* Map + Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-[#E4CC6F]">Contact & Location</h4>

            <div className="grid md:grid-cols-2 gap-6">

              {/* 📍 Map */}
              <div>
                <div className="w-full h-48 rounded-lg overflow-hidden border border-[#7B9B68]/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6659015157265!2d77.12345670000001!3d28.567890100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d6d0000001%3A0x1234567890abcdef!2sGurukulam%20School!5e0!3m2!1sen!2sin!4v1618316216000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Gurukulam School Location"
                  ></iframe>
                </div>

                <a
                  href="https://maps.app.goo.gl/f75FzxTg1nzH23LZ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E4CC6F] hover:text-white text-sm mt-2 inline-block transition"
                >
                  Get Directions →
                </a>
              </div>

              {/* 📞 Contact Info */}
              <ul className="space-y-4">

                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#E4CC6F]" />
                  <span className="text-[#DDE5D8] text-sm">
                    Gurukulam The School CBSE Residential School <br />
                    VPO Masani, NH48, near Masani Barrage, Rewari, Haryana 123106
                  </span>
                </li>

                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-[#E4CC6F]" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919996007481" className="text-[#DDE5D8] hover:text-[#E4CC6F] text-sm">
                      +91 9996007481
                    </a>
                    <a href="tel:+919996007482" className="text-[#DDE5D8] hover:text-[#E4CC6F] text-sm">
                      +91 9996007482
                    </a>
                  </div>
                </li>

                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-[#E4CC6F]" />
                  <a href="mailto:gurukulamtheschool07@gmail.com" className="text-[#DDE5D8] hover:text-[#E4CC6F] text-sm">
                    gurukulamtheschool07@gmail.com
                  </a>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#7B9B68]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#DDE5D8] text-xs md:text-sm">
            © 2024 Gurukulam School. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs md:text-sm">
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((item, i) => (
              <a key={i} href="#" className="text-[#DDE5D8] hover:text-[#E4CC6F] transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}