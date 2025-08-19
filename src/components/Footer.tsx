import React from 'react';
import { BookOpen, Phone, Mail, MapPin, Calculator } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className=" text-white p-3 rounded-xl inline-flex items-center gap-1">
                <img src="/logo.png" alt="Logo" className="w-14 h-14" />
              </div>

              <div className="text-right">
                <h3 className="text-2xl font-bold text-right">جذر ثلاثة</h3>
                <p className="text-gray-400 text-right">منصة تعليمية متخصصة</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-right">
              نحن متخصصون في تقديم دورات القدرات والتحصيلي بأعلى جودة وأحدث الأساليب التعليمية 
              مع الأستاذ أشرف شعبان. هدفنا مساعدة الطلاب على تحقيق أفضل النتائج في اختباراتهم.
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">القدرات</span>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">التحصيلي</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">بث مباشر</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-right">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://gzr3.com/online/"  target="_blank" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 justify-end text-right">
                  الدورات المتاحة
                  <BookOpen className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 justify-end text-right">
                  اختبارات القدرات
                  <Calculator className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="https://gzr3.com/online"  target="_blank" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 justify-end text-right">
                  منصة التعلم
                  <BookOpen className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors flex items-center gap-2 justify-end text-right">
                  تواصل معنا
                  <Phone className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-right">معلومات التواصل</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-end text-right">
                <div className="text-right">
                  <p className="text-gray-300 text-right">واتساب</p>
                  <p className="text-white font-semibold text-right">+966565435360</p>
                </div>
                <Phone className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              </li>
              <li className="flex items-start gap-3 justify-end text-right">
                <div className="text-right">
                  <p className="text-gray-300 text-right">الموقع</p>
                  <p className="text-white text-right">المملكة العربية السعودية</p>
                </div>
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              </li>
              <li className="flex items-start gap-3 justify-end text-right">
                <div className="text-right">
                  <p className="text-gray-300 text-right">الموقع الإلكتروني</p>
                  <p className="text-white text-right">gzr3.com</p>
                </div>
                <Mail className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              © 2025 جذر ثلاثة - جميع الحقوق محفوظة
            </p>
            <p className="text-gray-400 text-center md:text-right">
              مع الأستاذ أشرف شعبان - مدرس القدرات والتحصيلي
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;