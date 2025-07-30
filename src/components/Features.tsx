
import React from 'react';
import { CheckCircle, Clock, UserCheck, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "99.9% Uptime Guaranteed",
      description: "Reliable tracking with redundant systems and 24/7 monitoring"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: "Real-time Updates",
      description: "Live location updates every 10 seconds for accurate tracking"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-purple-500" />,
      title: "Easy to Use",
      description: "Intuitive interface for parents, schools, and drivers"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      title: "Detailed Analytics",
      description: "Comprehensive reports on routes, timings, and performance"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our School Bus Tracking System?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Trusted by over 500+ schools and 50,000+ parents across the country. 
              Our proven solution ensures complete safety and transparency in school transportation.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-8 text-blue-100">
                  Join thousands of satisfied schools and parents who trust our tracking solution.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
