"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { iconMap } from "@/lib/icons";
import { LottiePlayer } from "@/components/ui/lottie-player";
import micAnimation from "@/assets/lottie/mic.json";
import flagAnimation from "@/assets/lottie/flags.json";
import { APP_ROUTES } from "@/constants/routes";
import Link from "next/link";
import { StarIcon } from "lucide-react";

const MicrophoneIcon = iconMap.microphone;
const BriefcaseIcon = iconMap.briefcase;

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white h-[90vh] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your AI-Powered{" "}
              <span className="text-primary-500">Voice Agent</span> for Learning
              & Earning
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl"
            >
              ParlezHub helps you learn languages interactively through a voice AI tutor,
              while also providing a marketplace for teachers, coaches, and consultants to
              share their skills, post gigs, and earn—just like freelancing platforms but
              powered by AI chat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col lg:flex-row lg:items-center gap-6 justify-center lg:justify-start"
            >
              <Link href={APP_ROUTES.LANGUAGE}>
                <Button
                  className="h-auto px-10 rounded-full bg-primary-600 text-white text-lg font-semibold hover:bg-primary-700 transition-all w-full sm:w-auto"
                >
                  <MicrophoneIcon className="w-6 h-6 mr-2" />
                  Start Learning Now
                </Button>
              </Link>

              <div className="flex items-center gap-1 p-1.5 bg-white/80 backdrop-blur-sm border border-primary-100 rounded-full shadow-sm w-fit mx-auto lg:mx-0">
                <span className="text-sm font-medium text-gray-500 pl-4 pr-2 whitespace-nowrap hidden sm:inline">Join as:</span>
                <div className="flex items-center gap-1">
                  <Link href={APP_ROUTES.SIGN_UP}>
                    <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary-50 text-primary-700 font-medium px-4 h-9">
                      <BriefcaseIcon className="w-4 h-4 mr-2" />
                      Teacher
                    </Button>
                  </Link>
                  <div className="w-px h-4 bg-primary-100 hidden sm:block"></div>
                  <Link href={APP_ROUTES.SIGN_UP}>
                    <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary-50 text-primary-700 font-medium px-4 h-9">
                      <StarIcon className="w-4 h-4 mr-2" />
                      Astrologer
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative flex items-center justify-center">
              {/* Background rotating flags */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px]">
                  <LottiePlayer
                    animationData={flagAnimation}
                    className="w-full h-full"
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>

              {/* Center microphone animations */}
              <div className="relative z-10 w-48 h-48 flex items-center justify-center">
                <div className="w-32 h-32">
                  <LottiePlayer
                    animationData={micAnimation}
                    className="w-full h-full"
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>

              {/* Subtle decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-100 rounded-full opacity-40"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-200 rounded-full opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-300 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-primary-500 rounded-full opacity-50"></div>
      </div>
    </section>
  );
}
