'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function PricingPage() {
  const pricingData = [
    { type: 'طلب مساعدة مالية', writingOnly: 250, writingWithSending: 689, writingWithSendingAndFollow: 3699 },
    { type: 'طلب نقل عسكري او مدني', writingOnly: 250, writingWithSending: 689, writingWithSendingAndFollow: 3699 },
    { type: 'طلب تجنيس', writingOnly: 350, writingWithSending: 840, writingWithSendingAndFollow: 3850 },
    { type: 'شكوى او تظلم', writingOnly: 250, writingWithSending: 740, writingWithSendingAndFollow: 3750 },
    { type: 'طلب علاج', writingOnly: 250, writingWithSending: 689, writingWithSendingAndFollow: 3699 },
    { type: 'طلب وظيفة', writingOnly: 250, writingWithSending: 689, writingWithSendingAndFollow: 3699 },
    { type: 'طلب ابتعاث', writingOnly: 350, writingWithSending: 840, writingWithSendingAndFollow: 3850 },
    { type: 'طلب سكن', writingOnly: 250, writingWithSending: 740, writingWithSendingAndFollow: 3750 },
    { type: 'طلب زواج من اجنبية', writingOnly: 350, writingWithSending: 840, writingWithSendingAndFollow: 3850 },
    { type: 'طلب استرحام', writingOnly: 250, writingWithSending: 689, writingWithSendingAndFollow: 3699 },
    { type: 'طلب سداد دين', writingOnly: 250, writingWithSending: 689, writingWithSendingAndFollow: 3699 },
    { type: 'طلب اعفاء من المخالفات', writingOnly: 250, writingWithSending: 740, writingWithSendingAndFollow: 3750 },
    { type: 'طلب منحة', writingOnly: 250, writingWithSending: 740, writingWithSendingAndFollow: 3750 },
    { type: 'اي طلب اخر', writingOnly: 350, writingWithSending: 840, writingWithSendingAndFollow: 3850 },
  ];

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
              صفحة الأسعار
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              تعرف على أسعار خدماتنا المختلفة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Table Header */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-4 sm:p-6">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="font-bold text-base sm:text-lg">نوع المعروض</div>
                <div className="font-bold text-base sm:text-lg">الكتابة فقط</div>
                <div className="font-bold text-base sm:text-lg">الكتابة مع الإرسال</div>
                <div className="font-bold text-base sm:text-lg">كتابة مع إرسال ومتابعة</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {pricingData.map((item, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-4 gap-4 p-4 sm:p-6 hover:bg-blue-50 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <div className="font-bold text-gray-900 text-sm sm:text-base text-right pr-4">
                    {item.type}
                  </div>
                  <div className="text-center text-gray-700 font-semibold text-sm sm:text-base">
                    {item.writingOnly} ريال
                  </div>
                  <div className="text-center text-gray-700 font-semibold text-sm sm:text-base">
                    {item.writingWithSending} ريال
                  </div>
                  <div className="text-center text-blue-700 font-bold text-sm sm:text-base">
                    {item.writingWithSendingAndFollow} ريال
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-12 sm:mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-10 border border-blue-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                جاهز لطلب خدمتك؟
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                اختر الخدمة المناسبة لك واطلب الآن
              </p>
              <motion.a
                href="https://new-mall.com/oZEQPDR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 sm:py-4 sm:px-10 rounded-xl text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1 hover:scale-105 transform"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                اطلب الآن
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



