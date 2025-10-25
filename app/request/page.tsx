'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaUser, FaEnvelope, FaPhone, FaDollarSign, FaFileAlt, FaExclamationTriangle, FaCalendarAlt, FaEdit, FaCheckCircle, FaStar } from 'react-icons/fa';

export default function Request() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requestType: '',
    urgency: '',
    details: '',
    budget: '',
    deadline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Request submitted:', formData);
    alert('تم إرسال طلبك بنجاح! سنتواصل معك خلال 24 ساعة.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">اطلب الآن</h1>
            <p className="text-xl text-blue-100">
              احصل على معروضك المهني في أسرع وقت
            </p>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">نموذج طلب الخدمة</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FaUser className="text-blue-600" />
                  المعلومات الشخصية
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      الميزانية المتوقعة
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">اختر الميزانية</option>
                      <option value="100-300">100 - 300 ريال</option>
                      <option value="300-500">300 - 500 ريال</option>
                      <option value="500-1000">500 - 1000 ريال</option>
                      <option value="1000+">أكثر من 1000 ريال</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FaFileAlt className="text-blue-600" />
                  تفاصيل الخدمة
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
                      نوع المعروض *
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">اختر نوع المعروض</option>
                      <option value="government">معروض حكومي</option>
                      <option value="official">معروض رسمي</option>
                      <option value="legal">معروض قانوني</option>
                      <option value="complaint">شكوى</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      مستوى الأولوية *
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">اختر الأولوية</option>
                      <option value="urgent">عاجل (24 ساعة)</option>
                      <option value="normal">عادي (3-5 أيام)</option>
                      <option value="flexible">مرن (أسبوع أو أكثر)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                      الموعد النهائي المطلوب
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                  تفاصيل المعروض المطلوب *
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="اكتب تفاصيل المعروض المطلوب، الجهة الموجه إليها، الموضوع، والتفاصيل المهمة..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg font-bold px-8 py-3 flex items-center gap-2 mx-auto"
                >
                  <FaCheckCircle />
                  إرسال الطلب
                </button>
              </div>
            </form>
          </div>

          {/* Pricing Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-3xl mb-4">
                <FaDollarSign className="mx-auto text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100-300</div>
              <div className="text-gray-600 mb-4">ريال</div>
              <h3 className="text-lg font-semibold mb-2">معروض بسيط</h3>
              <p className="text-gray-600 text-sm">
                معروضات قصيرة ومباشرة للجهات الحكومية البسيطة
              </p>
            </div>
            
            <div className="card text-center border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <FaStar />
                الأكثر شيوعاً
              </div>
              <div className="text-3xl mb-4">
                <FaDollarSign className="mx-auto text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">300-500</div>
              <div className="text-gray-600 mb-4">ريال</div>
              <h3 className="text-lg font-semibold mb-2">معروض متوسط</h3>
              <p className="text-gray-600 text-sm">
                معروضات مفصلة للجهات الحكومية والخاصة
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl mb-4">
                <FaDollarSign className="mx-auto text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 mb-4">ريال</div>
              <h3 className="text-lg font-semibold mb-2">معروض معقد</h3>
              <p className="text-gray-600 text-sm">
                معروضات قانونية معقدة تحتاج مراجعة دقيقة
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
