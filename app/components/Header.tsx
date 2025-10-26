'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/m3roddi.png"
                alt="معروضي - كتابة المعاريض الرسمية"
                width={160}
                height={60}
                className="h-12 sm:h-14 w-auto"
                priority
              />
              <span className="text-lg sm:text-2xl font-black text-gray-900">
                معروضي
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            <Link 
              href="/" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-black transition-all duration-200 hover:border-b-2 hover:border-blue-600"
            >
              الرئيسية
            </Link>
            <Link 
              href="/about" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-black transition-all duration-200 hover:border-b-2 hover:border-blue-600"
            >
              من نحن
            </Link>
            <Link 
              href="/faq" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-black transition-all duration-200 hover:border-b-2 hover:border-blue-600"
            >
              الأسئلة الشائعة
            </Link>
            <Link 
              href="/contact" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-black transition-all duration-200 hover:border-b-2 hover:border-blue-600"
            >
              اتصل بنا
            </Link>
            <a 
              href="https://new-mall.com/oZEQPDR" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm font-black"
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Sidebar */}
            <div className="md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out slide-in-right">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
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
                <div className="px-6 py-4 border-b border-gray-200">
                  <a 
                    href="https://new-mall.com/oZEQPDR" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm font-black block text-center py-3 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    اطلب الآن
                  </a>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-6 space-y-2">
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
            </div>
          </>
        )}
      </div>
    </header>
  );
}
