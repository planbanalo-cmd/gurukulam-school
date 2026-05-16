'use client';
import Image from "next/image";
import { useState } from 'react';
import { ChevronDown, ChevronRight, Mail, Phone, Menu, X } from 'lucide-react';
import Link from "next/link";


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [admissionOpen, setAdmissionOpen] = useState(false);
    const [acadamicOpen, setAcadamicOpen] = useState(false);
    const [boardingOpen, setBoardingOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
     const [achivementOpen, setAchivementOpen] = useState(false);



    return (
        
        <>
        
            {/* Top Bar */}
            <div className="sticky top-0 z-40 relative 
    bg-[linear-gradient(120deg,#F5F1E8_0%,#eef5f1_40%,#f9f7f2_70%,#F5F1E8_100%)] 
    backdrop-blur-md border-b border-[#7B9B68]/20 overflow-hidden">

                {/* 🌟 Glow Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[300px] h-[300px] 
        bg-[#156445]/10 blur-3xl rounded-full"></div>

                    <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] 
        bg-[#E4CC6F]/10 blur-3xl rounded-full"></div>
                </div>

                <div className="relative w-full flex flex-col gap-3 sm:gap-4 lg:flex-row items-center justify-between 
      py-2 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6">

                    {/* Logo + Title */}
                    <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto justify-between lg:justify-start">

                        <div className="flex items-center gap-2 sm:gap-3">

                            {/* Logo */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 
            rounded-full overflow-hidden border border-[#7B9B68]/30 shadow-sm">
                                <img
                                    src="/images/Gurukulamlogo.jpeg"
                                    alt="Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <div className="flex flex-col">
                                <h1 className="text-sm sm:text-base md:text-xl lg:text-3xl font-extrabold leading-tight 
              bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
              bg-clip-text text-transparent">
                                    GURUKULAM <span className="hidden sm:inline">THE SCHOOL</span>
                                </h1>

                                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-[#156445]/90">
                                    CREATING EXCELLENCE TOGETHER
                                </p>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-md bg-[#E4CC6F] hover:bg-[#CFAF5C] shadow transition"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5 text-[#0D6453]" />
                            ) : (
                                <Menu className="w-5 h-5 text-[#0D6453]" />
                            )}
                        </button>
                    </div>


                    {/* Contact */}
                   {/* Contact */}
<div className="flex items-center gap-3 sm:gap-4 w-full lg:w-auto">

  {/* Icon */}
  <div className="
    p-2.5 sm:p-3 rounded-full 
    bg-[linear-gradient(135deg,#eef5f1,#f5f1e8)] 
    border border-[#7B9B68]/20
    shadow-inner

    animate-[callPulse_2s_infinite] sm:animate-none
  ">
    <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-[#156445]" />
  </div>

  {/* Numbers */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
    
    <a 
      href="tel:9996007479"
      className="text-[#156445] font-semibold text-sm sm:text-base md:text-lg hover:underline"
    >
      9996007479
    </a>

    <span className="hidden sm:inline text-gray-400">|</span>

    <a 
      href="tel:9996009098"
      className="text-[#156445] font-semibold text-sm sm:text-base md:text-lg hover:underline"
    >
      9996009098
    </a>

  </div>
</div>

                    {/* Desktop Button */}
                    <button className="hidden lg:block relative overflow-hidden
        bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236]
        text-white px-5 lg:px-6 py-2 rounded-lg 
        font-bold text-sm xl:text-base 
        shadow-md hover:shadow-lg 
        transition-all duration-300">

                        <span className="relative z-10">ADMISSION OPEN</span>

                        {/* Shine Effect */}
                        <span className="absolute inset-0 
          bg-gradient-to-r from-transparent via-white/20 to-transparent 
          translate-x-[-100%] hover:translate-x-[100%] 
          transition duration-700"></span>
                    </button>
                </div>

                {/* Mobile Button */}
                <div className="lg:hidden px-3 sm:px-4 pb-3 relative">
                    <button className="w-full relative overflow-hidden
        bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236]
        text-white px-4 py-2 rounded-lg 
        font-bold text-sm 
        shadow-md transition-all duration-300">

                        <span className="relative z-10">ADMISSION OPEN</span>

                        <span className="absolute inset-0 
          bg-gradient-to-r from-transparent via-white/20 to-transparent 
          translate-x-[-100%] hover:translate-x-[100%] 
          transition duration-700"></span>
                    </button>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="sticky top-auto lg:sticky z-30" style={{ backgroundColor: '#156445' }}>
                <div className="w-full">
                    {/* Desktop Menu - hidden below lg */}
                    <ul className="hidden lg:flex justify-center items-center gap-1 xl:gap-4 text-xs xl:text-base px-4 xl:px-6 py-3 flex-wrap">
                        <Link href="/">  <li className="text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap text-xs xl:text-base hover-nav-item" style={{ backgroundColor: 'transparent' }}>HOME</li></Link>

                        {/* About Dropdown */}
                        <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1" style={{ color: 'inherit' }}>
                                <span className="text-xs xl:text-base">ABOUT US</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <Link href="/About/History&Foundation"><li className="px-3 xl:px-4 py-2 border-b text-xs xl:text-sm cursor-pointer hover-dropdown-item">History & Foundation</li></Link>
                                <Link href="/About/Vision&Mission"><li className="px-3 xl:px-4 py-2 border-b text-xs xl:text-sm cursor-pointer hover-dropdown-item">Our Vision & Mission</li></Link>
                                <Link href="/About/Infrastructure"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Infrastructure</li></Link>
                                <Link href="/About/Leadership&Management"><li className="px-3 xl:px-4 py-2 border-b text-xs xl:text-sm cursor-pointer hover-dropdown-item">Leadership & Management</li></Link>
                                <Link href="/About/Privacy&Policy"><li className="px-3 xl:px-4 py-2 border-b text-xs xl:text-sm cursor-pointer hover-dropdown-item">Privacy Policy</li></Link>
                            </ul>
                        </li>

                        {/* Admissions Dropdown */}
                        <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">ADMISSIONS</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">E-Prospectus</li>
                                <Link href="/Admission/Aptitude"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Aptitude Test</li></Link>
                                <Link href="/Admission/Fees"> <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Fee Structure</li></Link>
                                <Link href="/Admission/Admission&FeePolicy">  <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Admission & Fee Policy</li></Link>
                                <Link href="/Admission/Eligibility&Criteria"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Eligibility Criteria</li></Link>
                                <Link href="/Admission/ApplyOnline"><li className="px-3 xl:px-4 py-2 cursor-pointer hover-dropdown-item">Apply Online</li></Link>
                            </ul>
                        </li>

                        {/* Acadamics Dropdown */}
                        <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">ACADAMICS</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                               <Link href="/Academic/Curriculum"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Curriculum</li></Link>

                                <Link href="/Academic/Faculty"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Faculty</li></Link>

                            </ul>
                        </li>
                        <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">ACHIVEMENTS</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <Link href="/Achivements/Awards&Certification"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Awards & Certification</li></Link>
                                <Link href="/Achivements/Success-Stories"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Success Stories</li></Link>

                            </ul>
                        </li>

                        {/* Boarding House Dropdown */}
                        <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">BOARDING</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                               <Link href="/Boarding/Welcome"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Welcome</li></Link>
                                <Link href="/Boarding/Room-Allocation"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Room Allocation</li></Link>
                                <Link href="/Boarding/Academic-Support"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Academic Support</li></Link>
                                <Link href="/Boarding/Daily-Schedule"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Daily Schedule</li></Link>
                                
                            </ul>
                        </li>

                        {/* Events Dropdown */}
                        <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">EVENTS</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <Link href="/Events/Circulars"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Circulars</li></Link>
                                <Link href="/Events/Newsletter"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Newsletter</li></Link>
                                <Link href="/Events/Magazine"><li className="px-3 xl:px-4 py-2 cursor-pointer hover-dropdown-item">Magazine</li></Link>
                            </ul>
                        </li>
                        <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">GALLERY</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <Link href="/Gallery/Photos"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Photos</li></Link>
                                <Link href="/Gallery/Videos"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Videos</li></Link>
                            </ul>
                        </li>

                        <Link href="/Contact"><li className="text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap text-xs xl:text-base hover-nav-item">CONTACT</li></Link>
                    </ul>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden bg-white border-t max-h-[calc(100vh-200px)] overflow-y-auto">
                            <ul className="flex flex-col gap-0 px-3 sm:px-4 py-2 text-sm text-black">
                                <li className="py-3 border-b text-black cursor-pointer hover:mobile-item"><Link href="/">HOME</Link></li>

                                {/* Mobile About */}
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setAboutOpen(!aboutOpen)}
                                        className="w-full flex justify-between items-center text-black hover:mobile-item"
                                    >
                                        <span>ABOUT US</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {aboutOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/About/History&Foundation">History & Foundation</Link></li>
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/About/Vision&Mission">Our Vision & Mission</Link></li>
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/About/Infrastructure">Infrastructure</Link></li>
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/About/Leadership&Management">Leadership & Management</Link></li>
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/About/Privacy&Policy">Privacy Policy</Link></li>

                                        </ul>
                                    )}
                                </li>

                                {/* Mobile Admissions */}
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setAdmissionOpen(!admissionOpen)}
                                        className="w-full flex justify-between items-center text-black hover:mobile-item"
                                    >
                                        <span>ADMISSIONS</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${admissionOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {admissionOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                            <li className="py-1 text-black hover:mobile-item">E-Prospectus</li>
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/Admission/Aptitude">Aptitude Test</Link></li>
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/Admission/Fees">Fee Structure</Link></li>
                                           <li className="py-1 text-black hover:mobile-item"><Link href="/Admission/Admission&FeePolicy">Admission & Fee Policy</Link></li>

                                           <Link href="/Admission/Eligibility&Criteria"> <li className="py-1 text-black hover:mobile-item">Eligibility Criteria</li></Link>
                                            <Link href="/Admission/ApplyOnline"><li className="py-1 text-black hover:mobile-item">Apply Online</li></Link>
                                        </ul>
                                    )}
                                </li>

                                {/* Mobile Discover */}
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setAcadamicOpen(!acadamicOpen)}
                                        className="w-full flex justify-between items-center text-black hover-mobile-button"
                                    >
                                        <span>ACADEMIC</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${acadamicOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {acadamicOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                            <Link href="/Academic/Curriculum"><li className="py-1 text-black hover-mobile-dropdown">Curriculum</li></Link>
                                            <Link href="/Academic/Faculty"><li className="py-1 text-black hover-mobile-dropdown">Faculty</li></Link>


                                        </ul>
                                    )}
                                </li>
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setAchivementOpen(!achivementOpen)}
                                        className="w-full flex justify-between items-center text-black hover-mobile-button"
                                    >
                                        <span>ACHIVEMENTS</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${achivementOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {achivementOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                            <Link href="/Achivements/Awards&Certification"><li className="py-1 text-black hover-mobile-dropdown">Awards & Certification</li></Link>
                                            <Link href="/Achivements/Success-Stories"><li className="py-1 text-black hover-mobile-dropdown">Success Stories</li></Link>
                                        </ul>
                                    )}
                                </li>       

                                       

                                {/* Mobile Boarding House */}
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setBoardingOpen(!boardingOpen)}
                                        className="w-full flex justify-between items-center text-black hover-mobile-button"
                                    >
                                        <span>BOARDING HOUSE</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${boardingOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {boardingOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                            <Link href="/Boarding/Welcome"><li className="py-1 text-black hover-mobile-dropdown">Welcome</li></Link>
                                            <Link href="/Boarding/Room-Allocation"><li className="py-1 text-black hover-mobile-dropdown">Room Allocation</li></Link>
                                            <Link href="/Boarding/Academic-Support"><li className="py-1 text-black hover-mobile-dropdown">Academic Support</li></Link>
                                            <Link href="/Boarding/Daily-Schedule"><li className="py-1 text-black hover-mobile-dropdown">Daily Schedule</li></Link>
                                           
                                         
                                          
                                        </ul>
                                    )}
                                </li>

                                {/* Mobile Events */}
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setEventsOpen(!eventsOpen)}
                                        className="w-full flex justify-between items-center text-black hover-mobile-button"
                                    >
                                        <span>EVENTS</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${eventsOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {eventsOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                           <Link href="/Events/Circulars"><li className="py-1 text-black hover-mobile-dropdown">Circulars</li></Link>
                                            <Link href="/Events/Newsletter"><li className="py-1 text-black hover-mobile-dropdown">Newsletter</li></Link>
                                            <Link href="/Events/Magazine"><li className="py-1 text-black hover-mobile-dropdown">Magazine</li></Link>
                                        </ul>
                                    )}
                                </li>
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setGalleryOpen(!galleryOpen)}
                                        className="w-full flex justify-between items-center text-black hover-mobile-button"
                                    >
                                        <span>GALLERY</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${galleryOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {galleryOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                           <Link href="/Gallery/Photos"><li className="py-1 text-black hover-mobile-dropdown">Photos</li></Link>
                                            <Link href="/Gallery/Videos"><li className="py-1 text-black hover-mobile-dropdown">Videos</li></Link>

                                        </ul>
                                    )}
                                </li>

                                <li className="py-3 text-black hover-mobile-button cursor-pointer"><Link href="/Contact">CONTACT</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
