import React from 'react';
import { Play, Star, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-400 to-transparent opacity-10 rounded-full transform translate-x-48 -translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-right mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-right">
            دورات البث المباشر
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed text-right">
            استعد لاختبارات القدرات والتحصيلي مع أشرف شعبان - مدرس القدرات والتحصيلي في المملكة العربية السعودية
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold">
                STEP 01
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold">تأسيس</span>
                <p className="text-purple-200 text-right">من الصفر</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-right">
              بناء على النظام الجديد
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-600 bg-opacity-50 p-4 rounded-lg text-right">
                <div className="text-2xl font-bold text-yellow-400 text-right">15</div>
                <div className="text-sm text-right">تبدأ الدورة في أكتوبر 2025</div>
              </div>
              <div className="bg-purple-600 bg-opacity-50 p-4 rounded-lg text-right">
                <div className="text-2xl font-bold text-yellow-400 text-right">﷼250</div>
                <div className="text-sm text-right">السعر</div>
              </div>
            </div>

            <div className="text-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                سيتم فتح
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full font-bold">
                STEP 02
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold">بنوك المطويب</span>
                <p className="text-purple-200 text-right">شيخ ألمع</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-right">
              دورة ستتغير هديتك مجاني
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-teal-600 bg-opacity-50 p-4 rounded-lg text-right">
                <div className="text-2xl font-bold text-yellow-400 text-right">02</div>
                <div className="text-sm text-right">تبدأ الدورة في أكتوبر 2025</div>
              </div>
              <div className="bg-teal-600 bg-opacity-50 p-4 rounded-lg text-right">
                <div className="text-2xl font-bold text-yellow-400 text-right">﷼200</div>
                <div className="text-sm text-right">السعر</div>
              </div>
            </div>

            <div className="text-center">
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                احجز الآن
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full inline-block mb-4">
            <span className="font-bold text-lg text-right">احصل على الدورتين بسعر ﷼ 300 بدلاً من ﷼ 450</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;