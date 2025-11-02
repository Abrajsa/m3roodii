'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative text-white h-[calc(100vw/1.8)] sm:h-[calc(100vw/2.47)] md:h-[60vh] lg:h-[70vh]">
      {/* Background with fallback gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <Image
          src="/newphot.jpeg"
          alt="معروضي - كتابة المعاريض الرسمية"
          fill
          className="object-cover"
          style={{
            objectPosition: 'center center',
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
          priority
          onError={(e) => {
            console.error('Image failed to load, using gradient fallback');
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center flex items-center justify-center min-h-full pt-8 sm:items-center sm:pt-2 md:pt-4 lg:pt-8">
          {/* Main Banner */}
          <motion.div 
            className="rounded-2xl p-3 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-2xl" 
              style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              كتابة المعاريض الرسمية
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-white leading-relaxed font-bold drop-shadow-xl" 
              style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              خدمة احترافية لكتابة المعاريض الحكومية والرسمية
            </motion.p>
            <motion.div 
              className="-mt-2 sm:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a 
                href="https://new-mall.com/oZEQPDR" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-700 to-blue-800 text-white border-2 border-white/20 font-bold py-4 px-8 sm:py-4 sm:px-9 md:py-5 md:px-10 rounded-xl text-base sm:text-lg md:text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 transform hover:from-blue-600 hover:to-blue-700 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">اطلب الآن</span>
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
