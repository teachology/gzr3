import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TeacherProfile from './components/TeacherProfile';
import CoursesSection from './components/CoursesSection';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <Hero />
      <TeacherProfile />
      <CoursesSection />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;