import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { FaPen, FaPaperPlane, FaUserTie } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              خدماتنا
            </h2>
            <p className="text-lg sm:text-xl text-black leading-relaxed font-bold">
              نقدم مجموعة شاملة من خدمات كتابة المعاريض
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="card text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <FaPen className="text-4xl sm:text-5xl text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">كتابة معروض</h3>
              <p className="text-sm sm:text-base text-black leading-relaxed font-bold">
                كتابة المعاريض بصيغة قوية و مؤثرة
              </p>
            </div>
            
            <div className="card text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <FaPaperPlane className="text-4xl sm:text-5xl text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">ارسال المعروض</h3>
              <p className="text-sm sm:text-base text-black leading-relaxed font-bold">
                إرسال المعروض للجهة المختصة بطريقة موثوقة و مباشرة
              </p>
            </div>
            
            <div className="card text-center sm:col-span-2 lg:col-span-1">
              <div className="flex justify-center mb-3 sm:mb-4">
                <FaUserTie className="text-4xl sm:text-5xl text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">متابعة المعملات</h3>
              <p className="text-sm sm:text-base text-black leading-relaxed font-bold">
                متابعة معاملتك لضمان وصولها و انجازها بأسرع وقت
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
