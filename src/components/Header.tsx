import React, { useState } from 'react';
import { Menu, X, BookOpen, Calculator, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-emerald-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span>التسجيل</span>
              <span>|</span>
              <span>تسجيل دخول</span>
            </div>
            <div className="text-right">
              <span>حسابات المعاصر</span>
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
              <div className="flex items-center gap-1 font-bold text-xl">
                <span className="text-2xl">√</span>
                <span>3</span>
              </div>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-white text-right">جذر 3</h1>
              <p className="text-emerald-100 text-sm text-right">100% قدرات وتحصيلي مع أشرف شعبان</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="hover:text-emerald-200 transition-colors flex items-center gap-2 text-right">
              <BookOpen size={18} />
              الدورات
            </a>
            <a href="#" className="hover:text-emerald-200 transition-colors flex items-center gap-2 text-right">
              <Calculator size={18} />
              القدرات
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
              <a href="#" className="hover:text-emerald-200 transition-colors flex items-center gap-2 py-2 text-right">
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