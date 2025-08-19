"use client";

import { iconMap } from "@/lib/icons";

const SparklesIcon = iconMap.star2;

export function FeatureHero() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <SparklesIcon className="w-8 h-8 text-primary-600 mr-3" />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Features
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          What Makes Linguaflex Unique
        </p>
      </div>
    </section>
  );
}
