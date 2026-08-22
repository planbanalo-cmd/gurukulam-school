"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Coffee,
  Moon,
  Sparkles,
  Sun,
  Timer,
  Clock,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type ScheduleItem = {
  time: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

/* =========================================================
   WEEKDAY SCHEDULE
========================================================= */

const weekdaySchedule: ScheduleItem[] = [
  {
    time: "5:30 AM",
    title: "Wake Up",
    description:
      "Fresh start to the day with personal hygiene.",
    icon: Sun,
  },
  {
    time: "6:00 AM",
    title: "Morning Exercise / Yoga",
    description:
      "Physical fitness and mental wellness activities.",
    icon: Activity,
  },
  {
    time: "7:00 AM",
    title: "Breakfast",
    description:
      "Nutritious and balanced meal.",
    icon: Coffee,
  },
  {
    time: "7:30 AM",
    title: "Get Ready for School",
    description:
      "Preparation for academic hours.",
    icon: Sparkles,
  },
  {
    time: "8:00 AM – 2:00 PM",
    title: "School Hours",
    description:
      "Classes, learning and academic development.",
    icon: BookOpen,
  },
  {
    time: "2:00 PM",
    title: "Lunch & Rest",
    description:
      "A healthy lunch followed by time to relax and recharge.",
    icon: Coffee,
  },
  {
    time: "4:00 PM",
    title: "Sports / Activities",
    description:
      "Outdoor games and co-curricular engagement.",
    icon: Activity,
  },
  {
    time: "6:00 PM",
    title: "Evening Study Hours",
    description:
      "Supervised study sessions and academic revision.",
    icon: BookOpen,
  },
  {
    time: "8:00 PM",
    title: "Dinner",
    description:
      "Healthy and hygienic evening meal.",
    icon: Coffee,
  },
  {
    time: "9:00 PM",
    title: "Light Study / Relaxation",
    description:
      "Revision, reading or peaceful leisure time.",
    icon: Sparkles,
  },
  {
    time: "10:00 PM",
    title: "Lights Off",
    description:
      "Proper rest and preparation for the next day.",
    icon: Moon,
  },
];

/* =========================================================
   SUNDAY SCHEDULE
========================================================= */

const sundaySchedule: ScheduleItem[] = [
  {
    time: "7:00 AM",
    title: "Wake Up",
    description:
      "A relaxed start to the Sunday morning.",
    icon: Sun,
  },
  {
    time: "7:30 AM",
    title: "Morning Prayer & Meditation",
    description:
      "Begin the day with peace, mindfulness and gratitude.",
    icon: Sparkles,
  },
  {
    time: "8:30 AM",
    title: "Breakfast",
    description:
      "A healthy and nutritious Sunday breakfast.",
    icon: Coffee,
  },
  {
    time: "9:30 AM – 11:00 AM",
    title: "Personal Time",
    description:
      "Time for reading, hobbies, music or personal activities.",
    icon: Sparkles,
  },
  {
    time: "11:00 AM",
    title: "Outdoor Games & Recreation",
    description:
      "Enjoy outdoor games, sports and recreational activities.",
    icon: Activity,
  },
  {
    time: "1:00 PM",
    title: "Sunday Lunch",
    description:
      "A wholesome meal followed by a relaxed afternoon.",
    icon: Coffee,
  },
  {
    time: "2:00 PM – 4:00 PM",
    title: "Rest & Leisure",
    description:
      "Relax, recharge or connect with friends and family.",
    icon: Moon,
  },
  {
    time: "4:00 PM",
    title: "Hobbies & Creative Activities",
    description:
      "Explore creativity through art, music, reading and hobbies.",
    icon: Sparkles,
  },
  {
    time: "6:00 PM",
    title: "Evening Walk & Recreation",
    description:
      "Enjoy fresh air and spend quality time outdoors.",
    icon: Activity,
  },
  {
    time: "7:30 PM",
    title: "Dinner",
    description:
      "A healthy and relaxed Sunday evening meal.",
    icon: Coffee,
  },
  {
    time: "8:30 PM",
    title: "Reflection & Reading",
    description:
      "Prepare mentally and academically for the week ahead.",
    icon: BookOpen,
  },
  {
    time: "10:00 PM",
    title: "Lights Off",
    description:
      "A peaceful night's rest before the new school week.",
    icon: Moon,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DailySchedule() {
  const [currentTime, setCurrentTime] = useState(new Date());

  /* -------------------------------------------------------
     LIVE CLOCK
  ------------------------------------------------------- */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* -------------------------------------------------------
     SUNDAY DETECTION
     
     Sunday = 0
     Monday = 1
     ...
     Saturday = 6
  ------------------------------------------------------- */

  const isSunday = currentTime.getDay() === 0;

  const schedule = isSunday
    ? sundaySchedule
    : weekdaySchedule;

  /* -------------------------------------------------------
     TIME CONVERSION
  ------------------------------------------------------- */

  const getMinutes = (time: string) => {
    const [hourMin, period] = time.trim().split(" ");

    let [hours, minutes] = hourMin
      .split(":")
      .map(Number);

    if (period === "PM" && hours !== 12) {
      hours += 12;
    }

    if (period === "AM" && hours === 12) {
      hours = 0;
    }

    return hours * 60 + minutes;
  };

  /* -------------------------------------------------------
     GET START / END TIME
  ------------------------------------------------------- */

  const getTimeRange = (time: string) => {
    if (time.includes("–")) {
      const [start, end] = time
        .split("–")
        .map((t) => t.trim());

      return {
        start: getMinutes(start),
        end: getMinutes(end),
      };
    }

    return {
      start: getMinutes(time),
      end: null,
    };
  };

  /* -------------------------------------------------------
     CURRENT TIME
  ------------------------------------------------------- */

  const nowMinutes =
    currentTime.getHours() * 60 +
    currentTime.getMinutes();

  const nowSeconds =
    currentTime.getHours() * 3600 +
    currentTime.getMinutes() * 60 +
    currentTime.getSeconds();

  /* -------------------------------------------------------
     ACTIVE ACTIVITY
  ------------------------------------------------------- */

  const activeIndex = useMemo(() => {
    return schedule.findIndex((item, index) => {
      const current = getTimeRange(item.time);

      const startSeconds = current.start * 60;

      let endSeconds: number;

      if (current.end !== null) {
        endSeconds = current.end * 60;
      } else if (index < schedule.length - 1) {
        endSeconds =
          getTimeRange(schedule[index + 1].time)
            .start * 60;
      } else {
        endSeconds = 24 * 60 * 60;
      }

      return (
        nowSeconds >= startSeconds &&
        nowSeconds < endSeconds
      );
    });
  }, [nowSeconds, schedule]);

  const activeActivity =
    activeIndex >= 0
      ? schedule[activeIndex]
      : null;

  /* -------------------------------------------------------
     NEXT ACTIVITY
  ------------------------------------------------------- */

  const nextActivity =
    activeIndex >= 0
      ? schedule[activeIndex + 1]
      : schedule.find(
          (item) =>
            getTimeRange(item.time).start >
            nowMinutes
        );

  /* -------------------------------------------------------
     ROUTINE START / END
  ------------------------------------------------------- */

  const routineStart = isSunday
    ? 7 * 60
    : 5 * 60 + 30;

  const routineEnd = 22 * 60;

  /* -------------------------------------------------------
     OVERALL ROUTINE PROGRESS
  ------------------------------------------------------- */

  const routineProgress = Math.min(
    100,
    Math.max(
      0,
      ((nowMinutes - routineStart) /
        (routineEnd - routineStart)) *
        100
    )
  );

  /* -------------------------------------------------------
     CURRENT ACTIVITY PROGRESS
  ------------------------------------------------------- */

  let activityProgress = 0;
  let remainingSeconds = 0;

  if (activeIndex >= 0) {
    const current = getTimeRange(
      schedule[activeIndex].time
    );

    const startSeconds = current.start * 60;

    let endSeconds: number;

    if (current.end !== null) {
      endSeconds = current.end * 60;
    } else if (activeIndex < schedule.length - 1) {
      endSeconds =
        getTimeRange(
          schedule[activeIndex + 1].time
        ).start * 60;
    } else {
      endSeconds = 24 * 60 * 60;
    }

    const duration =
      endSeconds - startSeconds;

    activityProgress = Math.min(
      100,
      Math.max(
        0,
        ((nowSeconds - startSeconds) /
          duration) *
          100
      )
    );

    remainingSeconds = Math.max(
      0,
      endSeconds - nowSeconds
    );
  }

  /* -------------------------------------------------------
     REMAINING TIME FORMAT
  ------------------------------------------------------- */

  const formatRemainingTime = (
    seconds: number
  ) => {
    const hours = Math.floor(
      seconds / 3600
    );

    const minutes = Math.floor(
      (seconds % 3600) / 60
    );

    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }

    return `${minutes}m ${secs}s`;
  };

  /* -------------------------------------------------------
     DATE & TIME
  ------------------------------------------------------- */

  const formattedDate =
    currentTime.toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    );

  const formattedTime =
    currentTime.toLocaleTimeString(
      "en-IN",
      {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }
    );

  /* =======================================================
     UI
  ======================================================= */

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef5f1] via-[#fbfaf6] to-[#edf5f1] py-10 md:py-16 px-4 md:px-8 lg:px-16">

      <div className="max-w-6xl mx-auto">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mb-10"
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#156445]/10 text-[#156445] text-sm font-semibold mb-5">

            <CalendarDays className="w-4 h-4" />

            {isSunday
              ? "Sunday Wellness Routine"
              : "Hosteller Daily Routine"}

          </div>

          {/* Heading */}

          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] bg-clip-text text-transparent">

            {isSunday
              ? "Sunday at Gurukulam"
              : "Daily Schedule"}

          </h1>

          {/* Description */}

          <p className="text-gray-600 mt-5 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">

            {isSunday
              ? "A peaceful Sunday designed for relaxation, recreation, creativity and personal well-being."
              : "At Gurukulam The School, every day is thoughtfully structured to create a healthy balance between academics, discipline, physical activity and rest."}

          </p>

        </motion.div>

        {/* =================================================
            LIVE CLOCK
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className={`relative overflow-hidden rounded-3xl text-white shadow-2xl mb-8 ${
            isSunday
              ? "bg-gradient-to-br from-[#296236] via-[#156445] to-[#0D6453]"
              : "bg-gradient-to-br from-[#0D6453] to-[#156445]"
          }`}
        >

          {/* Decorative circles */}

          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />

          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10 p-6 md:p-8">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              {/* TIME */}

              <div>

                <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-3">

                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />

                  {isSunday
                    ? "SUNDAY ROUTINE"
                    : "LIVE SCHOOL TIME"}

                </div>

                <div className="text-4xl md:text-6xl font-bold tracking-tight">

                  {formattedTime}

                </div>

                <div className="text-white/80 mt-2 text-base md:text-lg">

                  {formattedDate}

                </div>

              </div>

              {/* PROGRESS */}

              <div className="lg:text-right">

                <div className="text-sm text-white/70 mb-2">

                  {isSunday
                    ? "Sunday Wellness Progress"
                    : "Today's Routine Progress"}

                </div>

                <div className="text-3xl font-bold">

                  {Math.round(
                    routineProgress
                  )}
                  %

                </div>

                <div className="w-full lg:w-64 h-2 bg-white/20 rounded-full overflow-hidden mt-3">

                  <motion.div
                    className="h-full bg-white rounded-full"
                    animate={{
                      width: `${routineProgress}%`,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  />

                </div>

                <p className="text-xs text-white/60 mt-2">

                  {isSunday
                    ? "7:00 AM — 10:00 PM"
                    : "5:30 AM — 10:00 PM"}

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* =================================================
            CURRENT + NEXT
        ================================================= */}

        {activeActivity && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="grid md:grid-cols-2 gap-5 mb-12"
          >

            {/* CURRENT */}

            <div className="bg-white rounded-2xl border border-green-200 shadow-lg p-6">

              <div className="flex items-center justify-between mb-5">

                <div className="flex items-center gap-2 text-green-700 font-semibold text-sm">

                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                  CURRENT ACTIVITY

                </div>

                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">

                  LIVE NOW

                </span>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">

                  <activeActivity.icon className="w-6 h-6 text-[#156445]" />

                </div>

                <div>

                  <p className="text-sm text-gray-500">

                    {activeActivity.time}

                  </p>

                  <h2 className="text-xl font-bold text-[#156445] mt-1">

                    {activeActivity.title}

                  </h2>

                  <p className="text-gray-600 text-sm mt-2">

                    {activeActivity.description}

                  </p>

                </div>

              </div>

              {/* Progress */}

              <div className="mt-6">

                <div className="flex justify-between text-xs text-gray-500 mb-2">

                  <span>
                    Activity Progress
                  </span>

                  <span>
                    {Math.floor(
                      activityProgress
                    )}
                    %
                  </span>

                </div>

                <div className="h-2 bg-green-100 rounded-full overflow-hidden">

                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-[#156445]"
                    animate={{
                      width: `${activityProgress}%`,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  />

                </div>

                <div className="flex items-center gap-2 mt-3 text-xs text-green-700 font-medium">

                  <Timer className="w-4 h-4" />

                  {formatRemainingTime(
                    remainingSeconds
                  )}{" "}
                  remaining

                </div>

              </div>

            </div>

            {/* NEXT */}

            {nextActivity && (
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-[#156445]/10 shadow-lg p-6">

                <div className="flex items-center gap-2 text-[#156445] font-semibold text-sm mb-5">

                  <ChevronRight className="w-4 h-4" />

                  UP NEXT

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-[#156445]/10 flex items-center justify-center">

                    <nextActivity.icon className="w-6 h-6 text-[#156445]" />

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">

                      {nextActivity.time}

                    </p>

                    <h2 className="text-xl font-bold text-gray-800 mt-1">

                      {nextActivity.title}

                    </h2>

                    <p className="text-gray-600 text-sm mt-2">

                      {nextActivity.description}

                    </p>

                  </div>

                </div>

              </div>
            )}

          </motion.div>
        )}

        {/* =================================================
            NO ACTIVE ACTIVITY
        ================================================= */}

        {!activeActivity && (
          <div className="mb-12 bg-white/80 backdrop-blur-xl border border-[#156445]/10 rounded-2xl p-6 text-center shadow-lg">

            <Clock className="w-8 h-8 text-[#156445] mx-auto mb-3" />

            <h2 className="text-xl font-bold text-gray-800">

              The daily routine has not started yet.

            </h2>

            <p className="text-gray-500 text-sm mt-2">

              The next scheduled activity will appear
              automatically.

            </p>

          </div>
        )}

        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="relative">

          {/* Timeline Line */}

          <div className="absolute left-[25px] md:left-[30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#156445]/30 via-[#156445]/15 to-transparent" />

          <div className="space-y-6">

            {schedule.map((item, i) => {

              const current =
                getTimeRange(item.time);

              const start = current.start;

              const end =
                current.end !== null
                  ? current.end
                  : i < schedule.length - 1
                  ? getTimeRange(
                      schedule[i + 1].time
                    ).start
                  : 24 * 60;

              const isActive =
                nowMinutes >= start &&
                nowMinutes < end;

              const isCompleted =
                nowMinutes >= end;

              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x:
                      i % 2 === 0
                        ? -30
                        : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.04,
                  }}
                  className="relative flex gap-5 md:gap-7"
                >

                  {/* Timeline Icon */}

                  <div
                    className={`
                      relative z-10 shrink-0
                      w-[52px] h-[52px]
                      md:w-[60px] md:h-[60px]
                      rounded-2xl
                      flex items-center justify-center
                      border-4 border-[#f4f7f3]
                      shadow-lg
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-green-600 scale-110 shadow-green-200"
                          : isCompleted
                          ? "bg-[#156445]"
                          : "bg-white border-gray-100"
                      }
                    `}
                  >

                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    ) : (
                      <Icon
                        className={`w-5 h-5 md:w-6 md:h-6 ${
                          isActive
                            ? "text-white"
                            : "text-[#156445]"
                        }`}
                      />
                    )}

                  </div>

                  {/* CARD */}

                  <div
                    className={`
                      flex-1
                      rounded-2xl
                      p-5 md:p-6
                      border
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-green-50 border-green-400 shadow-xl"
                          : isCompleted
                          ? "bg-white/70 border-green-100"
                          : "bg-white/80 border-[#156445]/10 shadow-md hover:shadow-lg"
                      }
                    `}
                  >

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">

                      <div>

                        {/* TIME + STATUS */}

                        <div className="flex flex-wrap items-center gap-2">

                          <span
                            className={`text-sm font-bold ${
                              isActive
                                ? "text-green-700"
                                : "text-[#156445]"
                            }`}
                          >
                            {item.time}
                          </span>

                          {isActive && (
                            <span className="px-2.5 py-1 rounded-full bg-green-600 text-white text-[10px] font-bold tracking-wide animate-pulse">
                              LIVE NOW
                            </span>
                          )}

                          {isCompleted && (
                            <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">
                              COMPLETED
                            </span>
                          )}

                        </div>

                        {/* TITLE */}

                        <h3
                          className={`text-lg md:text-xl font-bold mt-2 ${
                            isActive
                              ? "text-green-700"
                              : "text-gray-800"
                          }`}
                        >
                          {item.title}
                        </h3>

                        {/* DESCRIPTION */}

                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                          {item.description}
                        </p>

                      </div>

                      <div className="hidden md:flex">

                        <Clock
                          className={`w-5 h-5 ${
                            isActive
                              ? "text-green-600"
                              : "text-gray-300"
                          }`}
                        />

                      </div>

                    </div>

                    {/* ACTIVE PROGRESS */}

                    {isActive && (
                      <div className="mt-5">

                        <div className="flex justify-between text-xs text-green-700 font-medium mb-2">

                          <span>
                            Currently in progress
                          </span>

                          <span>
                            {Math.floor(
                              activityProgress
                            )}
                            %
                          </span>

                        </div>

                        <div className="h-2 bg-green-100 rounded-full overflow-hidden">

                          <motion.div
                            className="h-full bg-gradient-to-r from-green-400 via-green-500 to-[#156445]"
                            animate={{
                              width: `${activityProgress}%`,
                            }}
                            transition={{
                              duration: 0.4,
                            }}
                          />

                        </div>

                      </div>
                    )}

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* =================================================
            BOTTOM QUOTE
        ================================================= */}

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
          className="mt-16"
        >

          <div className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-[#156445]/10 rounded-3xl p-8 md:p-10 text-center shadow-xl">

            {/* Gold line */}

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#156445] to-[#E4CC6F] rounded-full" />

            <Sparkles className="w-6 h-6 text-[#E4CC6F] mx-auto mb-4" />

            <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#156445] to-[#296236] bg-clip-text text-transparent">

              {isSunday
                ? "“A peaceful mind, a healthy body, and a joyful heart prepare us for a successful week ahead.”"
                : "“A disciplined routine that builds success, confidence, and balance in life.”"}

            </p>

            <p className="text-sm text-gray-500 mt-4">

              Gurukulam The School

            </p>

          </div>

        </motion.div>

      </div>
    </div>
  );
}