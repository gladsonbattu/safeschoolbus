
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Shield, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Safe School Bus
            <span className="text-blue-600 block">Tracking Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Give parents peace of mind and schools complete visibility with our advanced 
            real-time GPS tracking system for school transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Request Demo
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              View Features
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 mb-16">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span>100% Safe & Secure</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-500 mr-2" />
              <span>Real-time GPS</span>
            </div>
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 text-orange-500 mr-2" />
              <span>Mobile App</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Live Tracking Dashboard</h3>
                <p className="text-gray-600">See your buses in real-time on an interactive map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
