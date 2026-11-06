"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { iconMap } from "@/lib/icons";

const BrainIcon = iconMap.brain;
const BriefcaseIcon = iconMap.briefcase;
const SpeechBubbleIcon = iconMap["speech-bubble"];
const DollarIcon = iconMap.dollar;
const SparklesIcon = iconMap.star2;

export function WhatIsParlezhub() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const features = [
    {
      icon: BriefcaseIcon,
      title: "Post Your Gig",
      description: "Language teaching, career coaching, consulting, and more",
      color: "bg-primary-100 text-primary-600"
    },
    {
      icon: SpeechBubbleIcon,
      title: "Connect & Collaborate", 
      description: "Direct communication with learners and clients",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BrainIcon,
      title: "Share Knowledge",
      description: "Chat and collaborate directly on the platform",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: DollarIcon,
      title: "Earn Revenue",
      description: "Monetize your expertise and build your income",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center mb-4"
          >
            <SparklesIcon className="w-8 h-8 text-primary-500 mr-3" />
            <Badge variant="secondary" className="bg-primary-50 text-primary-700 px-4 py-1 text-sm font-medium">
              AI-Powered Platform
            </Badge>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            What is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
              Parlezhub
            </span>
            ?
          </motion.h2>
          
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Parlezhub is an <span className="font-semibold text-primary-600">AI-powered voice agent</span> that makes
              learning natural and interactive. Our AI helps you learn new languages through real conversations, 
              correcting your pronunciation, grammar, and fluency in real time.
            </p>
            
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                But that&apos;s not all—Parlezhub also empowers <span className="font-semibold text-primary-700">freelancers and consultants</span> by
                providing a unique marketplace where you can build your business and connect with clients worldwide.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="bg-white border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              The Perfect Blend of AI and Human Expertise
            </h3>
            <p className="text-primary-100 text-lg leading-relaxed max-w-3xl mx-auto">
              Experience the future of language learning with our AI tutor, while connecting with 
              real teachers and consultants who can guide you on your journey to fluency and success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
