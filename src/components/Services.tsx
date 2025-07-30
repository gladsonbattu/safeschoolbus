
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Shield, Smartphone, Monitor, Bell, Users, Route, AlertTriangle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Real-Time GPS Tracking",
      description: "Track your school buses live with precise GPS location updates every 10 seconds."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: "Parent Mobile App",
      description: "Parents get instant notifications about pickup, drop-off, delays, and bus location."
    },
    {
      icon: <Monitor className="w-8 h-8 text-green-600" />,
      title: "School Dashboard",
      description: "Complete fleet management with route optimization, driver monitoring, and reporting."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Safety Features",
      description: "Panic button, speed alerts, geofencing, and emergency notifications for maximum safety."
    },
    {
      icon: <Bell className="w-8 h-8 text-red-600" />,
      title: "Smart Notifications",
      description: "Automated SMS and app notifications for arrivals, departures, and important updates."
    },
    {
      icon: <Route className="w-8 h-8 text-teal-600" />,
      title: "Route Management",
      description: "Optimize routes, manage stops, and track adherence to scheduled timings."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Student Management",
      description: "Digital attendance, student profiles, and parent contact management system."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
      title: "Emergency Alerts",
      description: "Instant emergency notifications to parents, school, and authorities when needed."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive School Bus Tracking Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to ensure safe, efficient, and transparent school transportation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
