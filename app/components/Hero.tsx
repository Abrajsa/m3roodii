'use client';

import Link from 'next/link';
import { FaPenFancy, FaBolt, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          {/* Main Banner */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              كتابة المعاريض الرسمية
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-blue-100 leading-relaxed font-bold">
              خدمة احترافية لكتابة المعاريض الحكومية والرسمية
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-blue-200 leading-relaxed font-bold">
              نضمن لك معروضاً مكتوباً بأسلوب رسمي ومهني
            </p>
            <div className="mt-4 sm:mt-6">
              <a 
                href="https://new-mall.com/oZEQPDR" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                اطلب الآن
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-center">
                <FaPenFancy className="mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">كتابة احترافية</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-bold">معروضات مكتوبة بأسلوب رسمي ومهني</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-center">
                <FaBolt className="mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">تسليم سريع</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-bold">نضمن التسليم في الوقت المحدد</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-center">
                <FaCheckCircle className="mx-auto" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">ضمان الجودة</h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-bold">مراجعة وتعديل مجاني حتى الرضا التام</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
