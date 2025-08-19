"use client";

import { motion } from "motion/react";
import { iconMap, type IconName } from "@/lib/icons";

interface ReasonsProps {
  title: string;
  reasons: {
    icon: IconName;
    title: string;
    description: string;
  }[];
  className?: string;
}

export function Reasons({ title, reasons, className = "" }: ReasonsProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16"
        >
          {title}
        </motion.h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {reasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
