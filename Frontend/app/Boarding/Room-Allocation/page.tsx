"use client";

import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  BedDouble,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Home,
  Info,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const roomFeatures = [
  {
    icon: BedDouble,
    title: "Comfortable Accommodation",
    description:
      "Clean, organized and thoughtfully maintained rooms designed to provide students with a comfortable residential experience.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Supervision",
    description:
      "Students stay in a supervised environment with responsible wardens and structured residential routines.",
  },
  {
    icon: Users,
    title: "Community Living",
    description:
      "Age and class appropriate room allocation encourages friendship, cooperation and a positive community atmosphere.",
  },
];

const allocationSteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Student Assessment",
    description:
      "Relevant student information is considered before accommodation is assigned.",
  },
  {
    number: "02",
    icon: Users,
    title: "Age & Class Grouping",
    description:
      "Students are grouped appropriately to create a comfortable and supportive living environment.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Supervised Allocation",
    description:
      "Room assignments are managed by the school to maintain safety, discipline and student well-being.",
  },
  {
    number: "04",
    icon: Home,
    title: "Settling In",
    description:
      "Students are introduced to their room, residential routine and essential boarding guidelines.",
  },
];

const kitList = [
  ["Vest Cotton", "6", "Tooth Paste", "4"],
  ["Briefs", "6", "Tooth Brush", "4"],
  ["Bed Sheets", "3", "Shoe Brush", "1"],
  ["Pillow", "1", "Shoe Polish", "2"],
  ["Pillow Covers", "1", "Bath Soap", "6"],
  ["Bath Towel", "1", "Washing Soap", "2"],
  ["Hand Towel", "1", "Soap Case", "2"],
  ["Trimmer (If required)", "1", "Hair Oil", "1"],
  ["Camphor (Kapoor)", "Few", "Shampoo", "2"],
  ["Handkerchief", "6", "Hair Comb", "1"],
  ["Sanitizer & Masks", "*", "Nail Cutter", "1"],
  ["Sports Shoes", "1 Pair", "Black Marker", "1"],
  ["Bathroom Slippers", "1 Pair", "Raincoat", "1"],
  ["Cloth Clips", "10", "Umbrella", "1"],
  ["White Cotton Socks", "6 Pair", "Bucket", "1"],
  ["Tissues", "1", "Mug", "1"],
  ["Small Sewing Kit", "1", "Water Bottle", "1"],
  ["Storage Crates", "1", "Talcum Powder", "1"],
  ["Alarm Clock", "1", "Body Lotion", "1"],
  ["Desk Lamp", "1", "Liquid Dettol", "1"],
  ["School Supplies", "-", "Lock", "1"],
];

const guidelines = [
  "Bring laundry detergent and stain remover.",
  "Solid colour or patterned cloth face masks only.",
  "Electronic gadgets are not permitted in the boarding facility.",
  "Carry necessary prescribed medications, if required.",
  "Submit relevant medical documents to the school where applicable.",
];

