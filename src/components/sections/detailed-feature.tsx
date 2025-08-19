"use client";

import { motion } from "motion/react";
import { iconMap, type IconName } from "@/lib/icons";

interface DetailedFeatureProps {
  icon: IconName;
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
}

export function DetailedFeature({ 
  icon, 
  title, 
  description, 
  features, 
  reverse = false 
}: DetailedFeatureProps) {
  const IconComponent = iconMap[icon];
  
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
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}
    >
      <motion.div 
        variants={fadeInUp}
        className={reverse ? 'lg:order-2' : ''}
      >
        <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
          <IconComponent className="w-8 h-8 text-primary-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              variants={fadeInUp}
              className="flex items-start"
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-700">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div 
        variants={fadeInUp}
        className={reverse ? 'lg:order-1' : ''}
      >
        <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
          <IconComponent className="w-24 h-24 text-primary-600" />
        </div>
      </motion.div>
    </motion.div>
  );
}
