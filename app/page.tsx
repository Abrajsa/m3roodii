'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { FaPen, FaPaperPlane, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.17, 0.67, 0.83, 0.67] as [number, number, number, number]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 via-gray-100/50 to-gray-50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-5 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              خدماتنا
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              نقدم مجموعة شاملة من خدمات كتابة المعاريض
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="group card text-center transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-200/60 hover:border-blue-400 cursor-pointer backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <FaPen className="text-4xl sm:text-5xl text-blue-600 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">كتابة معروض</h3>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                كتابة المعاريض بصيغة قوية و مؤثرة
              </p>
            </motion.div>
            
            <motion.div 
              className="group card text-center transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-200/60 hover:border-blue-400 cursor-pointer backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <FaPaperPlane className="text-4xl sm:text-5xl text-blue-600 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">ارسال المعروض</h3>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                إرسال المعروض للجهة المختصة بطريقة موثوقة و مباشرة
              </p>
            </motion.div>
            
            <motion.div 
              className="group card text-center sm:col-span-2 lg:col-span-1 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <FaUserTie className="text-4xl sm:text-5xl text-blue-600 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">متابعة المعاملات</h3>
              <p className="text-sm sm:text-base text-black leading-relaxed">
                متابعة معاملتك لضمان وصولها و انجازها بأسرع وقت
              </p>
            </motion.div>
          </motion.div>
          
          {/* Button below features */}
          <motion.div 
            className="flex justify-center mt-10 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a 
              href="https://new-mall.com/oZEQPDR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-8 sm:py-3.5 sm:px-9 md:py-4 md:px-10 rounded-xl text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-2 hover:bg-blue-700 hover:scale-105 transform"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              طلب معروض
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              اطلب معروضك الان واحصل على افضل صيغة
            </motion.h2>
            <motion.div 
              className="mt-4 sm:mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a 
                href="https://new-mall.com/oZEQPDR" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-800 border-2 border-white font-bold py-3 px-8 sm:py-3.5 sm:px-9 md:py-4 md:px-10 rounded-xl text-sm sm:text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-2 hover:bg-gray-50 hover:scale-105 transform"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                اطلب الآن
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
