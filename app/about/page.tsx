import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaUserTie, FaGavel, FaHeadset } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
            <p className="text-xl text-blue-100">
              فريق محترف متخصص في كتابة المعاريض الرسمية
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">عن معروضي</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              نحن فريق من الكتاب المحترفين المتخصصين في كتابة المعاريض الرسمية والحكومية. 
              نقدم خدماتنا منذ أكثر من 5 سنوات، وتمكنا من مساعدة آلاف العملاء في الحصول 
              على معاريض مكتوبة بأعلى معايير الجودة والاحترافية.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">رؤيتنا</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              أن نكون الخيار الأول لكل من يحتاج إلى كتابة معروض رسمي أو حكومي، 
              وأن نقدم خدمات متميزة تلبي احتياجات عملائنا بأعلى معايير الجودة.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">مهمتنا</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              تقديم خدمات كتابة المعاريض باحترافية عالية، مع ضمان السرية والخصوصية، 
              والتسليم في الوقت المحدد، ومراجعة وتعديل مجاني حتى الرضا التام.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">فريقنا</h2>
            <p className="text-xl text-gray-600">
              فريق من الخبراء المتخصصين في كتابة المعاريض
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaUserTie className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">فريق الكتابة</h3>
              <p className="text-gray-600">
                كتاب محترفون متخصصون في الكتابة الرسمية والحكومية
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaGavel className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">المراجعة القانونية</h3>
              <p className="text-gray-600">
                خبراء في المراجعة القانونية والتأكد من صحة الصيغ
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FaHeadset className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">دعم العملاء</h3>
              <p className="text-gray-600">
                فريق دعم متاح لمساعدتك في أي وقت
              </p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
