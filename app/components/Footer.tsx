import Link from 'next/link';
import { FaWhatsapp, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaTiktok, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">معروضي</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
              موقع معروضي لكتابة الخطابات و المعاريض بصيغة قوية و مؤثرة شعارنا هو تقديم الافضل لك جرب خدماتنا وستكتشف اننا الافضل.
            </p>
            <div className="flex justify-center sm:justify-start items-center gap-3 sm:gap-4 flex-wrap">
              <a 
                href="https://wa.me/966551781111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://instagram.com/m3roodi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
              >
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://x.com/m3roodi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://tiktok.com/@m3roodi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://youtube.com/@m3roodi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://facebook.com/m3roodi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div className="text-center sm:text-right">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">روابط مهمة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/why-us" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200 block">
                  لماذا موقع معروضي؟
                </Link>
              </li>
              <li>
                <Link href="/how-to-buy" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200 block">
                  طريقة الشراء من معروضي
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors duration-200 block">
                  الشروط و الاحكام و الخصوصية
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-right">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">تواصل معنا</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center justify-center sm:justify-start text-sm sm:text-base">
                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                +966551781111
              </p>
              <a 
                href="https://wa.me/966551781111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start text-sm sm:text-base text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                +966551781111
              </a>
              <p className="flex items-center justify-center sm:justify-start text-sm sm:text-base">
                <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                info@m3roodi.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-0 text-center sm:text-right">
              © 2025 معروضي. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
