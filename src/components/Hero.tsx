import React from 'react';
import { Play, Star, Clock, Users } from 'lucide-react';
import SocialLinks from "./components/SocialLinks";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-400 to-transparent opacity-10 rounded-full transform translate-x-48 -translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
  {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-center">
        {/* Text & Buttons */}
        <div className="mb-6 md:mb-0 md:w-2/3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 leading-tight text-white">
            جذر ثلاثة في القدرات طريقك للتفوق والنجاح
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-6">
            <a
              href="https://gzr3.com/online/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 text-lg rounded-xl shadow-lg transition"
            >
              ابدأ الان
            </a>
            <a
              href="/#whatsapp-cta"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 text-lg rounded-xl shadow-lg transition"
            >
              اعرف المزيد
            </a>
          </div>

        </div>

        {/* Image */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img
            src="/logo.png"
            alt="جذر ثلاثة"
            className="w-24 sm:w-32 md:w-40"
          />
        </div>
      </div>

      <br />

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Step 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold">
                الخطوة الاولي
              </div>
              <div className="text-center sm:text-right">
                <span className="text-xl sm:text-2xl font-bold">تأسيس</span>
                <p className="text-purple-200">من الصفر</p>
              </div>
            </div>

            {/* Thumbnail Section */}
              <a 
                href="https://gzr3.com/online/course/view.php?id=2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="w-full h-48 sm:h-96 rounded-xl overflow-hidden shadow-lg mb-4">
                  <img
                    src="/step01.png" // replace with your course image path
                    alt="Course Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>

            {/* Optional description below the thumbnail */}
            <p className="text-purple-100 text-center sm:text-right leading-relaxed">
              هذا الكورس يضعك على الطريق الصحيح لفهم أساسيات القدرات.
            </p>
          </div>


        {/* Step 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold">
                الخطوة الثانية
              </div>
              <div className="text-center sm:text-right">
                <span className="text-xl sm:text-2xl font-bold">المحوسب</span>
                <p className="text-purple-200">من الصفر</p>
              </div>
            </div>

            {/* Thumbnail Section */}
              <a 
                href="https://gzr3.com/online/course/view.php?id=2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="w-full h-48 sm:h-96 rounded-xl overflow-hidden shadow-lg mb-4">
                  <img
                    src="/step02.png" // replace with your course image path
                    alt="Course Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>

            {/* Optional description below the thumbnail */}
            <p className="text-purple-100 text-center sm:text-right leading-relaxed">
              هذا الكورس هو خطوتك الأولى نحو التدريب الذكي لتحقيق نتائج مميزة.
            </p>
          </div>
      </div>

      <div className="container mx-auto px-4 my-8">
  <h2 className="text-2xl font-bold mb-4 text-center">شاهد مثال من الشرح</h2>
  
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <iframe
          src="https://www.youtube.com/embed/BtmFW95alBs"
          title="Sample Explanation Video"
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    </div>

    </section>
  );
};

export default Hero;