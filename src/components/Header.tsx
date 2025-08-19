import React, { useState } from 'react';
import { Menu, X, BookOpen, Calculator, Phone, Instagram, Youtube, MessageCircleWarning, Facebook } from 'lucide-react';
import logo from '../images/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg">
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
                حسابات جزر ثلاثة
              </button>
              {isAccountsOpen && (
                <div className="absolute right-0 mt-2 bg-white text-emerald-800 shadow-lg rounded-lg z-50">
                  <ul className="text-sm w-48">
                    <li><a href="https://t.me/minabebawy" target="_blank" className="block px-4 py-2 hover:bg-emerald-100 flex items-center gap-2"><MessageCircleWarning size={16} />تليجرام</a></li>
                    <li><a href="https://youtube.com" target="_blank" className="block px-4 py-2 hover:bg-emerald-100 flex items-center gap-2"><Youtube size={16} />يوتيوب</a></li>
                    <li><a href="https://instagram.com" target="_blank" className="block px-4 py-2 hover:bg-emerald-100 flex items-center gap-2"><Instagram size={16} />انستجرام</a></li>
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
            className="lg:hidden p-2 rounded-lg hover:bg-emerald-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white text-emerald-600 p-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <img src={logo} alt="جذر 3 Logo" className="w-12 h-12 rounded-xl shadow-lg" />
              </div>


            </div>
            <div className="text-right">
              <h1 className="text-sm font-bold text-white text-right">100% قدرات وتحصيلي</h1>
              <p className="text-emerald-100 text-xl font-bold text-center">مع أشرف شعبان</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="https://gzr3.com/online/"  target="_blank" className="hover:text-emerald-200 transition-colors flex items-center gap-2 text-right">
              <BookOpen size={18} />
              الدورات
            </a>

            <a href="#" className="hover:text-emerald-200 transition-colors flex items-center gap-2 text-right">
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
          <div className="lg:hidden mt-4 p-4 bg-emerald-600 rounded-lg">
            <nav className="flex flex-col gap-3">
              <a href="https://gzr3.com/online/"  target="_blank" className="hover:text-emerald-200 transition-colors flex items-center gap-2 py-2 text-right">
                <BookOpen size={18} />
                الدورات
              </a>
              <a href="#" className="hover:text-emerald-200 transition-colors flex items-center gap-2 py-2 text-right">
                <Calculator size={18} />
                القدرات
              </a>
              <a href="#" className="hover:text-emerald-200 transition-colors flex items-center gap-2 py-2 text-right">
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
