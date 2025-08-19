"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { iconMap } from "@/lib/icons";
import { LottiePlayer } from "@/components/ui/lottie-player";
import lottieAnimation from "@/assets/lottie/tutor.json";

const SearchIcon = iconMap["magnifying-glass"];
const WritingIcon = iconMap["writing-hand"];

export function ConsultantsHero() {
  return (
    <section className="relative h-[90vh] bg-gradient-to-b from-primary-50 to-white  flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Your Teacher.{" "}
              <span className="text-primary-600">Learn from the Best.</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl"
            >
              Browse through our community of language teachers, coaches, and consultants.
              Hire experts for 1-on-1 lessons, or explore their blog posts to learn from
              their shared experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg"
              >
                <SearchIcon className="w-5 h-5 mr-2" />
                Browse Teachers
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 shadow-2xl flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <div className="w-full h-full max-w-[500px] max-h-[400px]">
                    <LottiePlayer
                      animationData={lottieAnimation}
                      className="w-full h-full"
                      loop={true}
                      autoplay={true}
                    />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-12 w-32 h-32 bg-primary-200 rounded-full opacity-40"></div>
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
