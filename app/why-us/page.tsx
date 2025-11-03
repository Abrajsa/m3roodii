import Header from '../components/Header';
import Footer from '../components/Footer';
import { Noto_Naskh_Arabic } from 'next/font/google';

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-naskh',
});

export default function WhyUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <section className={`${notoNaskh.className} py-16 bg-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-right mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              لماذا موقع معروضي؟
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 leading-relaxed text-black text-right">
              <p className="text-lg mb-6 text-black">
                تختار موقع معروضي لانه مكون من فريق عمل سعودي من الكتبة المخضرمين المحترفين بما فيهم محامين ومستشارين في كتابة الخطابات و الشؤون القانونية بخبرة تزيد عن 25 سنة في كتابة الخطابات بصيغة قوية و مؤثرة نسخر خبرتنا في كتابة خطابك أو معروضك حيث ان قوة خطاباتنا وتأثيرها يجعل لك السبق في النظر في أمرك و الاهتمام به.
              </p>
              
              <p className="text-lg mb-6 text-black">
                تكتب الخطابات بطريقة تركز على تحقيق هدفك بعيدا عن المشتتات الذهنية و مشفوعا بالنقاط التي ترجح موقفك و تسهل الموافقة على طلبك ، فاي خطاب بهدف واضح و مكتوب بسلاسة و تناغم و معة المرفقات الشافعه له في الأغلب يتم قبوله.
              </p>
              
              <p className="text-lg mb-6 text-black">
                لديك فكرة او موضوع او شكوى او طلب ولا تعرف تعبر عنه دع الامر لنا و سترى خطاب يسرك و يلامس كل احتياجاتك ويشرح طلبك بطريقة سلسة قوية و مؤثرة سخرنا شغف الكتابة لدينا لمساعدتك في تحقيق هدفك منذ مايزيد عن 25 سنة و لدينا شغف وهواية في كتابة الخطابات والمعاريض رغبة مني في الاستفادة من هذا الشغف في مساعدة الناس مع العلم أن القيمة المدفوعة ماهي الا حافز لقدح زناد الفكر و لتغطية المجهود الفكري المبذول لابتكار الصيغة المناسبة وحافز للحصول على خطاب مميز و ناجح ،حيث أن بعضها يستغرق ساعات من العمل و اختيار الصيغة المناسبة مع المراجعة عدة مرات للتأكد كيف سيبدو عندما يقرأه المسؤول.
              </p>
              
              <p className="text-lg mb-6 text-black">
                مع العلم أن الهدف الأساسي هو مساعدتك في قضاء حوائجك كما قال الرسول صلى الله عليه وسلم : الله في عون العبد ما كان العبد في عون أخيه ، لطلب معروض تفضل بالدخول على صفحة طلب معروض واملاء نموذج الطلب ثم اكمل الاجرائات و تسعدنا خدمتك.
              </p>
              
              <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg mb-8 text-right">
                <p className="text-lg font-semibold text-black mb-4">
                  #معروضي
                </p>
                <p className="text-lg text-black">
                  تفضل بتصفح خدماتنا و طلب الخطاب المناسب لك من هنا : 
                  <a 
                    href="https://m3roodi.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline ml-2"
                  >
                    https://m3roodi.com/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
