'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image
                  src="/m3roddi.png"
                  alt="معروضي - كتابة المعاريض الرسمية"
                  width={160}
                  height={60}
                  className="h-12 sm:h-14 w-auto"
                  priority
                />
              </motion.div>
              <span className="text-lg sm:text-2xl font-bold text-gray-900">
                معروضي
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            <Link 
              href="/" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-black relative border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out"
            >
              الرئيسية
            </Link>
            <Link 
              href="/about" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-black relative border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out"
            >
              من نحن
            </Link>
            <Link 
              href="/pricing" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-black relative border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out"
            >
              الأسعار
            </Link>
            <Link 
              href="/faq" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-black relative border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out"
            >
              الأسئلة الشائعة
            </Link>
            <Link 
              href="/contact" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-black relative border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ease-in-out"
            >
              اتصل بنا
            </Link>
            <a 
              href="https://new-mall.com/oZEQPDR" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 transform hover:from-blue-600 hover:to-blue-700"
              style={{marginTop: '-4px'}}
            >
              اطلب الآن
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Sidebar */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Sidebar */}
            <motion.div 
              className="md:hidden fixed top-0 right-0 h-full w-80 z-[60] overflow-hidden"
              style={{ 
                backgroundColor: '#ffffff',
                opacity: 1,
                pointerEvents: 'auto',
                boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)',
                position: 'fixed',
                top: 0,
                right: 0,
                height: '100vh',
                width: '320px',
                isolation: 'isolate',
                willChange: 'transform'
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            >
              <div 
                className="flex flex-col h-full w-full" 
                style={{ 
                  backgroundColor: '#ffffff',
                  opacity: 1,
                  height: '100%',
                  width: '100%',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200" style={{ backgroundColor: '#ffffff' }}>
                  <h2 className="text-xl font-black text-gray-900">القائمة</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-black hover:text-blue-600 transition-colors"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Order Button at Top */}
                <div className="px-6 py-4 border-b border-gray-200" style={{ backgroundColor: '#ffffff' }}>
                  <a 
                    href="https://new-mall.com/oZEQPDR" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-800 text-white border-2 border-white font-bold py-2.5 px-5 rounded-lg text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 block text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    اطلب الآن
                  </a>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-6 space-y-2" style={{ backgroundColor: '#ffffff' }}>
                  <Link 
                    href="/" 
                    className="text-black hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-black rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    الرئيسية
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-black hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-black rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    من نحن
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="text-black hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-black rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    الأسعار
                  </Link>
                  <Link 
                    href="/faq" 
                    className="text-black hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-black rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    الأسئلة الشائعة
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-black hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-black rounded-lg transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    اتصل بنا
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </header>
  );
}
