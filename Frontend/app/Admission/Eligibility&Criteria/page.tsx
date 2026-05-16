'use client';

import { motion } from 'framer-motion';
import { CheckCircle, FileText, Users } from 'lucide-react';

export default function EligibilityCriteriaPage() {
  return (
    <div className="relative min-h-screen py-16 px-4 md:px-10 lg:px-20 
    bg-[linear-gradient(120deg,#F5F1E8_0%,#eef5f1_40%,#f9f7f2_70%,#F5F1E8_100%)] overflow-hidden">

      {/* 🌟 Background Glow (match hero) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-[#156445]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-[250px] h-[250px] bg-[#E4CC6F]/10 blur-3xl rounded-full"></div>
      </div>

      {/* 🔷 Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold 
        bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
        bg-clip-text text-transparent">
          Eligibility Criteria
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Admission to Gurukulam The School is granted based on age requirements, previous academic
          performance, and overall readiness of the student for the respective class.
        </p>
      </motion.div>

      {/* 🧭 TIMELINE */}
      <div className="relative max-w-5xl mx-auto z-10">

        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] 
        bg-gradient-to-b from-[#156445] via-[#E4CC6F] to-[#156445]"></div>

        {/* 🔹 ITEM 1 */}
        <TimelineItem
          title="Age Criteria"
          icon={<Users />}
          align="left"
        >
          <p className="text-gray-600 mb-3">
            The age of the student should be appropriate for the class applied, as per school and CBSE
            guidelines:
          </p>
          <ul className="space-y-2">
            <li> ● Nursery: Minimum 3 years</li>
            <li> ● LKG: Minimum 4 years</li>
            <li> ● UKG: Minimum 5 years</li>
            <li> ● Class I: Minimum 6 years</li>
          </ul>
          <p className="text-gray-600 mb-3">(Age is calculated as per the academic session guidelines.)</p>
        </TimelineItem>

        {/* 🔹 ITEM 2 */}
        <TimelineItem
          title="Academic Criteria"
          icon={<CheckCircle />}
          align="right"
        >
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <AnimatedCheck /> ● For Classes I and above, the student must have successfully passed the previousclass
              from a recognized school.

            </li>
            <li className="flex items-center gap-2">
              <AnimatedCheck /> ● Students should have a basic understanding of subjects relevant to the class they are
              applying for.
            </li>
            <li className="flex items-center gap-2">
              <AnimatedCheck /> ● Admission may be subject to performance in an aptitude test or interaction
            </li>
          </ul>
        </TimelineItem>

        {/* 🔹 ITEM 3 */}
        <TimelineItem
          title="Documents Required"
          icon={<FileText />}
          align="left"
        >
          <p className="text-gray-600 mb-3">
            Parents/guardians must submit the following documents at the time of admission:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <AnimatedCheck /> ● Birth Certificate (for age verification)
            </li>
            <li className="flex items-center gap-2">
              <AnimatedCheck />● Previous Class Report Card
            </li>
            <li className="flex items-center gap-2">
              <AnimatedCheck /> ● Transfer Certificate (TC) (for Class II and above, if applicable)
            </li>
            <li className="flex items-center gap-2">
              <AnimatedCheck />● Passport-size photographs of the student
            </li>
            <li className="flex items-center gap-2">
              <AnimatedCheck />● Aadhaar Card or valid ID proof
            </li>
            <li className="flex items-center gap-2">
              <AnimatedCheck />● Address proof
            </li>
          </ul>
        </TimelineItem>

        {/* 🔹 ITEM 4 */}
        <TimelineItem
          title="General Guidelines"
          icon={<CheckCircle />}
          align="right"
        >
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <AnimatedCheck /> ● Admission is granted based on seat availability.

            </li>
            <li className="flex items-center gap-2">
              <AnimatedCheck /> ● The school reserves the right to accept or reject any application based on its admission
              policy.
            </li>
            <li className="flex items-center gap-2">
              <AnimatedCheck />● All information provided in the application form must be accurate and complete.
            </li>
            <li className="flex items-center gap-2">
              <AnimatedCheck />● Any false information may lead to cancellation of admission.
            </li>
          </ul>
        </TimelineItem>

      </div>
    </div>
  );
}

/* 🔥 TIMELINE COMPONENT */
function TimelineItem({ title, icon, children, align }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      className={`relative mb-12 flex ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
    >

      {/* ICON */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
        <div className="p-3 rounded-full 
        bg-gradient-to-br from-[#156445] to-[#E4CC6F] 
        text-white shadow-lg">
          {icon}
        </div>
      </div>

      {/* CARD */}
      <div className="w-full md:w-[45%] ml-12 md:ml-0">
        <div className="relative group">

          {/* Glow */}
          <div className="absolute -inset-[2px] rounded-2xl 
          bg-gradient-to-r from-[#156445] via-[#E4CC6F] to-[#156445] 
          opacity-20 blur-lg group-hover:opacity-40"></div>

          <div className="relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-[#156445] mb-3">
              {title}
            </h3>
            <div className="text-gray-700 text-sm">
              {children}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

/* ✅ Animated Check */
function AnimatedCheck() {
  return (
    <motion.span
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="w-5 h-5 flex items-center justify-center 
      rounded-full bg-gradient-to-r from-[#156445] to-[#E4CC6F] text-white text-xs"
    >
      ✓
    </motion.span>
  );
}