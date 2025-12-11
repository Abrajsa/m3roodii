'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '../data/services';

export default function ServiceCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.17, 0.67, 0.83, 0.67] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={`/service/${service.id}`}
                className="block group"
              >
                <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 h-full flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-blue-200/50">
                  <div className="aspect-square flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 text-center leading-normal group-hover:text-blue-700 transition-colors duration-300 px-2 sm:px-4 line-clamp-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


