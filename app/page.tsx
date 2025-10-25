import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

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
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              نقدم مجموعة شاملة من خدمات كتابة المعاريض
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="card text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏛️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">معاريض حكومية</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                كتابة المعاريض للجهات الحكومية المختلفة بأسلوب رسمي ومهني
              </p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📋</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">معاريض رسمية</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                معاريض للشركات والمؤسسات الخاصة مع ضمان الصيغة الرسمية
              </p>
            </div>
            
            <div className="card text-center sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚖️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">معاريض قانونية</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                معاريض للقضايا القانونية والمحاكم بمعايير مهنية عالية
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
