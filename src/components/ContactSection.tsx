
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    // Format phone number for WhatsApp (remove dashes and add country code)
    const phoneNumber = '18138171529';
    const message = encodeURIComponent('Hi, I would like to know more about SafeSchoolBus tracking solutions.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your School Transportation?
          </h2>
          <p className="text-xl text-gray-600">
            Get in touch with us to learn more about our solution
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-600">+1-813-817-1529</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-600">info@safeschoolbus.in</span>
                </div>
                <div 
                  className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600 hover:text-green-600">Chat on WhatsApp</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                  <span className="text-gray-600">
                    Hyderabad, Telangana
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Why Wait?</h3>
            <ul className="space-y-2 text-yellow-100">
              <li>✓ Free 30-day trial</li>
              <li>✓ Quick setup in under 24 hours</li>
              <li>✓ Dedicated support team</li>
              <li>✓ No setup fees</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
