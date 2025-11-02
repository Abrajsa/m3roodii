import Link from 'next/link';
import { FaWhatsapp, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaTiktok, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">معروضي</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed font-bold">
              موقع معروضي لكتابة الخطابات و المعاريض بصيغة قوية و مؤثرة شعارنا هو تقديم الافضل لك جرب خدماتنا وستكتشف اننا الافضل.
            </p>
            <div className="flex justify-center sm:justify-start items-center gap-3 sm:gap-4 flex-wrap">
              <a 
                href="https://wa.me/966551781111" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-green-500 rounded-full text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-green-500/50"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/m3roodi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-full text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/m3roodi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-900 rounded-full text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com/@m3roodi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-black rounded-full text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@m3roodivip670" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-full text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/50"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/m3roodi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div className="text-center sm:text-right">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">روابط مهمة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/why-us" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-all duration-300 block hover:translate-x-[-4px] hover:font-semibold">
                  لماذا موقع معروضي؟
                </Link>
              </li>
              <li>
                <Link href="/how-to-buy" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-all duration-300 block hover:translate-x-[-4px] hover:font-semibold">
                  طريقة الشراء من معروضي
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-all duration-300 block hover:translate-x-[-4px] hover:font-semibold">
                  الشروط و الاحكام و الخصوصية
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-right">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">تواصل معنا</h4>
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
