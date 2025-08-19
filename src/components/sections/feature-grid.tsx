"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { iconMap, type IconName } from "@/lib/icons";

interface FeatureGridProps {
  title: string;
  features: {
    icon: IconName;
    title: string;
    description: string;
  }[];
  className?: string;
}

export function FeatureGrid({ title, features, className = "" }: FeatureGridProps) {
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="bg-white border-primary-100/60 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary-600" />
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
      </div>
    </section>
  );
}
