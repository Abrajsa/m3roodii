import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">اتصل بنا</h1>
            <p className="text-xl text-blue-100">
              نحن هنا لمساعدتك في أي وقت
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">معلومات الاتصال</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-reverse space-x-3">
                    <div className="flex-shrink-0">
                      <FaEnvelope className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">البريد الإلكتروني</p>
                      <p className="text-gray-600">info@m3roodi.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-3">
                    <div className="flex-shrink-0">
                      <FaPhone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">رقم الهاتف</p>
                      <p className="text-gray-600">+966551781111</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-reverse space-x-3">
                    <div className="flex-shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">العنوان</p>
                      <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
