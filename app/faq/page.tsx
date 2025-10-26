'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
      answer: "عادة ما تستغرق عملية كتابة المعروض من 24 إلى 48 ساعة، حسب تعقيد الموضوع والتفاصيل المطلوبة. نضمن التسليم في الوقت المحدد مع الحفاظ على أعلى معايير الجودة."
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="text-white py-16" style={{backgroundColor: 'var(--color-blue-800)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الأسئلة الشائعة</h1>
            <p className="text-xl text-blue-100">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-right flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openItems.includes(index) 
                        ? 'bg-blue-600 text-white rotate-180' 
                        : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                    }`}>
                      {openItems.includes(index) ? (
                        <FaChevronUp className="w-4 h-4" />
                      ) : (
                        <FaChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-black flex-1 mr-4 group-hover:text-blue-700 transition-colors duration-200">
                    {item.question}
                  </h3>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-5 animate-fadeIn">
                    <div className="border-t border-gray-100 pt-4">
                      <div className="bg-white rounded-lg p-4 border-2 border-blue-100">
                        <p className="text-black leading-relaxed text-base font-bold">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                لم تجد إجابة لسؤالك؟
              </h3>
              <p className="text-gray-600 mb-6">
                تواصل معنا وسنكون سعداء لمساعدتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/966551781111" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200"
                >
                  تواصل عبر الواتساب
                </a>
                <a 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200"
                >
                  صفحة اتصل بنا
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
