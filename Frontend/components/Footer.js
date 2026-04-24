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
              <a href="https://instagram.com/gurukulam.the.school?utm_source=ig_web_button_share" className="bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition">
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

        </div>

        {/* Map and Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-16">
          {/* Google Map on Left - Small */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-4">Location</h4>
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6659015157265!2d77.12345670000001!3d28.567890100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d6d0000001%3A0x1234567890abcdef!2sGurukulam%20School!5e0!3m2!1sen!2sin!4v1618316216000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gurukulam School Location"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/f75FzxTg1nzH23LZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 text-sm mt-3 inline-block"
            >
           Get Directions →
            </a>
          </div>

          {/* Contact Info on Right */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">

                  Gurukulam The School CBSE Residential School<br/>
                  VPO Masani, NH48, near Masani Barrage, Rewari, Haryana 123106
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
