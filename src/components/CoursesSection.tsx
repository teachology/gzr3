import React from 'react';
import { BookOpen, Clock, Users, Trophy, CheckCircle } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      title: 'بث مباشر تأسيس من جديد - بنوك المحوسب نسج لحدق',
      description: 'بث مباشر يبدأ في 2/8/2025 الدورتين معاً بـ 300 ريال',
      price: '300 ريال',
      features: ['بث مباشر تفاعلي', 'تسجيلات للمراجعة', 'متابعة شخصية'],
      color: 'emerald'
    },
    {
      title: 'تأسيس من جديد + ملفات خاصة محلولة و غير محلولة',
      description: 'دورة شاملة تبدأ من الأساسيات وتتقدم تدريجياً',
      price: '250 ريال',
      features: ['ملفات حصرية', 'حلول مفصلة', 'أمثلة متنوعة'],
      color: 'purple'
    },
    {
      title: 'بنوك المحوسب نسج لحدق + ملفات محلولة و غير محلولة',
      description: 'التحضير المكثف لاختبار القدرات المحوسب',
      price: '200 ريال',
      features: ['بنوك أسئلة حديثة', 'محاكاة الاختبار الفعلي', 'استراتيجيات الحل'],
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: 'from-emerald-500 to-emerald-600',
        accent: 'bg-emerald-100 text-emerald-700',
        button: 'bg-emerald-600 hover:bg-emerald-700'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        accent: 'bg-purple-100 text-purple-700',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      blue: {
        bg: 'from-blue-500 to-blue-600',
        accent: 'bg-blue-100 text-blue-700',
        button: 'bg-blue-600 hover:bg-blue-700'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-right mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-right">الدورات المتاحة</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right">
            اختر الدورة المناسبة لك وابدأ رحلتك نحو النجاح في اختبارات القدرات والتحصيلي
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {courses.map((course, index) => {
            const colors = getColorClasses(course.color);
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${colors.bg} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <BookOpen className="w-8 h-8" />
                    <div className="text-right">
                      <span className="text-2xl font-bold">{course.price}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-right">{course.title}</h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed text-right">{course.description}</p>

                  <div className="space-y-3 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-right justify-end">
                        <span className="text-gray-700 text-right">{feature}</span>
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 justify-end">
                    <div className="flex items-center gap-1">
                      <span className="text-right">بث مباشر</span>
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-right">مجموعات صغيرة</span>
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-right">شهادة إتمام</span>
                      <Trophy className="w-4 h-4" />
                    </div>
                  </div>

                  <button className={`w-full ${colors.button} text-white py-3 rounded-lg font-bold transition-colors duration-300`}>
                    سجل الآن
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Offer */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 text-right">
          <h3 className="text-2xl font-bold mb-4 text-right">عرض خاص محدود!</h3>
          <p className="text-lg mb-6 text-right">
            احصل على دورتين بسعر دورة واحدة - وفر 150 ريال الآن
          </p>
          <div className="flex items-center justify-center gap-4 text-2xl font-bold">
            <span className="line-through opacity-75">450 ريال</span>
            <span>←</span>
            <span className="bg-white text-orange-500 px-4 py-2 rounded-lg">300 ريال فقط</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;