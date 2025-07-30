
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Demo Request Sent!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', schoolName: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your School Transportation?
          </h2>
          <p className="text-xl text-gray-600">
            Get a personalized demo and see how our solution can benefit your school
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Request a Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School/Organization Name *
                    </label>
                    <Input
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      required
                      placeholder="Enter school name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white py-3 shadow-lg">
                  Request Demo
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-600">+91 9876543210</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-600">info@safeschoolbus.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                    <span className="text-gray-600">
                      123 Technology Park<br />
                      Gurgaon, Haryana 122001
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
      </div>
    </section>
  );
};

export default ContactSection;
