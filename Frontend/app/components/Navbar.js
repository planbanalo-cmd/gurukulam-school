'use client';
import Image from "next/image";
import { useState } from 'react';
import { ChevronDown, ChevronRight, Mail, Phone, Menu, X } from 'lucide-react';
import Link from "next/link";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [admissionOpen, setAdmissionOpen] = useState(false);
    const [discoverOpen, setDiscoverOpen] = useState(false);
    const [boardingOpen, setBoardingOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);
    const [showInfrastructure, setShowInfrastructure] = useState(false);

    const discoverItems = [
        { label: 'Life At GSDR', submenu: null },
        {
            label: 'Infrastructure',
            submenu: [
                'Academic Labs',
                'Resources Hub',
                'Creative Spaces',
                'Performing Arts Center',
                'Sports & Fitness'
            ]
        },
        { label: 'Sports At GSDR', submenu: null },
        { label: 'Awards & Certifications', submenu: null },
        { label: '360 Virtual Tour', submenu: null },
        { label: 'Results', submenu: null }
    ];

    return (
        <>
            {/* Top Bar */}
            <div className="bg-white border-b sticky top-0 z-40">
                <div className="max-w-7xl mx-auto flex flex-col gap-4 md:flex-row items-center justify-between py-3 px-4 md:px-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                            <img
                                src="/images/Gurukulamlogo.jpeg"
                                alt="Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h1 className="text-xl md:text-3xl font-extrabold">
                            <span className="text-orange-600">GURUKULAM</span> <span className="text-black">SCHOOL</span>
                        </h1>
                    </div>

                    {/* Hidden on mobile, shown on md and up */}
                    <div className="hidden md:flex items-center gap-6 text-xs md:text-sm">
                        {/* Email */}
                        <div className="flex items-center gap-2">
                            <Mail className="w-6 h-6 text-orange-600" />
                            <div>
                                <p className="text-black font-semibold text-lg">Email</p>
                                <p className="text-orange-600 font-medium text-sm">gurukulamtheschool07@gmail.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-2">
                            <Phone className="w-6 h-6 text-orange-600" />
                            <div>
                                <p className="text-black font-semibold text-lg">Call</p>
                                <div className="flex gap-1 md:gap-2">
                                    <p className="text-orange-600 font-medium text-sm">+91 9996007481</p>
                                    <p className="text-orange-600 font-medium text-sm">+91 9996007482</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Admission Button */}
                    <button className="hidden md:block bg-orange-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg font-bold text-sm animate-pulse shadow-lg hover:bg-orange-700 transition duration-300">
                        ADMISSION OPEN
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden ml-auto"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="bg-white border-b sticky top-20 md:top-auto z-30">
                <div className="max-w-7xl mx-auto">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex justify-center items-center gap-2 lg:gap-4 text-sm lg:text-base px-6 py-3">
                      <Link href="/">  <li className="text-black   hover:text-orange-600 cursor-pointer px-2 py-2 rounded transition duration-200 hover:scale-105">HOME</li></Link>

                        {/* About Dropdown */}
                        <li className="relative group text-black   hover:text-orange-600 cursor-pointer px-2 py-2 rounded transition duration-200 hover:scale-105">
                            <div className="flex items-center gap-1">
                                <span>ABOUT US</span>
                                <ChevronDown className="w-4 h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-48 z-50">
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b"><Link href="/History&Foundation">History & Foundation</Link></li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b"><Link href="/Vision&Mission">Our Vision & Mission</Link></li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Teaching Staff</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Non Teaching Staff</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b"><Link href="/Leadership&Management">Leadership & Management</Link></li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Privacy Policy</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600">Mandatory Public Disclosure</li>
                            </ul>
                        </li>

                        {/* Admissions Dropdown */}
                        <li className="relative group text-black   hover:text-orange-600 cursor-pointer px-2 py-2 rounded transition duration-200 hover:scale-105">
                            <div className="flex items-center gap-1">
                                <span>ADMISSIONS</span>
                                <ChevronDown className="w-4 h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-48 z-50">
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">E-Prospectus</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Aptitude Test</li>
                              <Link href="/Fees"> <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Fee Structure</li></Link> 
                              <Link href="/Admission&FeePolicy">  <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Admission & Fee Policy</li></Link>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Download</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Eligibility Criteria</li>
                                
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600">Online Admission</li>
                            </ul>
                        </li>

                        {/* Discover Dropdown */}
                        <li className="relative group text-black hover:text-orange-600 cursor-pointer px-2 py-2 rounded transition duration-200">
                            <div className="flex items-center gap-1">
                                <span>DISCOVER</span>
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
                            </div>

                            {/* Main Dropdown Menu */}
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-48 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                {discoverItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`relative ${item.submenu ? 'group/submenu' : ''
                                            } px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b cursor-pointer transition duration-150 ${index === discoverItems.length - 1 ? 'border-b-0' : ''
                                            } flex justify-between items-center`}
                                        onMouseEnter={() => item.submenu && setShowInfrastructure(true)}
                                        onMouseLeave={() => item.submenu && setShowInfrastructure(false)}
                                    >
                                        <span>{item.label}</span>
                                        {item.submenu && (
                                            <ChevronRight className="w-4 h-4 transition-transform duration-300" />
                                        )}

                                        {/* Submenu for Infrastructure */}
                                        {item.submenu && (
                                            <ul
                                                className={`absolute left-full top-0 bg-white text-black shadow-lg rounded w-48 z-50 transition-all duration-300 ${showInfrastructure && item.label === 'Infrastructure'
                                                        ? 'block opacity-100 visible'
                                                        : 'hidden opacity-0 invisible'
                                                    }`}
                                                style={{
                                                    marginLeft: '8px'
                                                }}
                                            >
                                                {item.submenu.map((subitem, subindex) => (
                                                    <li
                                                        key={subindex}
                                                        className={`px-4 py-2 hover:bg-orange-100 hover:text-orange-600 transition duration-300 ${subindex === item.submenu.length - 1
                                                                ? 'border-b-0'
                                                                : 'border-b'
                                                            }`}
                                                    >
                                                        {subitem}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Boarding House Dropdown */}
                        <li className="relative group text-black  hover:text-orange-600 cursor-pointer px-2 py-2 rounded transition duration-200 hover:scale-105">
                            <div className="flex items-center gap-1">
                                <span>BOARDING HOUSE</span>
                                <ChevronDown className="w-4 h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-48 z-50">
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Welcome</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Dean&apos;s Message</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Meals & Nutrition</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">House Rules & Policies</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Parent Involvement</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Boarding House Facilities</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Special Events & Celebrations</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600">Testimonials From Boarders</li>
                            </ul>
                        </li>

                        {/* Events Dropdown */}
                        <li className="relative group text-black   hover:text-orange-600 cursor-pointer px-2 py-2 rounded transition duration-200 hover:scale-105">
                            <div className="flex items-center gap-1">
                                <span>EVENTS</span>
                                <ChevronDown className="w-4 h-4" />
                            </div>
                            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black shadow-lg rounded w-48 z-50">
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Circulars</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600 border-b">Newsletter</li>
                                <li className="px-4 py-2 hover:bg-orange-100 hover:text-orange-600">Magazine</li>
                            </ul>
                        </li>

                        <li className="text-black   hover:text-orange-600 cursor-pointer px-2 py-2 rounded transition duration-200 hover:scale-105">CONTACT</li>
                    </ul>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden bg-white border-t">
                            <ul className="flex flex-col gap-0 px-4 py-2">
                                <li className="py-3 border-b hover:text-orange-600">HOME</li>

                                {/* Mobile About */}
                                <li className="py-3 border-b">
                                    <button
                                        onClick={() => setAboutOpen(!aboutOpen)}
                                        className="w-full flex justify-between items-center hover:text-orange-600"
                                    >
                                        <span>ABOUT US</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {aboutOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2">
                                            <li className="py-1 hover:text-orange-600">History</li>
                                            <li className="py-1 hover:text-orange-600">Our Vision & Mission</li>
                                            <li className="py-1 hover:text-orange-600">Teaching Staff</li>
                                            <li className="py-1 hover:text-orange-600">Non Teaching Staff</li>
                                            <li className="py-1 hover:text-orange-600">Leadership & Management</li>
                                            <li className="py-1 hover:text-orange-600">Privacy Policy</li>
                                            <li className="py-1 hover:text-orange-600">Mandatory Public Disclosure</li>
                                        </ul>
                                    )}
                                </li>

                                {/* Mobile Admissions */}
                                <li className="py-3 border-b">
                                    <button
                                        onClick={() => setAdmissionOpen(!admissionOpen)}
                                        className="w-full flex justify-between items-center hover:text-orange-600"
                                    >
                                        <span>ADMISSIONS</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${admissionOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {admissionOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2">
                                            <li className="py-1 hover:text-orange-600">E-Prospectus</li>
                                            <li className="py-1 hover:text-orange-600">Aptitude Test</li>
                                            <li className="py-1 hover:text-orange-600">Fee Structure</li>
                                            <li className="py-1 hover:text-orange-600">Admission Policy</li>
                                            <li className="py-1 hover:text-orange-600">Download</li>
                                            <li className="py-1 hover:text-orange-600">Eligibility Criteria</li>
                                            <li className="py-1 hover:text-orange-600">Fee Policy</li>
                                            <li className="py-1 hover:text-orange-600">Online Admission</li>
                                        </ul>
                                    )}
                                </li>

                                {/* Mobile Discover */}
                                <li className="py-3 border-b">
                                    <button
                                        onClick={() => setDiscoverOpen(!discoverOpen)}
                                        className="w-full flex justify-between items-center hover:text-orange-600"
                                    >
                                        <span>DISCOVER</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${discoverOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {discoverOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2">
                                            <li className="py-1 hover:text-orange-600">Life At GSDR</li>
                                            <li className="py-1 hover:text-orange-600">Infrastructure</li>
                                            <li className="py-1 hover:text-orange-600">Sports At GSDR</li>
                                            <li className="py-1 hover:text-orange-600">Awards & Certifications</li>
                                            <li className="py-1 hover:text-orange-600">360 Virtual Tour</li>
                                            <li className="py-1 hover:text-orange-600">Results</li>
                                        </ul>
                                    )}
                                </li>

                                {/* Mobile Boarding House */}
                                <li className="py-3 border-b">
                                    <button
                                        onClick={() => setBoardingOpen(!boardingOpen)}
                                        className="w-full flex justify-between items-center hover:text-orange-600"
                                    >
                                        <span>BOARDING HOUSE</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${boardingOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {boardingOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2">
                                            <li className="py-1 hover:text-orange-600">Welcome</li>
                                            <li className="py-1 hover:text-orange-600">Dean&apos;s Message</li>
                                            <li className="py-1 hover:text-orange-600">Meals & Nutrition</li>
                                            <li className="py-1 hover:text-orange-600">House Rules & Policies</li>
                                            <li className="py-1 hover:text-orange-600">Parent Involvement</li>
                                            <li className="py-1 hover:text-orange-600">Boarding House Facilities</li>
                                            <li className="py-1 hover:text-orange-600">Special Events & Celebrations</li>
                                            <li className="py-1 hover:text-orange-600">Testimonials From Boarders</li>
                                        </ul>
                                    )}
                                </li>

                                {/* Mobile Events */}
                                <li className="py-3 border-b">
                                    <button
                                        onClick={() => setEventsOpen(!eventsOpen)}
                                        className="w-full flex justify-between items-center hover:text-orange-600"
                                    >
                                        <span>EVENTS</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform ${eventsOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {eventsOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col gap-2">
                                            <li className="py-1 hover:text-orange-600">Circulars</li>
                                            <li className="py-1 hover:text-orange-600">Newsletter</li>
                                            <li className="py-1 hover:text-orange-600">Magazine</li>
                                        </ul>
                                    )}
                                </li>

                                <li className="py-3 hover:text-orange-600">CONTACT</li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
