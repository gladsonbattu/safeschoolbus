
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Shield, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Safe School Bus
            <span className="text-yellow-500 block">Tracking Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Give parents peace of mind and schools complete visibility with our advanced 
            real-time GPS tracking system for school transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white px-8 py-3 shadow-lg">
              Request Demo
            </Button>
            <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-3">
              View Features
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 mb-16">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span>100% Safe & Secure</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-yellow-500 mr-2" />
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
            <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-56 bg-gray-800 rounded-3xl flex flex-col items-center justify-center mx-auto mb-4 relative overflow-hidden">
                  <div className="w-28 h-52 bg-yellow-50 rounded-2xl m-2 flex flex-col items-center justify-start pt-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-xs font-semibold text-gray-800 mb-2">School Bus Tracker</div>
                    <div className="w-16 h-2 bg-green-500 rounded-full mb-1"></div>
                    <div className="text-xs text-gray-600">Live Tracking</div>
                  </div>
                  <div className="absolute bottom-2 w-12 h-1 bg-gray-600 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Mobile App Experience</h3>
                <p className="text-gray-600">Track your child's bus in real-time on any device</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
