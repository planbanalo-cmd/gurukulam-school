
'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="text-white 
    bg-gradient-to-br from-[#0D6453] via-[#156445] to-[#296236]">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* About */}
          {/* About */}
<div>
  {/* Logo + School Name */}
  <div className="flex items-center gap-3 mb-4">
    
<Image
  src="/images/Gurukulamlogo.jpeg"
  alt="Gurukulam Logo"
  width={60}
  height={60}
  className="object-contain w-[60px] h-auto"
  priority
/>

    {/* School Name */}
    <div>
      <h3 className="text-lg md:text-2xl font-bold text-[#E4CC6F] leading-tight">
        GURUKULAM THE SCHOOL
      </h3>

     
    </div>
  </div>

  {/* Description */}
  <p className="text-[#DDE5D8] text-sm leading-relaxed mb-4">
    At Gurukulam, our mission is to shape responsible individuals who are not only academically
    proficient but also morally grounded and socially aware.
  </p>

  {/* Social Icons */}
  <div className="flex gap-4">
    <a
      href="https://www.facebook.com/GURUKULAMTHESchool/"
     target="_blank"
  rel="noopener noreferrer"
  className="bg-[#CFAF5C] p-2 rounded-full hover:bg-[#E4CC6F] transition"
    >
      <FaFacebook className="w-4 h-4 text-[#0D6453]" />
    </a>

   <a
  href="https://youtube.com/@gurukulamtheschool-c8v?si=HPPlpjD5K1ysol9G"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#CFAF5C] p-2 rounded-full hover:bg-[#E4CC6F] transition"
>
  <FaYoutube className="w-4 h-4 text-[#0D6453]" />
</a>

<a
  href="https://instagram.com/gurukulam.the.school?utm_source=ig_web_button_share"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#CFAF5C] p-2 rounded-full hover:bg-[#E4CC6F] transition"
>
  <FaInstagram className="w-4 h-4 text-[#0D6453]" />
</a> 
  </div>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#E4CC6F]">Quick Links</h4>
           <ul className="space-y-3">
  {[
    { name: "Home", link: "/" },
    { name: "About Us", link: "/About/History&Foundation" },
    { name: "Infrastructure", link: "/About/Infrastructure" },
    { name: "Photos", link: "/Gallery/Photos" },
    { name: "Videos", link: "/Gallery/Videos" }
  ].map((item, i) => (
    <li key={i}>
      <a
        href={item.link}
        className="text-[#DDE5D8] hover:text-[#E4CC6F] transition text-sm flex items-center gap-2 group"
      >
        <span className="w-0 group-hover:w-2 h-[2px] bg-[#E4CC6F] transition-all duration-300"></span>
        {item.name}
      </a>
    </li>
  ))}
</ul>
          </div>
           <div>
            <h4 className="text-lg font-bold mb-6 text-[#E4CC6F]">Quick Links</h4>
           <ul className="space-y-3">
  {[
    { name: "Vision & Mission", link: "/About/Vision&Mission" },
    { name: "Boarding", link: "/Boarding/Welcome" },
    { name: "Awards", link: "/Achivements/Awards&Certificates" },
    { name: "Faculty", link: "/Academic/Faculty" },
    { name: "Curriculum", link: "/Academic/Curriculum" }
  ].map((item, i) => (
    <li key={i}>
      <a
        href={item.link}
        className="text-[#DDE5D8] hover:text-[#E4CC6F] transition text-sm flex items-center gap-2 group"
      >
        <span className="w-0 group-hover:w-2 h-[2px] bg-[#E4CC6F] transition-all duration-300"></span>
        {item.name}
      </a>
    </li>
  ))}
</ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#E4CC6F]">Quick Links</h4>
            <ul className="space-y-3">
  {[
    { name: "Contact", link: "/Contact" },
    { name: "Fees", link: "/Admissions/Fees" },
    { name: "Eligibility & Criteria", link: "/Admissions/Eligibility&Criteria" },
    { name: "Leadership & Management", link: "/About/Leadership&Management" },
    { name: "Daily Schedule", link: "/Academic/DailySchedule" }
  ].map((item, i) => (
    <li key={i}>
      <a
        href={item.link}
        className="text-[#DDE5D8] hover:text-[#E4CC6F] transition text-sm flex items-center gap-2 group"
      >
        <span className="w-0 group-hover:w-2 h-[2px] bg-[#E4CC6F] transition-all duration-300"></span>
        {item.name}
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
  <a
    href="https://maps.app.goo.gl/f75FzxTg1nzH23LZ6"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-48 rounded-lg overflow-hidden border border-[#7B9B68]/30 group relative"
  >

    {/* Map */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6659015157265!2d77.12345670000001!3d28.567890100000003!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d6d0000001%3A0x1234567890abcdef!2sGurukulam%20School!5e0!3m2!1sen!2sin!4v1618316216000"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      title="Gurukulam School Location"
      className="pointer-events-none"
    ></iframe>

    {/* Hover Overlay */}
    <div
      className="absolute inset-0 bg-[#0D6453]/20 
      opacity-0 group-hover:opacity-100 transition duration-300
      flex items-center justify-center"
    >
      <span
        className="bg-[#E4CC6F] text-[#0D6453] px-4 py-2 rounded-full 
        font-semibold text-sm shadow-lg"
      >
        Open Directions
      </span>
    </div>

  </a>

  <a
    href="https://maps.app.goo.gl/f75FzxTg1nzH23LZ6"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#E4CC6F] hover:text-white text-sm mt-3 inline-flex items-center gap-2 transition"
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
                    <a href="tel:+919996009098" className="text-[#DDE5D8] hover:text-[#E4CC6F] text-sm">
                      +91 9996009098
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
        
        {/* Privacy Policy Page */}
        <Link
          href="/Privacy&Policy"
          className="text-[#DDE5D8] hover:text-[#E4CC6F] transition"
        >
          Privacy Policy
        </Link>

        {/* Terms Popup Trigger */}
        <button
          onClick={() => setOpen(true)}
          className="text-[#DDE5D8] hover:text-[#E4CC6F] transition"
        >
          Terms & Conditions
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          
          {/* Card */}
          <div className="bg-white w-[90%] max-w-md rounded-xl shadow-xl p-6 relative">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              Terms & Conditions
            </h2>

            {/* Content */}
            <p className="text-sm text-gray-600 leading-relaxed">
              By using this website, you agree to Gurukulam The School’s terms of use.
              All content is for informational purposes only and may be updated without notice.
              Admission is subject to eligibility and availability.
              Fees once paid are non-refundable.
              Unauthorized use of content is prohibited.
              Your data is handled as per our{" "}
              
              <Link href="/privacy-policy" className="text-[#E4CC6F] hover:underline">
                Privacy Policy
              </Link>.
            </p>

            {/* Button */}
            <div className="mt-4 text-right">
              <button
                onClick={() => setOpen(false)}
                className="bg-[#E4CC6F] px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
        </div>
      </div>
    </footer>
  );
}