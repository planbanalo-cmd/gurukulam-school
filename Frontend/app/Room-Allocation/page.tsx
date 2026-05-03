'use client';

import { motion } from 'framer-motion';
import { Users, ShieldCheck, Home } from 'lucide-react';
import { Download } from "lucide-react";
export default function RoomAllocationPage() {
  return (
    <div className="min-h-screen px-4 md:px-10 lg:px-20 py-14 
    bg-[linear-gradient(120deg,#eef5f1_0%,#f5f1e8_40%,#eef5f1_100%)]">

      {/* 🔥 HERO */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold 
        bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
        bg-clip-text text-transparent">
          Room Allocation & Accommodation
        </h1>

        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Comfortable, safe, and well-organized hostel living designed for student well-being.
        </p>
      </motion.div>

      {/* 🏠 MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative max-w-5xl mx-auto mb-16 group"
      >
        <div className="absolute -inset-[2px] rounded-3xl 
        bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
        opacity-20 blur-xl group-hover:opacity-40 transition"></div>

        <div className="relative bg-white/80 backdrop-blur-xl 
        border border-[#156445]/20 rounded-3xl p-8 md:p-12 shadow-xl">

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Rooms are thoughtfully allocated to ensure comfort, safety, and a sense of 
            community among students.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Accommodation is well-maintained, clean, and supervised by dedicated wardens 
            who ensure discipline, care, and a positive environment at all times.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Students are grouped appropriately by age and class to promote a healthy, 
            friendly, and supportive living environment.
          </p>
        </div>
      </motion.div>

      {/* 🌟 FEATURES */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-20">
        {[
          {
            icon: <Home />,
            title: "Comfortable Living",
            desc: "Spacious, clean, and well-maintained rooms for a pleasant stay.",
          },
          {
            icon: <ShieldCheck />,
            title: "Safety & Supervision",
            desc: "24/7 monitoring by dedicated wardens ensuring discipline and care.",
          },
          {
            icon: <Users />,
            title: "Community Living",
            desc: "Age-wise grouping to encourage bonding and healthy friendships.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-[2px] rounded-2xl 
            bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
            opacity-20 blur-lg group-hover:opacity-40 transition"></div>

            <div className="relative bg-white/80 backdrop-blur-xl 
            border border-[#156445]/20 rounded-2xl p-6 shadow-lg">

              <div className="w-12 h-12 flex items-center justify-center 
              rounded-full mb-4
              bg-gradient-to-r from-[#156445] to-[#0D6453] text-white">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#156445] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>

            </div>
          </motion.div>
        ))}
      </div>

      {/* 🧳 BOARDER KIT TABLE */}
    <section className="max-w-6xl mx-auto mb-16">
  <div className="flex justify-between items-center mb-6 flex-wrap gap-4">

  <h2 className="text-3xl font-bold border-l-4 border-[#0D6453] pl-3 text-[#0D6453]">
    BOARDER'S KIT LIST (BOYS)
  </h2>

  <motion.a
    href="/boarders-kit-list.pdf"
    download
    target="_blank"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-5 py-2.5 rounded-full 
    text-white text-sm font-semibold
    bg-gradient-to-r from-[#0D6453] to-[#156445]
    hover:from-[#094d40] hover:to-[#0e4f3a]
    shadow-md transition"
  >
    <Download size={16} />
    Download PDF
  </motion.a>

</div>

  <div className="overflow-x-auto rounded-2xl shadow-xl bg-white/90 backdrop-blur-lg border border-[#156445]/30">
    <table className="w-full text-sm text-center border border-gray-300">

      <thead className="bg-gradient-to-r from-[#0D6453] to-[#156445] text-white">
        <tr>
          <th className="p-3 border">Item</th>
          <th className="border">Qty</th>
          <th className="border">Item</th>
          <th className="border">Qty</th>
        </tr>
      </thead>

      <tbody>
  {[
    ["Vest Cotton","6","Tooth Paste","4"],
    ["Briefs","6","Tooth Brush","4"],
    ["Bed Sheets","3","Shoe Brush","1"],
    ["Pillow","1","Shoe Polish","2"],
    ["Pillow Covers","1","Bath Soap","6"],
    ["Bath Towel","1","Washing Soap","2"],
    ["Hand Towel","1","Soap Case","2"],
    ["Trimmer (If required)","1","Hair Oil","1"],
    ["Camphor (Kapoor)","Few","Shampoo","2"],
    ["Handkerchief","6","Hair Comb","1"],
    ["Sanitizer & Masks","*","Nail Cutter","1"],
    ["Sports Shoes","1 Pair","Black Marker","1"],
    ["Bathroom Slippers","1 Pair","Raincoat","1"],
    ["Cloth Clips","10","Umbrella","1"],
    ["White Cotton Socks","6 Pair","Bucket","1"],
    ["Tissues","1","Mug","1"],
    ["Small Sewing Kit","1","Water Bottle","1"],
    ["Storage Crates","1","Talcum Powder","1"],
    ["Alarm Clock","1","Body Lotion","1"],
    ["Desk Lamp","1","Liquid Dettol","1"],
    ["School Supplies","-","Lock","1"],
  ].map((row, i) => (
    <tr
      key={i}
      className="border odd:bg-white even:bg-[#e6f2ee] hover:bg-[#d2ebe2] transition"
    >
      {/* Item 1 (BOLD) */}
      <td className="p-3 border text-gray-900 font-bold">{row[0]}</td>

      {/* Qty 1 */}
      <td className="p-3 border text-gray-900">{row[1]}</td>

      {/* Item 2 (BOLD) */}
      <td className="p-3 border text-gray-900 font-bold">{row[2]}</td>

      {/* Qty 2 */}
      <td className="p-3 border text-gray-900">{row[3]}</td>
    </tr>
  ))}
</tbody>

    </table>
  </div>

  {/* NOTE */}
  <div className="mt-6 bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-5 border border-[#156445]/30 text-sm">
    <p className="font-semibold mb-2 text-[#0D6453] text-base">Note:</p>
    <ul className="list-disc pl-6 space-y-1 text-gray-800 font-medium">
      <li>Bring laundry detergent & stain remover.</li>
      <li>Solid colour/pattern cloth face mask only.</li>
      <li>No electronic gadgets allowed.</li>
      <li>Carry necessary medications if required.</li>
      <li>Submit medical documents if any condition exists.</li>
    </ul>
  </div>
</section>

    </div>
  );
}