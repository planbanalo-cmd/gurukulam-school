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
            <div className="bg-white border-b sticky top-0 z-40">
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
                            <h1 className="text-sm sm:text-base md:text-xl lg:text-3xl font-extrabold leading-tight">
                                <span className="text-orange-600">GURUKULAM</span> <span className="hidden sm:inline text-black"> THE SCHOOL</span>
                            </h1>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 hover:bg-orange-100 rounded transition text-black"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />}
                        </button>
                    </div>

                    {/* Contact details - shown on all resolutions */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 xl:gap-6 text-xs xl:text-sm w-full lg:w-auto">
                        {/* Email */}
                        <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5 xl:w-6 xl:h-6 text-orange-600 flex-shrink-0" />
                            <div className="min-w-0">
                                <p className="text-black font-semibold text-sm xl:text-base">Email</p>
                                <p className="text-orange-600 font-medium text-xs xl:text-sm truncate">gurukulamtheschool07@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5 xl:w-6 xl:h-6 text-orange-600 flex-shrink-0" />
                            <div className="min-w-0">
                                <p className="text-black font-semibold text-sm xl:text-base">Call</p>
                                <div className="flex gap-1 xl:gap-2 flex-wrap">
                                    <p className="text-orange-600 font-medium text-xs xl:text-sm">+91 9996007481</p>
                                    <p className="text-orange-600 font-medium text-xs xl:text-sm">+91 9996007482</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Admission Button - Desktop */}
                    <button className="hidden lg:block bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-lg font-bold text-sm xl:text-base animate-pulse shadow-lg hover:bg-orange-700 transition duration-300 flex-shrink-0">
                        ADMISSION OPEN
                    </button>
                </div>

                {/* Mobile Admission Button - shown only on sm/md below lg */}
                <div className="lg:hidden px-3 sm:px-4 pb-3 border-t">
                    <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-xs sm:text-sm animate-pulse shadow-lg hover:bg-orange-700 transition duration-300">
                        ADMISSION OPEN
                    </button>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="bg-white border-b sticky top-auto lg:sticky z-30">
                <div className="w-full">
                    {/* Desktop Menu - hidden below lg */}
                    <ul className="hidden lg:flex justify-center items-center gap-1 xl:gap-4 text-xs xl:text-base px-4 xl:px-6 py-3 flex-wrap">
                      <Link href="/">  <li className="text-black hover:text-orange-600 cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap text-xs xl:text-base">HOME</li></Link>

                        {/* About Dropdown */}
                        <li className="relative group text-black hover:text-orange-600 cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">ABOUT US</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                              <Link href="/History&Foundation"><li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b text-xs xl:text-sm">History & Foundation</li></Link>
                                <Link href="/Vision&Mission"><li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b text-xs xl:text-sm">Our Vision & Mission</li></Link>
                               <Link href="/Infrastructure"><li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Infrastructure</li></Link>
                                <Link href="/Leadership&Management"><li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b text-xs xl:text-sm">Leadership & Management</li></Link>
                                <Link href="/Privacy&Policy"><li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b text-xs xl:text-sm">Privacy Policy</li></Link>
                            </ul>
                        </li>

                        {/* Admissions Dropdown */}
                        <li className="relative group text-black hover:text-orange-600 cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">ADMISSIONS</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">E-Prospectus</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Aptitude Test</li>
                              <Link href="/Fees"> <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Fee Structure</li></Link> 
                              <Link href="/Admission&FeePolicy">  <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Admission & Fee Policy</li></Link>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Eligibility Criteria</li>
                                
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600">Apply Online</li>
                            </ul>
                        </li>

                        {/* Acadamics Dropdown */}
                      <li className="relative group text-black hover:text-orange-600 cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap">
                            <div className="flex items-center gap-1">
                            <span className="text-xs xl:text-base">ACADAMICS</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Curriculum</li>
                               
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Faculty</li>
                                 
                            </ul>
                        </li>
                           <li className="relative group text-black hover:text-orange-600 cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">ACHIVEMENTS</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Awards & Certification</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Success Stories</li>
                               
                            </ul>
                        </li>

                        {/* Boarding House Dropdown */}
                        <li className="relative group text-black hover:text-orange-600 cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">BOARDING</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Welcome</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Dean&apos;s Message</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Meals & Nutrition</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">House Rules & Policies</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Parent Involvement</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b hidden xl:block">Boarding House Facilities</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Special Events</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600">Testimonials</li>
                            </ul>
                        </li>

                        {/* Events Dropdown */}
                        <li className="relative group text-black hover:text-orange-600 cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">EVENTS</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Circulars</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Newsletter</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600">Magazine</li>
                            </ul>
                        </li>
                         <li className="relative group text-black hover:text-orange-600 cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap">
                            <div className="flex items-center gap-1">
                                <span className="text-xs xl:text-base">GALLERY</span>
                                <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-40 xl:w-48 z-50 text-xs xl:text-sm">
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Photos</li>
                                <li className="px-3 xl:px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Videos</li>
                            </ul>
                        </li>

                        <li className="text-black hover:text-orange-600 cursor-pointer px-1 xl:px-2 py-2 rounded transition duration-200 hover:scale-105 whitespace-nowrap text-xs xl:text-base">CONTACT</li>
                    </ul>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden bg-white border-t max-h-[calc(100vh-200px)] overflow-y-auto">
                            <ul className="flex flex-col gap-0 px-3 sm:px-4 py-2 text-sm text-black">
                                <li className="py-3 border-b text-black hover:text-orange-600 cursor-pointer"><Link href="/">HOME</Link></li>

                                {/* Mobile About */}
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setAboutOpen(!aboutOpen)}
                                        className="w-full flex justify-between items-center text-black hover:text-orange-600"
                                    >
                                        <span>ABOUT US</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {aboutOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                            <li className="py-1 text-black hover:text-orange-600"><Link href="/History&Foundation">History & Foundation</Link></li>
                                            <li className="py-1 text-black hover:text-orange-600"><Link href="/Vision&Mission">Our Vision & Mission</Link></li>
                                            <li className="py-1 text-black hover:text-orange-600"><Link href="/Infrastructure">Infrastructure</Link></li>
                                            <li className="py-1 text-black hover:text-orange-600"><Link href="/Leadership&Management">Leadership & Management</Link></li>
                                            <li className="py-1 text-black hover:text-orange-600">Privacy Policy</li>
                                          
                                        </ul>
                                    )}
                                </li>

                                {/* Mobile Admissions */}
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setAdmissionOpen(!admissionOpen)}
                                        className="w-full flex justify-between items-center text-black hover:text-orange-600"
                                    >
                                        <span>ADMISSIONS</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${admissionOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {admissionOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                            <li className="py-1 text-black hover:text-orange-600">E-Prospectus</li>
                                            <li className="py-1 text-black hover:text-orange-600">Aptitude Test</li>
                                            <li className="py-1 text-black hover:text-orange-600"><Link href="/Fees">Fee Structure</Link></li>
                                            <li className="py-1 text-black hover:text-orange-600"><Link href="/Admission&FeePolicy">Admission & Fee Policy</Link></li>
                                          
                                            <li className="py-1 text-black hover:text-orange-600">Eligibility Criteria</li>
                                            <li className="py-1 text-black hover:text-orange-600">Apply Online</li>
                                        </ul>
                                    )}
                                </li>

                                {/* Mobile Discover */}
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setAcadamicOpen(!acadamicOpen)}
                                        className="w-full flex justify-between items-center text-black hover:text-orange-600"
                                    >
                                        <span>ACADEMIC</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${acadamicOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {acadamicOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                            <li className="py-1 text-black hover:text-orange-600">Curriculum</li>
                                            <li className="py-1 text-black hover:text-orange-600">Faculty</li>
                                           
                                            
                                        </ul>
                                    )}
                                </li>

                                {/* Mobile Boarding House */}
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setBoardingOpen(!boardingOpen)}
                                        className="w-full flex justify-between items-center text-black hover:text-orange-600"
                                    >
                                        <span>BOARDING HOUSE</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${boardingOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {boardingOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                            <li className="py-1 text-black hover:text-orange-600">Welcome</li>
                                            <li className="py-1 text-black hover:text-orange-600">Dean&apos;s Message</li>
                                            <li className="py-1 text-black hover:text-orange-600">Meals & Nutrition</li>
                                            <li className="py-1 text-black hover:text-orange-600">House Rules & Policies</li>
                                            <li className="py-1 text-black hover:text-orange-600">Parent Involvement</li>
                                            <li className="py-1 text-black hover:text-orange-600">Boarding House Facilities</li>
                                            <li className="py-1 text-black hover:text-orange-600">Special Events & Celebrations</li>
                                            <li className="py-1 text-black hover:text-orange-600">Testimonials From Boarders</li>
                                        </ul>
                                    )}
                                </li>

                                {/* Mobile Events */}
                                <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setEventsOpen(!eventsOpen)}
                                        className="w-full flex justify-between items-center text-black hover:text-orange-600"
                                    >
                                        <span>EVENTS</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${eventsOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {eventsOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                            <li className="py-1 text-black hover:text-orange-600">Circulars</li>
                                            <li className="py-1 text-black hover:text-orange-600">Newsletter</li>
                                            <li className="py-1 text-black hover:text-orange-600">Magazine</li>
                                        </ul>
                                    )}
                                </li>
                                 <li className="py-3 border-b text-black">
                                    <button
                                        onClick={() => setGalleryOpen(!galleryOpen)}
                                        className="w-full flex justify-between items-center text-black hover:text-orange-600"
                                    >
                                        <span>GALLERY</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${galleryOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {galleryOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2 text-xs sm:text-sm text-black">
                                            <li className="py-1 text-black hover:text-orange-600">Photos</li>
                                            <li className="py-1 text-black hover:text-orange-600">Videos</li>
                                           
                                        </ul>
                                    )}
                                </li>

                                <li className="py-3 text-black hover:text-orange-600 cursor-pointer"><Link href="/">CONTACT</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
