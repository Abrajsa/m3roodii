'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaUserTie, FaGavel, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  const teamItems = [
    {
      icon: FaUserTie,
      title: 'فريق الكتابة',
      description: 'كتاب محترفون متخصصون في الكتابة الرسمية والحكومية'
    },
    {
      icon: FaGavel,
      title: 'المراجعة القانونية',
      description: 'خبراء في المراجعة القانونية والتأكد من صحة الصيغ'
    },
    {
      icon: FaHeadset,
      title: 'دعم العملاء',
      description: 'فريق دعم متاح لمساعدتك في أي وقت'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative text-white py-20 sm:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
              من نحن
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              فريق محترف متخصص في كتابة المعاريض الرسمية
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              عن معروضي
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              نحن فريق من الكتاب المحترفين المتخصصين في كتابة المعاريض الرسمية والحكومية. 
              نقدم خدماتنا منذ أكثر من 25 سنة، وتمكنا من مساعدة آلاف العملاء في الحصول 
              على معاريض مكتوبة بأعلى معايير الجودة والاحترافية.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  رؤيتنا
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  أن نكون الخيار الأول لكل من يحتاج إلى كتابة معروض رسمي أو حكومي، 
                  وأن نقدم خدمات متميزة تلبي احتياجات عملائنا بأعلى معايير الجودة.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
                  مهمتنا
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  تقديم خدمات كتابة المعاريض باحترافية عالية، مع ضمان السرية والخصوصية، 
                  والتسليم في الوقت المحدد، ومراجعة وتعديل مجاني حتى الرضا التام.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              فريقنا
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              فريق من الخبراء المتخصصين في كتابة المعاريض
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teamItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="group card text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50 hover:border-blue-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                      <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-4xl text-blue-600 transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
