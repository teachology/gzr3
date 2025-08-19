import React, { useState } from 'react';
import { Menu, X, BookOpen, Calculator, Phone, Instagram, Youtube, MessageCircleWarning, Facebook } from 'lucide-react';
import logo from '../images/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white-600 to-white-700 text-white">
      {/* Top Bar */}
      <div className="bg-emerald-800 py-2 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="https://gzr3.com/online/login/signup.php" target="_blank" className="hover:text-emerald-300">التسجيل</a>
              <span>|</span>
              <a href="https://gzr3.com/online/login/index.php" target="_blank" className="hover:text-emerald-300">تسجيل دخول</a>
            </div>
            <div className="relative text-right">
              <button
                onClick={() => setIsAccountsOpen(!isAccountsOpen)}
                className="hover:text-emerald-300"
              >
<<<<<<< HEAD
                حسابات جزر ثلاثة
=======
               حسابات جذر ثلاثة
>>>>>>> 14e2889083b1b5fc4375f78a6bceeed245f76bff
              </button>
              {isAccountsOpen && (
                <div className="absolute right-0 mt-2 bg-white text-emerald-800 shadow-lg rounded-lg z-50">
                  <ul className="text-sm w-48">
                    <li><a href="https://t.me/gzr3sanad" target="_blank" className="block px-4 py-2 hover:bg-emerald-100 flex items-center gap-2"><MessageCircleWarning size={16} />تليجرام</a></li>
                    <li><a href="https://www.youtube.com/channel/UCoYyvX1H4lVjK9woNQTE5hA" target="_blank" className="block px-4 py-2 hover:bg-emerald-100 flex items-center gap-2"><Youtube size={16} />يوتيوب</a></li>
                    <li><a href="https://www.instagram.com/ashraf_shaban1" target="_blank" className="block px-4 py-2 hover:bg-emerald-100 flex items-center gap-2"><Instagram size={16} />انستجرام</a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-emerald-600 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white text-emerald-600 p-3">
              <div className="flex items-center gap-3">
                <img src={logo} alt="جذر ثلاثة Logo" className="w-16 h-16 rounded-xl" />
              </div>


            </div>
            <div className="text-right">
<<<<<<< HEAD
              <h1 className="text-sm font-bold text-white text-right">100% قدرات وتحصيلي</h1>
              <p className="text-emerald-100 text-xl font-bold text-center">مع أشرف شعبان</p>
=======
              <h1 className="text-l font-bold text-black text-right">100% قدرات وتحصيلي</h1>
              <p className="text-balck-100 font-bold text-black text-xl text-center">مع أشرف شعبان</p>
>>>>>>> 14e2889083b1b5fc4375f78a6bceeed245f76bff
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
<<<<<<< HEAD
            <a href="https://gzr3.com/online/"  target="_blank" className="hover:text-emerald-200 transition-colors flex items-center gap-2 text-right">
              <BookOpen size={18} />
              الدورات
            </a>

            <a href="#" className="hover:text-emerald-200 transition-colors flex items-center gap-2 text-right">
=======
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-2 text-right">
              <BookOpen size={18} />
              الدورات
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-2 text-right">
              <Calculator size={18} />
              القدرات
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors flex items-center gap-2 text-right">
>>>>>>> 14e2889083b1b5fc4375f78a6bceeed245f76bff
              <Phone size={18} />
              التواصل
            </a>
            <a 
              href="https://gzr3.com/online" 
              className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-right"
            >
              منصة التعلم
            </a>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-gray-100 rounded-lg text-gray-800 shadow-md border border-gray-200">
            <nav className="flex flex-col gap-3">
<<<<<<< HEAD
              <a href="https://gzr3.com/online/"  target="_blank" className="hover:text-emerald-200 transition-colors flex items-center gap-2 py-2 text-right">
=======
              <a href="#" className="text-gray-800 hover:text-emerald-600 transition-colors flex items-center gap-2 py-2 text-right">
>>>>>>> 14e2889083b1b5fc4375f78a6bceeed245f76bff
                <BookOpen size={18} />
                الدورات
              </a>
              <a href="#" className="text-gray-800 hover:text-emerald-600 transition-colors flex items-center gap-2 py-2 text-right">
                <Calculator size={18} />
                القدرات
              </a>
              <a href="#" className="text-gray-800 hover:text-emerald-600 transition-colors flex items-center gap-2 py-2 text-right">
                <Phone size={18} />
                التواصل
              </a>
              <a 
                href="https://gzr3.com/online" 
                className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-center mt-2"
              >
                منصة التعلم
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
