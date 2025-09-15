"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { iconMap, type IconName } from "@/lib/icons";
import Link from "next/link";

interface CTASplitProps {
  leftCTA: {
    title: string;
    description: string;
    buttonText: string;
    buttonIcon: IconName;
    href: string;
  };
  rightCTA: {
    title: string;
    description: string;
    buttonText: string;
    buttonIcon: IconName;
    href: string;
  };
  className?: string;
}

export function CTASplit({ leftCTA, rightCTA, className = "" }: CTASplitProps) {
  const LeftIcon = iconMap[leftCTA.buttonIcon];
  const RightIcon = iconMap[rightCTA.buttonIcon];

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-primary-50 to-primary-100/50 border-primary-200 rounded-2xl shadow-sm h-full">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {leftCTA.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {leftCTA.description}
                </p>
                <Link href={leftCTA.href}>
                  <Button 
                    size="lg" 
                    className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4"
                  >
                    <LeftIcon className="w-5 h-5 mr-2" />
                    {leftCTA.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-white border-primary-100/60 rounded-2xl shadow-sm h-full">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {rightCTA.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {rightCTA.description}
                </p>
                <Link href={rightCTA.href}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-4"
                  >
                    <RightIcon className="w-5 h-5 mr-2" />
                    {rightCTA.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
