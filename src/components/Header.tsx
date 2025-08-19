import React, { useState } from 'react';
import { Menu, X, BookOpen, Calculator, Phone, Instagram, Youtube, MessageCircleWarning } from 'lucide-react';
import logo from '../images/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);

  return (
    <header className="bg-emerald-800 text-white">
      {/* Top Bar */}
      <div className="py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href="https://gzr3.com/online/login/signup.php"
              target="_blank"
              className="hover:text-emerald-200 transition-colors"
            >
              التسجيل
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://gzr3.com/online/login/index.php"
              target="_blank"
              className="hover:text-emerald-200 transition-colors"
            >
              تسجيل دخول
            </a>
          </div>

          <div className="relative text-right">
            <button
              onClick={() => setIsAccountsOpen(!isAccountsOpen)}
              className="hover:text-emerald-200 transition-colors font-semibold"
            >
              حسابات جذر ثلاثة
            </button>
            {isAccountsOpen && (
              <div className="absolute right-0 mt-2 bg-white text-emerald-800 shadow-lg rounded-lg z-50 w-48">
                <ul className="text-sm">
                  <li>
                    <a
                      href="https://t.me/gzr3sanad"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-emerald-100 flex items-center gap-2"
                    >
                      <MessageCircleWarning size={16} />
                      تليجرام
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCoYyvX1H4lVjK9woNQTE5hA"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-emerald-100 flex items-center gap-2"
                    >
                      <Youtube size={16} /> يوتيوب
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ashraf_shaban1"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-emerald-100 flex items-center gap-2"
                    >
                      <Instagram size={16} /> انستجرام
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="جذر ثلاثة Logo" className="w-16 h-16 rounded-xl" />
          <div className="text-right">
            <h1 className="text-lg font-bold text-white">100% قدرات وتحصيلي</h1>
            <p className="text-emerald-200 font-semibold text-sm">مع أشرف شعبان</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <a
            href="https://gzr3.com/online/"
            target="_blank"
            className="hover:text-emerald-200 transition-colors flex items-center gap-2"
          >
            <BookOpen size={18} />
            الدورات
          </a>

          <a
            href="#"
            className="hover:text-emerald-200 transition-colors flex items-center gap-2"
          >
            <Phone size={18} />
            التواصل
          </a>

          <a
            href="https://gzr3.com/online"   target="_blank" 
            className="bg-white text-emerald-800 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-100 transition-colors"
          >
            منصة التعلم
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
          <nav className="flex flex-col gap-3">
            <a
              href="https://gzr3.com/online/"
              target="_blank"
              className="text-emerald-800 hover:text-emerald-600 transition-colors flex items-center gap-2 py-2"
            >
              <BookOpen size={18} />
              الدورات
            </a>
            <a
              href="#"
              className="text-emerald-800 hover:text-emerald-600 transition-colors flex items-center gap-2 py-2"
            >
              <Calculator size={18} />
              القدرات
            </a>
            <a
              href="#"
              className="text-emerald-800 hover:text-emerald-600 transition-colors flex items-center gap-2 py-2"
            >
              <Phone size={18} />
              التواصل
            </a>
            <a
              href="https://gzr3.com/online"   target="_blank" 
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-center mt-2"
            >
              منصة التعلم
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
