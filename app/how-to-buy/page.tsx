import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HowToBuy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              طريقة الشراء من معروضي
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8">
              
              {/* Video Section */}
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  المشاهدة طريقة طلب معروض من موقع معروضي
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  شاهد الفيديو الموجود هنا ⏯️
                </p>
                <div className="relative w-full max-w-4xl mx-auto">
                  <div className="relative" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                      src="https://www.youtube.com/embed/TCGHmF2RJ6M"
                      title="طريقة طلب معروض من موقع معروضي"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    كيف تطلب من معروضي؟
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    يتيح لك موقع معروضي إمكانية طلب معروض جاهز او طلب كتابة خطاب عبر محامي و مستشار كل ذلك بسرعة و سهولة مع توفير خيارات دفع متنوعة و تعامل آمن و موثوق. إذا كنت ترغب في طلب أي خطاب اتباع الخطوات التالية :
                  </p>
                </div>

                {/* Step 1 */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    أولاً: اختر المعروض او الخدمة التي تود شرائها
                  </h3>
                  <p className="text-gray-700">
                    (إذا لم تجدها في واجه المتجر يمكنك البحث عنه في خانة البحث على المتجر)
                  </p>
                  <p className="text-gray-700 mt-2">
                    بعد أن تجد الخطاب او الخدمة اضغط على علامة السلة التي تظهر عند التأشير عليه او ادخل على الخطاب و تصفح مزاياه ثم الضغط على زر اشتري الان او أضف للسلة
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-4">
                    ثانياً: إتمام عملية الشراء
                  </h3>
                  <p className="text-gray-700 mb-4">
                    بعد ذلك لك الخيار اما بمواصلة البحث عن معروض او خطاب اخر او الاكتفاء بالمعروض المختار و اتمام الشراء ولعمل ذلك توجه مباشرة إلى أيقونة السلة الموجودة في اعلى يسار الموقع ثم اضغط عليها
                  </p>
                  <p className="text-gray-700 mb-4">
                    سيظهر لك بعد ذلك صفحة فيها قائمة الخطابات التي اخترتها يمكنك زيادة عدد الطلبات او انقاصها بضغط على علامة الزائد أو الناقص الموجودة في خانة الكمية
                  </p>
                  <p className="text-gray-700">
                    كذلك يمكنك حذف الخطاب الذي اضفته بالخطأ بالضغط على علامة X الموجودة بجانبه. اذا كل شي على مايرام و الخطاب في السلة كما تريد فضغط على زر إتمام الطلب
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-4">
                    ثالثاً: اختيار طريقة الدفع
                  </h3>
                  <p className="text-gray-700 mb-4">
                    بعدها اختر طريقة الدفع ثم اتبع التعليمات التي تظهر لك
                  </p>
                  <p className="text-gray-700 mb-4">
                    ( يمكنك استخدام كود الخصم اذا كان لديك كود خصم أو مواصلة انهاء اجراءات الشراء )
                  </p>
                  <p className="text-gray-700">
                    بعد ذلك قم بالدفع لطلبك بالطريقة التي اخترتها و اكد الطلب
                  </p>
                </div>

                {/* Completion */}
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">
                    إتمام العملية
                  </h3>
                  <p className="text-gray-700 mb-4">
                    بهذا تكون اتممت عملية الشراء. يظهر لك بعدها رقم الطلب و يصلك الخطاب بعدها على بريدك الإلكتروني و بذلك تكون عملية الشراء مكتملة
                  </p>
                  <p className="text-gray-700">
                    يمكنك الدفع عبر ابل باي او مدى او البطاقات الاتمانية او التحويل البنكي
                  </p>
                </div>

                {/* Additional Info */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    معلومات إضافية
                  </h3>
                  <p className="text-gray-700">
                    يمكنك الرجوع في أي وقت الى حسابك في متجر معروضي للاستفادة من طلباتك السابقة
                  </p>
                </div>

                {/* Contact Info */}
                <div className="bg-blue-100 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    للاستفسارات
                  </h3>
                  <p className="text-gray-700 mb-4">
                    تشرفنا بزيارتك لمتجر معروضي ونرجو أن تكون خطوات الشراء سهلة و ميسرة ولاي استفسارات او تفاصيل تواصل معنا مباشرة عبر الواتس اب على الرقم 
                    <a 
                      href="https://wa.me/966551781111" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline mx-1"
                    >
                      0551781111
                    </a>
                    او عبر البريد الالكتروني 
                    <a 
                      href="mailto:info@m3roodi.com"
                      className="text-blue-600 hover:text-blue-800 underline mx-1"
                    >
                      info@m3roodi.com
                    </a>
                    و تسعدنا خدمتك.
                  </p>
                  <p className="text-lg font-bold text-blue-900">
                    معروضي
                  </p>
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
