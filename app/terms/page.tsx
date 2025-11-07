import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-right mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              الشروط و الأحكام و الخصوصية
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
              {/* Terms and Conditions Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-right">
                  الشروط والأحكام
                </h2>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-right">
                  في كتابة الخطابات والمعاريض
                </h3>
                
                <div className="space-y-6 text-gray-900 leading-relaxed text-right">
                  <p className="text-lg">
                    نتمنى أن يحوز خطابنا الذي نكتبه من أجلك على رضاك وان يحقق لك الهدف الذي تريده و لكتابة خطاب او معروض لموضوعك فإنه يجب عليك أن توافق على الشروط التالية وهي الشروط والأحكام الروتينية المتفق عليها والمطبقة مع عملائنا حيال كتابة الخطابات.
                  </p>
                  
                  <p className="text-lg font-semibold mt-6 mb-4">
                    بطلبك الخطاب أو المعروض أو متابعة المعاملات تعتبر موافق على هذه الشروط
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">1. عدم استرداد المبلغ:</p>
                      <p className="text-gray-900">لا يمكن استرداد المبلغ المدفوع للمعروض بعد الدفع فالمبلغ يعتبر غير مسترد</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">2. فترة التسليم:</p>
                      <p className="text-gray-900">يتم استلام المعروض في فترة من 3 إلى 5 أيام من تاريخ دفع قيمته و تعبئة النموذج</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">3. مسؤولية المعلومات:</p>
                      <p className="text-gray-900">سيتم الكتابة بناء على المعلومات المدخلة من قبلكم ولا نتحمل أي خطأ في المعلومات نتيجة الإدخال الخاطئ من مزود البيانات من قبلكم</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">4. حق الرفض:</p>
                      <p className="text-gray-900">يجوز لنا رفض أي عمل دون إبداء أسباب و في حال العميل دفع المبلغ قبل علمه رفضنا فسيتم إعادة المبلغ له</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">5. التعديلات المجانية:</p>
                      <p className="text-gray-900">يتاح للعميل التعديل على المعروض خلال 3 أيام مجانا من تاريخ الاستلام و مدة تنفيذ كل تعديل هي 1 يوم او حسب الوقت المتاح للتعديل</p>
                      <p className="mt-2 text-gray-900">عدد طلبات التعديل و الاضافة الأقصى المجانية هي 6 طلبات تعديل او اضافة</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">6. التعديلات المدفوعة:</p>
                      <p className="text-gray-900">اي طلب تعديلات بعد مرور 3 أيام تعتبر تعديلات بمقابل ( يجب دفع ثمنها )</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">7. رسوم الإرسال:</p>
                      <p className="text-gray-900">القيمة المتفق عليها هي قيمة الخطاب و في حال الرغبة بإرسال الخطاب من طرفنا سيتم اضافة 400 ريال هي أجور المندوبين و الطباعة الارسال عبر البريد السعودي الممتاز</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">8. متابعة الخطابات:</p>
                      <p className="text-gray-900 mb-2">نود التوضيح أن دورنا يقتصر على كتابة الخطاب أو كتابته و ارساله في حال طلب العميل ذلك، مع تزويده برقم الإرسال بعد التنفيذ.</p>
                      <p className="text-gray-900 mb-2">أما متابعة المعاملة فهي خدمة إضافية تُقدَّم فقط عند طلب العميل وسداد رسومها.</p>
                      <p className="text-gray-900">كما نود الإشارة إلى أن متابعتنا للمعاملة لا تضمن قبولها، في مهمتنا أداء ما يلزم على أكمل وجه، والتوفيق بيد الله تعالى.</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">9. عدم تحمل المسؤولية:</p>
                      <p className="text-gray-900">لا نتحمل أي مسؤولية تجاه الخطاب الذي نكتبه لك فقد تمت كتابته بناء على طلبك و بحسب المعلومات المعطاة منك</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">10. طلبات التعديل:</p>
                      <p className="text-gray-900">جميع طلبات التعديل ترسل الى رقم الواتس اب المراسل عليه موضح فيها نوع التعديل بالظبط</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">11. ضمان النتائج:</p>
                      <p className="text-gray-900">لا نتحمل أي مسؤولية إذا حقق الخطاب هدفك أم لم يحققه فنحن نبذل جهودنا في خطاب يشرح حالتك و النتائج بتوفيق الله</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">12. متابعة المعاملات:</p>
                      <p className="text-gray-900">في حال طلب متابعة المعاملة، سنقوم بتوجيه المعقبين لمتابعة المعاملة ومحاولة تحريكها و إنجازها. و سنبذل قصارى جهدنا لتحقيق هدفك، ولكن ذلك لا يعني ضمان قبول المعاملة. نحن سوف نعمل بافضل الطرق و نبذل الأسباب و بالله التوفيق</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">13. الوكالة:</p>
                      <p className="text-gray-900">بعض المعاملات تتطلب وجود وكالة، لذا في البداية سيتم إرسال المعقب لمتابعة المعاملة بدون وكالة. ولكن إذا احتاج الأمر إلى وكالة، فيجب أن يتم عمل وكالة للمعقب ليتمكن من متابعتها - ستكون الوكالة على موضوع المعاملة فقط</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2 text-lg">14. عدد الزيارات:</p>
                      <p className="text-gray-900">عدد مرات المتابعة الحضورية للمعاملة هو عشر زيارات لكل طلب. وفي حال استنفاد هذه الزيارات العشر، يجب عمل طلب متابعة جديد لاستمرار متابعة المعاملة</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">لأي استفسارات و ملاحظات:</h4>
                    <p className="text-gray-900">
                      راسلنا على 
                      <a 
                        href="https://wa.me/966551781111" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline mx-1"
                      >
                        966551781111
                      </a>
                      و من خارج السعودية على 
                      <a 
                        href="https://wa.me/966551781111" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline mx-1"
                      >
                        966551781111
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy Policy Section */}
              <div className="border-t border-gray-200 pt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-right">
                  سياسة الخصوصية لمتجر موقع معروضي
                </h2>
                
                <p className="text-lg font-semibold text-gray-900 mb-8 text-right">
                  جميع بياناتك تعامل بسرية تامة و في مايلي آلية التعامل مع البيانات
                </p>
                
                <div className="space-y-8 text-right">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">جمع المعلومات:</h3>
                    <p className="text-gray-900 mb-4">
                      نقوم بجمع معلومات محددة منك عند استخدام موقع معروضي ، وهذه المعلومات تشمل ما يلي:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-900 pr-6">
                      <li><strong>معلومات شخصية:</strong> مثل الاسم، العنوان، رقم الهاتف، وعنوان البريد الإلكتروني</li>
                      <li><strong>معلومات المعاملات:</strong> مثل تفاصيل الدفع و الارسال عند إجراء مشتريات عبر موقع معروضي</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">استخدام المعلومات:</h3>
                    <p className="text-gray-900">
                      نحن نستخدم المعلومات التي نقوم بجمعها لأغراض معينة، مثل معالجة الطلبات وتسليم الطلبات، وتقديم خدمة العملاء، وتحسين تجربة العميل، وإرسال تنبيهات وعروض خاصة إليك
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">حماية المعلومات:</h3>
                    <p className="text-gray-900">
                      نحن نتخذ إجراءات أمان ملائمة لحماية المعلومات الشخصية التي نجمعها من الوصول غير المصرح به، والاستخدام غير المصرح به، والإفصاح غير المصرح به، والتدمير غير المصرح به
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">مشاركة المعلومات:</h3>
                    <p className="text-gray-900">
                      نحن لا نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك الصريحة، إلا في الحالات التي يلزم فيها الامتثال للقوانين والتشريعات المعمول بها
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">الامتثال للقوانين:</h3>
                    <p className="text-gray-900">
                      نلتزم بامتثال جميع القوانين واللوائح المعمول بها في المملكة العربية السعودية فيما يتعلق بحماية الخصوصية والبيانات الشخصية
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">الوصول والتعديل:</h3>
                    <p className="text-gray-900">
                      يمكنك الاتصال بنا للوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها إذا كنت بحاجة إلى ذلك
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">التغييرات في سياسة الخصوصية:</h3>
                    <p className="text-gray-900">
                      نحتفظ بحق تحديث سياسة الخصوصية هذه من وقت لآخر، وسيتم نشر أي تغييرات جديدة على موقعنا على الإنترنت
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-gray-900 mb-4">
                      نقدر خصوصيتك ونسعى دائمًا لحماية معلوماتك الشخصية. إذا كان لديك أي استفسار بخصوص سياسة الخصوصية الخاصة بنا، فلا تتردد في الاتصال بنا.
                    </p>
                    <p className="text-gray-900">
                      <a 
                        href="mailto:info@m3roodi.com"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        info@m3roodi.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Request Button */}
              <div className="text-right mt-12 pt-8 border-t border-gray-200">
                <a 
                  href="https://new-mall.com/oZEQPDR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  اطلب معروضك الان
                </a>
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}