'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "ما هي أنواع المعاريض التي تقدمونها؟",
      answer: "نقدم جميع أنواع المعاريض الرسمية والحكومية، بما في ذلك المعاريض للجهات الحكومية المختلفة، المعاريض القانونية للمحاكم، والمعاريض للشركات والمؤسسات الخاصة. جميع معاريضنا مكتوبة بأسلوب رسمي ومهني."
    },
    {
      question: "كم تستغرق عملية كتابة المعروض؟",
      answer: "عادة ما تستغرق عملية كتابة المعروض ٣ أيام من تاريخ الطلب و نضمن التسليم في الوقت المحدد ، لتحصل على أفضل صيغة لموضوعك .."
    },
    {
      question: "هل يمكنني طلب تعديلات على المعروض؟",
      answer: "نعم، نقدم مراجعة وتعديل مجاني حتى الرضا التام. يمكنك طلب أي تعديلات تريدها على المعروض دون أي رسوم إضافية."
    },
    {
      question: "كيف أضمن سرية معلوماتي؟",
      answer: "نحن نلتزم بأعلى معايير السرية والخصوصية. جميع معلوماتك وبياناتك محمية ولا يتم مشاركتها مع أي طرف ثالث. نستخدم أنظمة أمان متقدمة لحماية بيانات عملائنا."
    },
    {
      question: "ما هي أسعار خدماتكم؟",
      answer: "أسعارنا تنافسية ومناسبة لجميع الفئات. تختلف الأسعار حسب نوع المعروض وتعقيده. يمكنك التواصل معنا للحصول على عرض سعر مناسب لاحتياجاتك."
    },
    {
      question: "كيف يمكنني التواصل معكم؟",
      answer: "يمكنك التواصل معنا عبر الهاتف +966551781111، أو عبر الواتساب، أو البريد الإلكتروني info@m3roodi.com. فريقنا متاح لمساعدتك في أي وقت."
    },
    {
      question: "هل تقدمون خدمات للعملاء خارج السعودية؟",
      answer: "نعم، نقدم خدماتنا للعملاء في جميع أنحاء العالم. يمكنك التواصل معنا عبر الهاتف أو البريد الإلكتروني، وسنقوم بتقديم الخدمة المطلوبة."
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل جميع طرق الدفع المتاحة، بما في ذلك التحويل البنكي، والدفع الإلكتروني، والدفع عند الاستلام. يمكنك اختيار الطريقة الأنسب لك."
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
              الأسئلة الشائعة
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 text-right flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <motion.div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openItems.includes(index) 
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                          : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                      }`}
                      animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openItems.includes(index) ? (
                        <FaChevronUp className="w-5 h-5" />
                      ) : (
                        <FaChevronDown className="w-5 h-5" />
                      )}
                    </motion.div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex-1 mr-4 group-hover:text-blue-700 transition-colors duration-200">
                    {item.question}
                  </h3>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6">
                        <div className="border-t border-gray-200 pt-5">
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-100">
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div 
            className="mt-12 sm:mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                لم تجد إجابة لسؤالك؟
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                تواصل معنا وسنكون سعداء لمساعدتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="https://wa.me/966551781111" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transform"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  تواصل عبر الواتساب
                </motion.a>
                <motion.a 
                  href="/contact" 
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transform"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  صفحة اتصل بنا
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
