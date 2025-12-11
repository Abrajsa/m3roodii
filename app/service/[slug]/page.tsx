'use client';

import { use } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { services } from '../../data/services';

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const service = services.find(s => s.id === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">الخدمة غير موجودة</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const descriptionLines = service.description.split('\n').filter(line => line.trim() !== '');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative text-white py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200 text-sm sm:text-base"
            >
              <FaArrowRight className="ml-2" />
              العودة إلى الصفحة الرئيسية
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-none text-right" style={{ fontFamily: 'var(--font-tajawal), sans-serif', fontWeight: 700 }}>
              {descriptionLines.map((line, index) => {
                // Check if line is a heading (starts with specific patterns)
                if (line.includes('----')) {
                  return <hr key={index} className="my-6 border-gray-300" />;
                }
                
                if (line.startsWith('✔️') || line.match(/^[✔✓]/)) {
                  return (
                    <p key={index} className="text-black mb-3 text-base leading-6 flex items-start text-right font-bold" style={{ fontFamily: 'var(--font-tajawal), sans-serif', fontWeight: 700 }}>
                      <span className="ml-2 text-green-600 text-base">✔️</span>
                      <span>{line.replace(/^[✔✓]\s*/, '')}</span>
                    </p>
                  );
                }
                
                if (line.match(/^[ا-ي].*[؟?]$/) || line.includes('؟')) {
                  return (
                    <h3 key={index} className="text-base font-bold text-black mb-4 mt-6 first:mt-0 text-right" style={{ fontFamily: 'var(--font-tajawal), sans-serif', fontWeight: 700 }}>
                      {line}
                    </h3>
                  );
                }
                
                if (line.trim().length > 0) {
                  return (
                    <p key={index} className="text-black mb-4 text-base leading-6 text-right font-bold" style={{ fontFamily: 'var(--font-tajawal), sans-serif', fontWeight: 700 }}>
                      {line}
                    </p>
                  );
                }
                
                return null;
              })}
            </div>

            {/* Order Button */}
            <motion.div 
              className="mt-8 sm:mt-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href={service.orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 sm:py-4 sm:px-10 rounded-xl text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 transform"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                اطلب الان
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