export default function RoomAllocationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#eef5f1] via-[#faf8f2] to-[#eef5f1]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-4 md:px-8 lg:px-16 pt-8 md:pt-12 pb-20">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[34px] md:rounded-[44px] bg-gradient-to-br from-[#0D6453] via-[#156445] to-[#296236] shadow-[0_25px_90px_rgba(13,100,83,0.25)]"
          >

            {/* Decorative elements */}

            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />

            <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#E4CC6F]/10 blur-3xl" />

            <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-white/10" />

            <div className="absolute bottom-20 left-20 w-20 h-20 rounded-full border border-white/10" />

            {/* Content */}

            <div className="relative z-10 px-7 py-14 md:px-14 md:py-20 lg:px-20">

              <div className="max-w-4xl">

                {/* Badge */}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-semibold backdrop-blur-md"
                >
                  <Sparkles className="w-4 h-4 text-[#E4CC6F]" />
                  Boarding & Residential Life
                </motion.div>

                {/* Heading */}

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-7 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
                >
                  Room Allocation
                  <br />
                  <span className="text-[#E4CC6F]">
                    & Accommodation
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 text-white/75 text-base md:text-xl leading-relaxed max-w-2xl"
                >
                  A thoughtfully organized residential environment
                  where comfort, safety, discipline and community
                  come together to create a positive boarding
                  experience.
                </motion.p>

                {/* Quick information */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3 mt-9"
                >

                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md text-white text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#E4CC6F]" />
                    Safe & Supervised
                  </div>

                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md text-white text-sm">
                    <Home className="w-4 h-4 text-[#E4CC6F]" />
                    Comfortable Living
                  </div>

                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md text-white text-sm">
                    <Users className="w-4 h-4 text-[#E4CC6F]" />
                    Community Focused
                  </div>

                </motion.div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
          >

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-3 text-[#156445] text-sm font-bold mb-5">

                <span className="w-9 h-[2px] bg-[#156445]" />

                ACCOMMODATION PHILOSOPHY

              </div>

              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">

                A Comfortable Space
                <br />

                <span className="bg-gradient-to-r from-[#156445] to-[#296236] bg-clip-text text-transparent">
                  To Learn & Grow
                </span>

              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-6">
                At Gurukulam The School, room allocation is
                thoughtfully planned to provide students with
                a safe, comfortable and positive residential
                environment.
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                Accommodation is maintained with attention to
                cleanliness, discipline and student well-being.
                Students are appropriately grouped to encourage
                friendship, cooperation and a healthy community
                atmosphere.
              </p>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#156445]/20 to-[#E4CC6F]/20 blur-2xl" />

              <div className="relative bg-white rounded-3xl border border-[#156445]/10 shadow-xl p-7 md:p-9">

                <div className="flex items-center gap-4 mb-7">

                  <div className="w-14 h-14 rounded-2xl bg-[#156445]/10 flex items-center justify-center">

                    <BedDouble className="w-7 h-7 text-[#156445]" />

                  </div>

                  <div>

                    <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      Residential Living
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-1">
                      Thoughtfully Organized
                    </h3>

                  </div>

                </div>

                <div className="space-y-4">

                  {[
                    "Clean and well-maintained accommodation",
                    "Appropriate age and class grouping",
                    "Dedicated residential supervision",
                    "Supportive and disciplined environment",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle2 className="w-5 h-5 text-[#156445] shrink-0 mt-0.5" />

                      <span className="text-gray-600 text-sm md:text-base">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
      {/* =====================================================
    BOARDING ROOMS GALLERY
====================================================== */}

<section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">

  <div className="max-w-7xl mx-auto">

    {/* SECTION HEADER */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
        bg-[#156445]/10 text-[#156445] text-sm font-semibold mb-5">

        <BedDouble className="w-4 h-4" />

        OUR BOARDING ROOMS

      </div>

      <h2 className="text-3xl md:text-5xl font-black text-gray-900">

        A Place to Feel

        <span className="text-[#156445]">
          {" "}Comfortable & At Home
        </span>

      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-base md:text-lg leading-relaxed">
        Our residential spaces are designed to provide students with
        a clean, comfortable and welcoming environment where they can
        rest, connect and grow.
      </p>

    </motion.div>


    {/* IMAGE GRID */}

    <div className="grid lg:grid-cols-2 gap-5">

      {/* LARGE IMAGE */}

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-[28px] h-[420px] md:h-[520px]"
      >

        <img
          src="/images/boarding/room-1.jpg"
          alt="Gurukulam boarding room"
          className="w-full h-full object-cover transition-transform duration-700
          group-hover:scale-105"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t
          from-black/70 via-black/10 to-transparent" />

        {/* Content */}

        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">

          <div className="inline-flex items-center gap-2 px-3 py-1.5
            rounded-full bg-white/15 backdrop-blur-md
            border border-white/20 text-white text-xs font-semibold">

            <Home className="w-3.5 h-3.5" />

            Residential Rooms

          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mt-3">
            Comfortable Living Spaces
          </h3>

          <p className="text-white/75 text-sm mt-2 max-w-lg">
            Clean and thoughtfully arranged spaces created for
            comfortable residential living.
          </p>

        </div>

      </motion.div>


      {/* RIGHT SIDE */}

      <div className="grid grid-cols-2 gap-5">

        {/* IMAGE 2 */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group relative overflow-hidden rounded-[24px] h-[250px] md:h-[250px]"
        >

          <img
            src="/images/boarding/room-2.jpg"
            alt="Boarding room facilities"
            className="w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t
            from-black/60 to-transparent" />

          <div className="absolute bottom-5 left-5">

            <p className="text-white font-semibold">
              Student Accommodation
            </p>

            <p className="text-white/70 text-xs mt-1">
              Clean & Organized
            </p>

          </div>

        </motion.div>


        {/* IMAGE 3 */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative overflow-hidden rounded-[24px] h-[250px] md:h-[250px]"
        >

          <img
            src="/images/boarding/room-3.jpg"
            alt="Student bedroom"
            className="w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t
            from-black/60 to-transparent" />

          <div className="absolute bottom-5 left-5">

            <p className="text-white font-semibold">
              Comfortable Rooms
            </p>

            <p className="text-white/70 text-xs mt-1">
              Designed for Students
            </p>

          </div>

        </motion.div>


        {/* IMAGE 4 */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group relative overflow-hidden rounded-[24px] h-[250px] md:h-[250px]"
        >

          <img
            src="/images/boarding/room-4.jpg"
            alt="Boarding accommodation"
            className="w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t
            from-black/60 to-transparent" />

          <div className="absolute bottom-5 left-5">

            <p className="text-white font-semibold">
              Residential Environment
            </p>

            <p className="text-white/70 text-xs mt-1">
              Safe & Welcoming
            </p>

          </div>

        </motion.div>


        {/* IMAGE 5 */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="group relative overflow-hidden rounded-[24px] h-[250px] md:h-[250px]"
        >

          <img
            src="/images/boarding/room-5.jpg"
            alt="Boarding facilities"
            className="w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t
            from-black/60 to-transparent" />

          <div className="absolute bottom-5 left-5">

            <p className="text-white font-semibold">
              Well Maintained
            </p>

            <p className="text-white/70 text-xs mt-1">
              Comfortable & Clean
            </p>

          </div>

        </motion.div>

      </div>

    </div>


    {/* BOTTOM INFO */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-7 flex flex-col md:flex-row items-center
      justify-between gap-5 bg-white rounded-2xl
      border border-[#156445]/10 shadow-sm px-6 py-5"
    >

      <div className="flex items-center gap-3">

        <div className="w-11 h-11 rounded-xl bg-[#156445]/10
          flex items-center justify-center">

          <ShieldCheck className="w-5 h-5 text-[#156445]" />

        </div>

        <div>

          <p className="font-bold text-gray-900">
            Safe & Supervised Environment
          </p>

          <p className="text-sm text-gray-500">
            Student well-being remains our priority.
          </p>

        </div>

      </div>

      <div className="flex items-center gap-2 text-[#156445] text-sm font-semibold">

        <CheckCircle2 className="w-5 h-5" />

        Clean • Comfortable • Secure

      </div>

    </motion.div>

  </div>

</section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#156445]/10 text-[#156445] text-sm font-semibold mb-5">

              <Sparkles className="w-4 h-4" />

              RESIDENTIAL EXPERIENCE

            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900">

              Everything Designed
              <span className="text-[#156445]">
                {" "}Around Students
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {roomFeatures.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative"
                >

                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#156445] to-[#E4CC6F] opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

                  <div className="relative h-full bg-white rounded-3xl border border-gray-100 shadow-md group-hover:shadow-xl p-7 md:p-8 transition-all duration-300">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#156445] to-[#0D6453] flex items-center justify-center shadow-lg">

                      <Icon className="w-6 h-6 text-white" />

                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mt-6">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mt-3">
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          ROOM ALLOCATION PROCESS
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 py-20 md:py-28 bg-white/50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <div className="flex justify-center items-center gap-2 text-[#156445] font-semibold text-sm mb-4">

              <ClipboardCheck className="w-4 h-4" />

              ROOM ALLOCATION PROCESS

            </div>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900">

              A Structured Approach to
              <span className="text-[#156445]">
                {" "}Residential Living
              </span>

            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-5">
              Room allocation is managed thoughtfully to
              support student comfort, safety and positive
              community living.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {allocationSteps.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="relative bg-white rounded-2xl border border-[#156445]/10 shadow-sm p-6"
                >

                  <div className="flex justify-between items-start">

                    <div className="w-11 h-11 rounded-xl bg-[#156445]/10 flex items-center justify-center">

                      <Icon className="w-5 h-5 text-[#156445]" />

                    </div>

                    <span className="text-3xl font-black text-[#156445]/10">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="font-bold text-lg text-gray-900 mt-6">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mt-2">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          BOARDER KIT
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 py-20 md:py-28">

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">

            <div>

              <div className="flex items-center gap-2 text-[#156445] text-sm font-bold mb-3">

                <BedDouble className="w-4 h-4" />

                BOARDING ESSENTIALS

              </div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">

                Boarder's Kit List
                <span className="text-[#156445]">
                  {" "}(Boys)
                </span>

              </h2>

              <p className="text-gray-600 mt-3">
                Please ensure that all essential items are
                prepared before joining the boarding facility.
              </p>

            </div>

            {/* DOWNLOAD */}

            <motion.a
              href="/Boarders-kit-kist-boys.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
  bg-gradient-to-r from-[#0D6453] to-[#156445]
  text-white font-semibold shadow-lg
  hover:shadow-xl transition-all whitespace-nowrap"
            >
              <ArrowDownToLine className="w-5 h-5" />
              Download PDF
            </motion.a>

          </div>

          {/* TABLE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="overflow-hidden rounded-3xl bg-white border border-[#156445]/15 shadow-xl"
          >

            <div className="overflow-x-auto">

              <table className="w-full min-w-[700px] text-sm">

                <thead>

                  <tr className="bg-gradient-to-r from-[#0D6453] to-[#156445] text-white">

                    <th className="px-5 py-4 text-left font-semibold">
                      Item
                    </th>

                    <th className="px-5 py-4 text-center font-semibold">
                      Quantity
                    </th>

                    <th className="px-5 py-4 text-left font-semibold">
                      Item
                    </th>

                    <th className="px-5 py-4 text-center font-semibold">
                      Quantity
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {kitList.map((row, index) => (

                    <tr
                      key={index}
                      className={`border-b border-gray-100 transition-colors hover:bg-[#eef7f3] ${index % 2 === 0
                        ? "bg-white"
                        : "bg-[#f7faf8]"
                        }`}
                    >

                      <td className="px-5 py-4 font-semibold text-gray-800">
                        {row[0]}
                      </td>

                      <td className="px-5 py-4 text-center text-gray-600">
                        {row[1]}
                      </td>

                      <td className="px-5 py-4 font-semibold text-gray-800">
                        {row[2]}
                      </td>

                      <td className="px-5 py-4 text-center text-gray-600">
                        {row[3]}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </motion.div>

          {/* NOTE */}

          <div className="mt-6 rounded-2xl bg-[#fffdf5] border border-[#E4CC6F]/40 p-6">

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 rounded-xl bg-[#E4CC6F]/20 flex items-center justify-center shrink-0">

                <Info className="w-5 h-5 text-[#9a7d1c]" />

              </div>

              <div>

                <h3 className="font-bold text-gray-900">
                  Important Notes
                </h3>

                <ul className="mt-3 space-y-2">

                  {guidelines.map((item, index) => (

                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >

                      <CheckCircle2 className="w-4 h-4 text-[#156445] shrink-0 mt-0.5" />

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RESPONSIBILITY SECTION
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">

        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0D6453] via-[#156445] to-[#296236] shadow-[0_25px_80px_rgba(13,100,83,0.25)]">

            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#E4CC6F]/10 blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-8 md:p-12 lg:p-16">

              <div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm font-semibold">

                  <LockKeyhole className="w-4 h-4 text-[#E4CC6F]" />

                  RESPONSIBLE BOARDING LIFE
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white mt-6 leading-tight">

                  A Shared Space.
                  <br />

                  <span className="text-[#E4CC6F]">
                    A Shared Responsibility.
                  </span>

                </h2>

                <p className="text-white/75 text-base md:text-lg leading-relaxed mt-5 max-w-xl">
                  Boarding life teaches students to respect
                  their surroundings, care for their belongings
                  and contribute positively to the community
                  around them.
                </p>

              </div>

              <div className="grid sm:grid-cols-2 gap-4">

                {[
                  "Maintain room cleanliness",
                  "Respect fellow residents",
                  "Follow boarding routines",
                  "Take care of personal belongings",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4"
                  >

                    <CheckCircle2 className="w-5 h-5 text-[#E4CC6F] shrink-0" />

                    <span className="text-white/85 text-sm">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-4 md:px-8 lg:px-16 pb-10">

        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="bg-white rounded-[32px] border border-[#156445]/10 shadow-xl p-8 md:p-12"
          >

            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#156445]/10 flex items-center justify-center">

              <Home className="w-7 h-7 text-[#156445]" />

            </div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-6">

              Ready for Boarding Life?

            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Explore the complete residential experience at
              Gurukulam The School and prepare your child for
              a safe, disciplined and enriching boarding journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">

              <a
                href="/Boarders-kit-kist-boys.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
  border border-[#156445]/20 text-[#156445]
  font-semibold hover:bg-[#eef5f1] transition"
              >
                <ArrowDownToLine className="w-4 h-4" />
                Download Kit List
              </a>

              <a
                href="/Boarding/Daily-Schedule"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#156445] text-white font-semibold shadow-lg hover:bg-[#0D6453] hover:scale-105 transition-all"
              >
                View Daily Schedule
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}