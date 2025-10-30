'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center flex items-center justify-center min-h-full pt-8 sm:items-center sm:pt-2 md:pt-4 lg:pt-8">
          {/* Main Banner */}
          <div className="rounded-2xl p-3 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-2xl" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              كتابة المعاريض الرسمية
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-white leading-relaxed font-bold drop-shadow-xl" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
              خدمة احترافية لكتابة المعاريض الحكومية والرسمية
            </p>
            <div className="mt-2 sm:mt-6">
              <a 
                href="https://new-mall.com/oZEQPDR" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-800 text-white border-2 border-white font-bold py-3 px-6 sm:py-3 sm:px-7 md:py-4 md:px-8 rounded-lg text-base sm:text-lg md:text-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                اطلب الآن
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
