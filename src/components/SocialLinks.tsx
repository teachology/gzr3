import React from 'react';
import { Facebook, Youtube, MessageCircle, Send } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: '#',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'تابعنا على فيسبوك'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: '#',
      color: 'bg-red-600 hover:bg-red-700',
      description: 'قناتنا على يوتيوب'
    },
    {
      name: 'TikTok',
      icon: MessageCircle, // Using MessageCircle as TikTok icon substitute
      url: '#',
      color: 'bg-black hover:bg-gray-800',
      description: 'تيك توك'
    },
    {
      name: 'Telegram',
      icon: Send,
      url: '#',
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'قناة تليجرام'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-right mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-right">تابعنا على</h2>
          <p className="text-xl text-gray-600 text-right">
            كن جزءاً من مجتمعنا التعليمي على منصات التواصل الاجتماعي
          </p>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white p-8 rounded-2xl text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group`}
              >
                <IconComponent className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-lg mb-2 text-center">{social.name}</h3>
                <p className="text-sm opacity-90 text-center">{social.description}</p>
              </a>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl max-w-2xl mx-auto text-right">
            <MessageCircle className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-right">تحتاج مساعدة؟</h3>
            <p className="text-lg mb-6 text-right">تواصل معنا مباشرة عبر واتساب للاستفسار عن الدورات والتسجيل</p>
            <a
              href={`https://wa.me/966565435360?text=مرحباً، أريد الاستفسار عن دورات جذر ثلاثة`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              966565435360+
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;