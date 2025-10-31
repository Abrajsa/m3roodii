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
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              خدماتنا
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-bold">
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
              className="group card text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
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
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">كتابة معروض</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-bold">
                كتابة المعاريض بصيغة قوية و مؤثرة
              </p>
            </motion.div>
            
            <motion.div 
              className="group card text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
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
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">ارسال المعروض</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-bold">
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
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">متابعة المعملات</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-bold">
                متابعة معاملتك لضمان وصولها و انجازها بأسرع وقت
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
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
                className="inline-block bg-white text-blue-800 border-2 border-white font-bold py-2 px-5 sm:py-2.5 sm:px-6 md:py-3 md:px-7 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-50 hover:scale-105 transform"
                whileHover={{ scale: 1.05, y: -5 }}
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
