"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function FeeStructurePage() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100 text-black overflow-hidden">

      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-amber-500 origin-left z-50"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-300 rounded-full opacity-30"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              x: [null, Math.random() * 1200],
              y: [null, Math.random() * 800],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img src="/images/GurukulamLogo.jpeg" className="w-[500px]" />
      </div>

      {/* HEADER */}
      <section className="text-center py-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          GURUKULAM SCHOOL{" "}
          <span className="text-orange-600">FEE STRUCTURE</span>
        </motion.h1>

        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="/fee-structure-2026-27.pdf"
          download
          target="_blank"
          className="inline-block mt-6 px-7 py-3 rounded-full text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 transition shadow-lg"
        >
          Download PDF
        </motion.a>
      </section>

      {/* MAIN TABLE */}
      <section className="max-w-7xl mx-auto px-4 py-10 relative z-10">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-orange-600 pl-3">
    Fee Structure (Session 2026–27)
  </h2>

  <div className="overflow-x-auto rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg border border-gray-200">
    <table className="w-full text-sm text-center border border-gray-200">

      <thead className="bg-gradient-to-r from-orange-600 to-amber-500 text-white sticky top-0 z-10">
        <tr>
          <th className="p-3 border">CLASS</th>
          <th className="border">M-I to M-III</th>
          <th className="border">I to V</th>
          <th className="border">VI to VIII</th>
          <th className="border">IX & X</th>
          <th className="border">XI-XII Medical</th>
          <th className="border">XI-XII Non-Med</th>
          <th className="border">XI-XII Comm</th>
          <th className="border">XI-XII Arts</th>
        </tr>
      </thead>

      <tbody>
        {[
          ["Registration Fee", "₹1000","₹1000","₹1000","₹1000","₹1000","₹1000","₹1000","₹1000"],
          ["Admission Fee", "₹5000","₹5000","₹5000","₹5000","₹5000","₹5000","₹5000","₹5000"],
          ["Development Charges", "₹11000","₹12000","₹13000","₹14000","₹15000","₹15000","₹15000","₹15000"],
          ["Tuition Fee (Monthly)", "₹2700","₹3700","₹4500","₹5500","₹7750","₹7500","₹7000","₹7000"],
          ["Tuition Fee (Quarterly)", "₹8100","₹11100","₹13500","₹16500","₹23250","₹22500","₹21000","₹21000"],
        ].map((row, i) => (
          <tr
            key={i}
            className="border transition hover:scale-[1.01] odd:bg-white even:bg-orange-50 hover:bg-orange-100"
          >
            <td className="p-3 border font-semibold text-left">{row[0]}</td>

            {row.slice(1).map((cell, j) => (
              <td
                key={j}
                className="p-3 border text-700 "
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

    </table>
  </div>
</section>

      {/* TRANSPORT */}
      <section className="max-w-6xl mx-auto px-4 py-10 relative z-10">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-orange-600 pl-3">
    Transport Charges (Quick View)
  </h2>

  <div className="overflow-x-auto rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg border border-gray-200">
    <table className="w-full text-sm text-center border border-gray-200">

      <thead className="bg-gradient-to-r from-orange-600 to-amber-500 text-white sticky top-0 z-10">
        <tr>
          <th className="p-3 border">K.M</th>
          <th className="border">0–2</th>
          <th className="border">2–5</th>
          <th className="border">5–10</th>
          <th className="border">10–15</th>
          <th className="border">15–20</th>
          <th className="border">20–25</th>
          <th className="border">25 & Above</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border transition hover:scale-[1.01] odd:bg-white even:bg-orange-50 hover:bg-orange-100">
          <td className="p-3 border font-semibold">Charges</td>
          <td className="border text-700 ">₹600</td>
          <td className="border text-700">₹800</td>
          <td className="border text-700 ">₹1000</td>
          <td className="border text-700 ">₹1500</td>
          <td className="border text-700 ">₹2000</td>
          <td className="border text-700 ">₹2500</td>
          <td className="border text-700 ">₹3000</td>
        </tr>
      </tbody>

    </table>
  </div>
</section>

      {/* HOSTEL */}
     <section className="max-w-6xl mx-auto px-4 py-10 relative z-10">
  <h2 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-orange-600 pl-3">
    Hostel Fee (Quick View)
  </h2>

  <div className="overflow-x-auto rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg border border-gray-200">
    <table className="w-full text-sm text-center border border-gray-200">

      <thead className="bg-gradient-to-r from-orange-600 to-amber-500 text-white sticky top-0 z-10">
        <tr>
          <th className="p-3 border">Class</th>
          <th className="border">IV–VIII</th>
          <th className="border">IX–X</th>
          <th className="border">XI–XII</th>
          <th className="border">Installment</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border transition hover:scale-[1.01] odd:bg-white even:bg-orange-50 hover:bg-orange-100">
          <td className="p-3 border font-semibold">Charges</td>
          <td className="border text-700 ">₹80,000</td>
          <td className="border text-700 ">₹1,00,000</td>
          <td className="border text-700 ">₹1,20,200</td>
          <td className="border font-medium">April & July</td>
        </tr>
      </tbody>

    </table>
  </div>
</section>

            {/* SIBLING STRUCTURE */}
<section className="max-w-7xl mx-auto px-4 py-10 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-orange-600 pl-3">
          SIBLING DISCOUNT & YEARLY FEE
        </h2>

        <div className="overflow-x-auto rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg">
          <table className="w-full text-sm text-center border border-gray-200">
            <thead className="bg-gradient-to-r from-orange-600 to-amber-500 text-white sticky top-0 z-10">
              <tr>
                <th className="p-3 border border-gray-200">Class</th>
                <th>Monthly</th>
                <th>1st Sibling (25%)</th>
                <th>2nd Sibling (75%)</th>
                <th>Yearly (12M)</th>
                <th>Yearly (11M)</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["M1–M3","2700","2025 (24300)","675 (8100)","32400","29700"],
                ["I–V","3700","2775 (33300)","925 (11100)","44400","40700"],
                ["VI–VIII","4500","3375 (40500)","1125 (13500)","54000","49500"],
                ["IX–X","5500","4125 (49500)","1375 (16500)","66000","60500"],
                ["XI–XII (SCI)","7500","5625 (67500)","1875 (22500)","90000","82500"],
                ["XI–XII (COMM)","7000","5250 (63000)","1750 (21000)","84000","77000"],
              ].map((row, i) => (
                <tr key={i} className="border transition hover:scale-[1.01] odd:bg-white even:bg-orange-50 hover:bg-orange-100">
                  {row.map((cell, j) => (
                    <td key={j} className="p-3 border border-gray-200">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

           {/* BOARDER KIT LIST */}
 <section className="max-w-6xl mx-auto px-4 py-10 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-orange-600 pl-3">
          BOARDER'S KIT LIST (BOYS)
        </h2>

        <div className="overflow-x-auto rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg">
          <table className="w-full text-sm text-center border border-gray-200">
            <thead className="bg-gradient-to-r from-orange-600 to-amber-500 text-white sticky top-0 z-10">
              <tr>
                <th className="p-3 border border-gray-200">Item</th>
                <th>Qty</th>
                <th>Item</th>
                <th>Qty</th>
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
                <tr key={i} className="border transition hover:scale-[1.01] odd:bg-white even:bg-orange-50 hover:bg-orange-100 ">
                  {row.map((cell, j) => (
                    <td key={j} className="p-3 border border-gray-200 ">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          <div className="mt-6 bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-4 text-sm border border-gray-100">
          <p className="font-semibold mb-2">Note:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>No laundry services will be provided by school.</li>
            <li>Bring detergent and stain remover.</li>
            <li>No electronic gadgets allowed.</li>
            <li>Carry necessary medications if required.</li>
          </ul>
        </div>
      </section>

{/* Transport Fee*/}

 <section className="max-w-6xl mx-auto px-4 py-10 relative z-10">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-orange-600 pl-3">
    TRANSPORT CHARGES – SESSION 2026–27
  </h2>

  <div className="overflow-x-auto rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg">
    <table className="w-full text-sm text-center border border-gray-200">
      
      <thead className="bg-gradient-to-r from-orange-600 to-amber-500 text-white sticky top-0 z-10">
        <tr>
          <th className="p-3 border">Distance (km)</th>
          <th className="border">Charges</th>
          <th className="border">Stops</th>
        </tr>
      </thead>

      <tbody>
        {[
          [
            "0–2 km",
            "₹600",
            "Titarpur, Masani, Rasgan, Dungerwas, Jonawas, Khaliawas, Nikhari, Kharkhada, Rasgan Dhani, Dungerwas Dhani",
          ],
          [
            "2–5 km",
            "₹800",
            "Khijuri, Jeetpura, Rojpur, Hansaka, Balier",
          ],
          [
            "5–10 km",
            "₹1000",
            "Fideri, Golden Villa, Bass Road, Ashia Ki Panchor, Mundia Kheda, Sheoraj Majra, Jarthal, Bhadsana, Sangwadi, Fadni, Salhawas, Ladhuwas, Budana, Budani, Ramgarh, Bhagwanpura, Kalaka, Mandaniya, Dharuhera, Loharu Ki Dhinai",
          ],
          [
            "10–15 km",
            "₹1500",
            "Kankarwali, Meerpur, Rewari, Bhiwadi, Bestech, Silarpur, Milakpur, U.I.T., Pithanwas, Gokalpur, Lokra, Lokri, Kathuwas",
          ],
          [
            "15–20 km",
            "₹2000",
            "Bawal, Malpura, Cosmos, Rathiwas",
          ],
          [
            "20–25 km",
            "₹2500",
            "Kheda Murar, Surbhi, Trehan, Thada Village",
          ],
          [
            "25 km & Above",
            "₹3000",
            "-",
          ],
        ].map((row, i) => (
          <tr
            key={i}
            className="border transition hover:scale-[1.01] odd:bg-white even:bg-orange-50 hover:bg-orange-100"
          >
            <td className="p-3 border">{row[0]}</td>
            <td className="p-3 border font-semibold text-700">
              {row[1]}
            </td>
            <td className="p-3 border text-left max-w-xs break-words">
              {row[2]}
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  </div>
</section>
  

          {/* Documents Required */}
<section className="max-w-7xl mx-auto px-4 py-10 relative z-10">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-orange-600 pl-3">
    GURUKULAM THE SCHOOL <br />
    Documents Required (Session 2026–27)
  </h2>

  <div className="overflow-x-auto rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg border border-gray-200">
    <table className="w-full text-sm border border-gray-200">
      
      <thead className="bg-gradient-to-r from-orange-600 to-amber-500 text-white sticky top-0 z-10">
        <tr>
          <th className="p-4 border w-1/4">Class</th>
          <th className="border p-4">Documents</th>
        </tr>
      </thead>

      <tbody>

        {/* M1–M3 */}
        <tr className="border odd:bg-white even:bg-orange-50 hover:bg-orange-100">
          <td className="p-4 border font-semibold">M1–M3</td>
          <td className="p-4 border">
            <ul className="list-disc pl-6 space-y-1">
              <li>Birth Certificate</li>
              <li>Aadhar Card (Student & Parents)</li>
              <li>Photographs (Student & Parents)</li>
              <li>Family ID</li>
            </ul>
          </td>
        </tr>

        {/* II–IX */}
        <tr className="border odd:bg-white even:bg-orange-50 hover:bg-orange-100">
          <td className="p-4 border font-semibold">II–IX</td>
          <td className="p-4 border">
            <ul className="list-disc pl-6 space-y-1">
              <li>School Leaving Certificate</li>
              <li>Aadhar Card (Student & Parents)</li>
              <li>Photographs (Student & Parents)</li>
              <li>Family ID</li>
              <li>Report Card</li>
              <li>Apaar ID</li>
            </ul>
          </td>
        </tr>

        {/* X & XII */}
        <tr className="border odd:bg-white even:bg-orange-50 hover:bg-orange-100">
          <td className="p-4 border font-semibold">X & XII</td>
          <td className="p-4 border">
            <ul className="list-disc pl-6 space-y-1">
              <li>Aadhar Card (Student & Parents)</li>
              <li>Family ID</li>
              <li>Application for direct admission permission</li>
              <li>Registration Number (Class IX / XI Board)</li>
              <li>School Leaving Certificate (if from another board)</li>
              <li>Undertaking regarding distance</li>
              <li>Photographs (Student & Parents)</li>
              <li>Apaar ID</li>
            </ul>
          </td>
        </tr>

        {/* XI */}
        <tr className="border odd:bg-white even:bg-orange-50 hover:bg-orange-100">
          <td className="p-4 border font-semibold">XI</td>
          <td className="p-4 border">
            <ul className="list-disc pl-6 space-y-1">
              <li>School Leaving Certificate</li>
              <li>10th Mark Sheet</li>
              <li>Aadhar Card (Student & Parents)</li>
              <li>Photographs (Student & Parents)</li>
              <li>Family ID</li>
              <li>Apaar ID</li>
            </ul>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

    </div>
  );
}