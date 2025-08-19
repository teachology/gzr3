import React from 'react';
import { Award, BookOpen, Users, Star, MessageCircle } from 'lucide-react';

const TeacherProfile = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-right mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-right">أشرف شعبان</h2>
            <p className="text-xl text-gray-600 leading-relaxed text-right">
              مدرس القدرات والتحصيلي
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Profile Image Placeholder */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <span className="text-6xl font-bold text-white">أش</span>
                </div>
                <div className="flex justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-right">تقييم الطلاب: 4.9/5</p>
              </div>

              {/* Profile Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-right">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-gray-800 text-right">خبرة واسعة</h3>
                    <p className="text-gray-600 text-right">أكثر من 10 سنوات في تدريس القدرات والتحصيلي</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-gray-800 text-right">آلاف الطلاب</h3>
                    <p className="text-gray-600 text-right">ساعد أكثر من 5000 طالب في تحقيق أهدافهم</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-right">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-gray-800 text-right">منهجية متطورة</h3>
                    <p className="text-gray-600 text-right">أساليب تدريس حديثة ومبتكرة لضمان النجاح</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="text-center mt-8">
              <a
                href={`https://wa.me/966565435360?text=مرحباً أشرف شعبان، أريد الاستفسار عن دورات القدرات والتحصيلي`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherProfile;