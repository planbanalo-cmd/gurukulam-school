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

    

    return (
        <>
            {/* Top Bar */}
            <div className="sticky top-0 z-40" style={{ backgroundColor: '#F5F1E8' }}>
                <div className="w-full flex flex-col gap-3 sm:gap-4 lg:flex-row items-center justify-between py-2 sm:py-3 lg:py-4 px-3 sm:px-4 lg:px-6">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto justify-between lg:justify-start">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden flex-shrink-0">
                                <img
                                    src="/images/Gurukulamlogo.jpeg"
                                    alt="Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-sm sm:text-base md:text-xl lg:text-3xl font-extrabold leading-tight">
                                    <span style={{ color: '#156445' }}>GURUKULAM</span> <span className="hidden sm:inline text-black"> THE SCHOOL</span>
                                </h1>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold" style={{ color: '#156445' }}>
                                    CREATING EXCELLENCE TOGETHER
                                </p>
                            </div>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded transition text-black"
                            style={{ backgroundColor: '#E4CC6F' }}
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />}
                        </button>
                    </div>

                    {/* Contact details - shown on all resolutions */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 xl:gap-6 text-xs xl:text-sm w-full lg:w-auto">
                       

                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <Phone className="w-5 h-5 xl:w-6 xl:h-6 flex-shrink-0" style={{ color: '#156445' }} />
                            <div className="min-w-0">
                                <p className="text-black font-semibold text-sm xl:text-base">Call</p>
                                <div className="flex gap-2 xl:gap-3 flex-wrap items-center">
                                    <p className="font-medium text-xs xl:text-sm" style={{ color: '#156445' }}>9996007479</p>
                                    <span className="text-gray-400">|</span>
                                    <p className="font-medium text-xs xl:text-sm" style={{ color: '#156445' }}>9996009098</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Admission Button - Desktop */}
                    <button className="hidden lg:block text-white px-4 lg:px-6 py-2 rounded-lg font-bold text-sm xl:text-base animate-pulse shadow-lg transition duration-300 flex-shrink-0" style={{ backgroundColor: '#156445' }}>
                        ADMISSION OPEN
                    </button>
                </div>

                {/* Mobile Admission Button - shown only on sm/md below lg */}
                <div className="lg:hidden px-3 sm:px-4 pb-3">
                    <button className="w-full text-white px-4 py-2 rounded-lg font-bold text-xs sm:text-sm animate-pulse shadow-lg transition duration-300" style={{ backgroundColor: '#156445' }}>
                        ADMISSION OPEN
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
                              <Link href="/History&Foundation"><li className="px-3 xl:px-4 py-2 border-b text-xs xl:text-sm cursor-pointer hover-dropdown-item">History & Foundation</li></Link>
                                <Link href="/Vision&Mission"><li className="px-3 xl:px-4 py-2 border-b text-xs xl:text-sm cursor-pointer hover-dropdown-item">Our Vision & Mission</li></Link>
                               <Link href="/Infrastructure"><li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Infrastructure</li></Link>
                                <Link href="/Leadership&Management"><li className="px-3 xl:px-4 py-2 border-b text-xs xl:text-sm cursor-pointer hover-dropdown-item">Leadership & Management</li></Link>
                                <Link href="/Privacy&Policy"><li className="px-3 xl:px-4 py-2 border-b text-xs xl:text-sm cursor-pointer hover-dropdown-item">Privacy Policy</li></Link>
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
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Aptitude Test</li>
                              <Link href="/Fees"> <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Fee Structure</li></Link> 
                              <Link href="/Admission&FeePolicy">  <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Admission & Fee Policy</li></Link>
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Eligibility Criteria</li>
                                
                                <li className="px-3 xl:px-4 py-2 cursor-pointer hover-dropdown-item">Apply Online</li>
                            </ul>
                        </li>

                        {/* Acadamics Dropdown */}
                      <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1">
                            <span className="text-xs xl:text-base">ACADAMICS</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Curriculum</li>
                               
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Faculty</li>
                                 
                            </ul>
                        </li>
                           <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">ACHIVEMENTS</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Awards & Certification</li>
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Success Stories</li>
                               
                            </ul>
                        </li>

                        {/* Boarding House Dropdown */}
                        <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">BOARDING</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Welcome</li>
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Dean&apos;s Message</li>
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Meals & Nutrition</li>
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">House Rules & Policies</li>
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Parent Involvement</li>
                                <li className="px-3 xl:px-4 py-2 border-b hidden xl:block cursor-pointer hover-dropdown-item">Boarding House Facilities</li>
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Special Events</li>
                                <li className="px-3 xl:px-4 py-2 cursor-pointer hover-dropdown-item">Testimonials</li>
                            </ul>
                        </li>

                        {/* Events Dropdown */}
                        <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">EVENTS</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Circulars</li>
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Newsletter</li>
                                <li className="px-3 xl:px-4 py-2 cursor-pointer hover-dropdown-item">Magazine</li>
                            </ul>
                        </li>
                         <li className="relative group text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap hover-nav-item">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">GALLERY</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Photos</li>
                                <li className="px-3 xl:px-4 py-2 border-b cursor-pointer hover-dropdown-item">Videos</li>
                            </ul>
                        </li>

                        <li className="text-white cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap text-xs xl:text-base hover-nav-item">CONTACT</li>
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
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/History&Foundation">History & Foundation</Link></li>
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/Vision&Mission">Our Vision & Mission</Link></li>
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/Infrastructure">Infrastructure</Link></li>
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/Leadership&Management">Leadership & Management</Link></li>
                                            <li className="py-1 text-black hover:mobile-item">Privacy Policy</li>
                                          
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
                                            <li className="py-1 text-black hover:mobile-item">Aptitude Test</li>
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/Fees">Fee Structure</Link></li>
                                            <li className="py-1 text-black hover:mobile-item"><Link href="/Admission&FeePolicy">Admission & Fee Policy</Link></li>
                                          
                                            <li className="py-1 text-black hover:mobile-item">Eligibility Criteria</li>
                                            <li className="py-1 text-black hover:mobile-item">Apply Online</li>
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
                                            <li className="py-1 text-black hover-mobile-dropdown">Curriculum</li>
                                            <li className="py-1 text-black hover-mobile-dropdown">Faculty</li>
                                           
                                            
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
                                            <li className="py-1 text-black hover-mobile-dropdown">Welcome</li>
                                            <li className="py-1 text-black hover-mobile-dropdown">Dean&apos;s Message</li>
                                            <li className="py-1 text-black hover-mobile-dropdown">Meals & Nutrition</li>
                                            <li className="py-1 text-black hover-mobile-dropdown">House Rules & Policies</li>
                                            <li className="py-1 text-black hover-mobile-dropdown">Parent Involvement</li>
                                            <li className="py-1 text-black hover-mobile-dropdown">Boarding House Facilities</li>
                                            <li className="py-1 text-black hover-mobile-dropdown">Special Events & Celebrations</li>
                                            <li className="py-1 text-black hover-mobile-dropdown">Testimonials From Boarders</li>
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
                                            <li className="py-1 text-black hover-mobile-dropdown">Circulars</li>
                                            <li className="py-1 text-black hover-mobile-dropdown">Newsletter</li>
                                            <li className="py-1 text-black hover-mobile-dropdown">Magazine</li>
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
                                            <li className="py-1 text-black hover-mobile-dropdown">Photos</li>
                                            <li className="py-1 text-black hover-mobile-dropdown">Videos</li>
                                           
                                        </ul>
                                    )}
                                </li>

                                <li className="py-3 text-black hover-mobile-button cursor-pointer"><Link href="/">CONTACT</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
