import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-full" />
              GURUKULAM SCHOOL
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
             At Gurukulam, our mission is to shape responsible individuals who are not only academically
          proficient but also morally grounded and socially aware.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://www.facebook.com/GURUKULAMTHESchool/" className="bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@gurukulamtheschool-c8v?si=HPPlpjD5K1ysol9G" className="bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition">
                <FaYoutube className="w-4 h-4" />
              </a>
              <a href="#" className="bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition">
                <FaInstagram className="w-4 h-4" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-sm">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-bold mb-6">Academics</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-sm">
                  Pre-Primary
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-sm">
                  Primary
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-sm">
                  Secondary
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-sm">
                  Higher Secondary
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-sm">
                  Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Gurukulam School Campus, City Center, State 123456
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919996007481" className="text-gray-400 hover:text-orange-600 transition text-sm">
                    +91 9996007481
                  </a>
                  <a href="tel:+919996007482" className="text-gray-400 hover:text-orange-600 transition text-sm">
                    +91 9996007482
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:gurukulamtheschool07@gmail.com" className="text-gray-400 hover:text-orange-600 transition text-sm">
                  gurukulamtheschool07@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              &copy; 2024 Gurukulam School. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs md:text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-600 transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
