"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Quote,
  ArrowDown,
  ArrowUp,
  Sparkles,
} from "lucide-react";

export default function ChairmanMessage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="
        relative
        overflow-hidden
        py-16
        sm:py-20
        md:py-24
        lg:py-28
        px-4
        sm:px-6
        md:px-8
        lg:px-16
        bg-gradient-to-br
        from-[#f8faf9]
        via-white
        to-[#f3f7f4]
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          absolute
          -top-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#156445]/5
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#CFAF5C]/5
          blur-3xl
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ===================================================
            SECTION HEADING
        =================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-14 md:mb-20"
        >
          {/* Small Label */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              mb-5
              rounded-full
              bg-[#156445]/5
              border
              border-[#156445]/10
              text-[#156445]
              text-xs
              sm:text-sm
              font-semibold
              uppercase
              tracking-[0.16em]
            "
          >
            <Sparkles size={15} />

            Leadership & Vision
          </div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              leading-tight
              bg-gradient-to-r
              from-[#156445]
              via-[#0D6453]
              to-[#296236]
              bg-clip-text
              text-transparent
            "
          >
            CEO Message
          </h2>

          {/* Decorative Line */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              mt-5
            "
          >
            <span
              className="
                h-[1px]
                w-12
                sm:w-16
                bg-[#CFAF5C]
              "
            />

            <span
              className="
                w-2
                h-2
                rounded-full
                bg-[#CFAF5C]
              "
            />

            <span
              className="
                h-[1px]
                w-12
                sm:w-16
                bg-[#CFAF5C]
              "
            />
          </div>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-5
              text-gray-500
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
            A message from our leadership on education,
            character, values, and the future we are
            building together.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.1fr]
            gap-12
            lg:gap-20
            items-center
          "
        >

          {/* =================================================
              CEO IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              relative
              max-w-lg
              mx-auto
              w-full
            "
          >

            {/* Green Glow */}

            <div
              className="
                absolute
                -inset-5
                sm:-inset-7
                rounded-[40px]
                bg-gradient-to-br
                from-[#156445]
                via-[#0D6453]
                to-[#296236]
                opacity-[0.08]
                blur-2xl
              "
            />

            {/* Gold Frame */}

            <div
              className="
                absolute
                -inset-2
                rounded-[34px]
                border
                border-[#CFAF5C]/30
                pointer-events-none
              "
            />

            {/* Image Container */}

            <div
              className="
                relative
                h-[430px]
                sm:h-[500px]
                md:h-[560px]
                overflow-hidden
                rounded-[28px]
                bg-gray-100
                shadow-[0_25px_70px_rgba(13,100,83,0.16)]
              "
            >

              <Image
                src="/images/Leader&Management/CEO.jpeg"
                alt="Mr. CP Braham Prakash Yadav, CEO of Gurukulam The School"
                fill
                priority
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 80vw,
                  45vw
                "
                className="
                  object-cover
                  object-top
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />

              {/* Image Gradient */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-40
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                "
              />

              {/* Image Name */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  text-white
                "
              >

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-[#E4CC6F]
                    font-semibold
                    mb-1
                  "
                >
                  Leadership
                </p>

                <h3
                  className="
                    text-lg
                    sm:text-xl
                    md:text-2xl
                    font-bold
                  "
                >
                  Mr. CP Braham Prakash Yadav
                </h3>

                <p
                  className="
                    text-white/75
                    text-sm
                    mt-1
                  "
                >
                  Chief Executive Officer
                </p>

              </div>

            </div>

            {/* Floating Badge */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className="
                absolute
                -bottom-5
                -right-2
                sm:-right-5
                bg-white
                rounded-2xl
                px-5
                py-4
                shadow-xl
                border
                border-[#156445]/10
              "
            >

              <div
                className="
                  text-[#156445]
                  text-2xl
                  font-extrabold
                "
              >
                20+
              </div>

              <div
                className="
                  text-gray-500
                  text-xs
                  font-medium
                "
              >
                Years of Educational
                <br />
                Excellence
              </div>

            </motion.div>

          </motion.div>

          {/* =================================================
              MESSAGE CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative"
          >

            {/* Quote Card */}

            <div
              className="
                relative
                mb-8
                p-6
                sm:p-7
                md:p-8
                rounded-3xl
                bg-gradient-to-br
                from-[#156445]/5
                to-[#CFAF5C]/5
                border
                border-[#156445]/10
              "
            >

              {/* Quote Icon */}

              <div
                className="
                  absolute
                  -top-5
                  left-6
                  w-11
                  h-11
                  rounded-xl
                  bg-gradient-to-br
                  from-[#156445]
                  to-[#0D6453]
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <Quote
                  size={20}
                  fill="currentColor"
                />
              </div>

              <p
                className="
                  pt-3
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-medium
                  leading-relaxed
                  text-[#156445]
                  italic
                "
              >
                “The purpose of education is not to
                fill minds, but to ignite them.”
              </p>

            </div>

            {/* Intro */}

            <p
              className="
                text-gray-700
                text-base
                sm:text-lg
                leading-[1.85]
                mb-5
              "
            >
              Education is not merely about preparing
              children for examinations; it is about
              shaping their character and preparing them
              for life itself. At our school, we are deeply
              committed to creating an environment where
              every child discovers their true potential,
              nurtures their curiosity, and evolves into a
              confident, compassionate, and responsible
              individual.
            </p>

            {/* Expanded Content */}

            <div
              className={`
                overflow-hidden
                transition-all
                duration-700
                ${
                  expanded
                    ? "max-h-[1200px] opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >

              <div className="space-y-5">

                <p
                  className="
                    text-gray-600
                    text-base
                    sm:text-lg
                    leading-[1.85]
                  "
                >
                  The real strength of an institution lies
                  not only in academic excellence but in the
                  values it instills and the vision it
                  upholds. We envision a learning community
                  where curiosity drives exploration,
                  discipline comes from within, and
                  innovation is a way of life. We empower
                  our students to dream without fear, think
                  with independence, and act with
                  integrity—qualities that will enable them
                  to face the complexities of the modern
                  world with courage and conviction.
                </p>

                <p
                  className="
                    text-gray-600
                    text-base
                    sm:text-lg
                    leading-[1.85]
                  "
                >
                  As a residential school, we provide more
                  than education—we provide a{" "}
                  <span
                    className="
                      font-bold
                      text-[#0D6453]
                    "
                  >
                    “Home Away From Home.”
                  </span>{" "}
                  Here, every experience, whether in the
                  classroom, on the field, or in daily life,
                  contributes to shaping character,
                  strengthening resilience, and building
                  lifelong values.
                </p>

                <p
                  className="
                    text-gray-600
                    text-base
                    sm:text-lg
                    leading-[1.85]
                  "
                >
                  We are dedicated to nurturing not just
                  achievers, but future leaders—individuals
                  who will lead with wisdom, serve with
                  empathy, and contribute meaningfully to
                  society.
                </p>

                <p
                  className="
                    text-gray-600
                    text-base
                    sm:text-lg
                    leading-[1.85]
                  "
                >
                  Our mission is to ensure that every child
                  who enters our gates is transformed—not
                  just academically, but holistically—
                  emerging as a confident individual with a
                  strong sense of purpose and responsibility.
                </p>

                <p
                  className="
                    text-gray-600
                    text-base
                    sm:text-lg
                    leading-[1.85]
                  "
                >
                  Let us continue to move forward together
                  with unwavering dedication, guided by our
                  vision of excellence and our commitment to
                  holistic education. Together, we will shape
                  a future where our students not only
                  succeed but inspire.
                </p>

                {/* Closing Quote */}

                <div
                  className="
                    mt-6
                    p-5
                    sm:p-6
                    rounded-2xl
                    bg-[#156445]/5
                    border-l-4
                    border-[#CFAF5C]
                  "
                >
                  <p
                    className="
                      text-[#156445]
                      font-semibold
                      italic
                      leading-relaxed
                    "
                  >
                    “Give your children wings of knowledge
                    and roots of values, and they will
                    conquer the world with humility and
                    strength.”
                  </p>
                </div>

              </div>

            </div>

            {/* Read More Button */}

            <button
              type="button"
              onClick={() =>
                setExpanded((prev) => !prev)
              }
              aria-expanded={expanded}
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-xl
                bg-[#156445]/5
                hover:bg-[#156445]
                text-[#156445]
                hover:text-white
                border
                border-[#156445]/10
                font-semibold
                text-sm
                transition-all
                duration-300
                hover:shadow-lg
              "
            >
              {expanded ? (
                <>
                  Read Less
                  <ArrowUp size={17} />
                </>
              ) : (
                <>
                  Read Full Message
                  <ArrowDown size={17} />
                </>
              )}
            </button>

            {/* Signature */}

            <div
              className="
                mt-9
                pt-6
                border-t
                border-gray-200
              "
            >

              <p
                className="
                  text-sm
                  text-gray-500
                  mb-2
                "
              >
                Warm regards,
              </p>

              <p
                className="
                  text-lg
                  font-bold
                  text-[#156445]
                "
              >
                Mr. CP Braham Prakash Yadav
              </p>

              <p
                className="
                  text-sm
                  text-gray-500
                  mt-1
                "
              >
                CEO, Gurukulam The School
              </p>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}