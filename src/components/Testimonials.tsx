
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent, Delhi Public School",
      content: "I feel so much more at ease knowing exactly where my daughter's bus is. The app notifications are perfect - I know exactly when to send her to the bus stop!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Transport Manager, St. Mary's School",
      content: "This system has revolutionized our transportation management. Parents are happier, and we have complete visibility of our entire fleet. Highly recommended!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Parent, Modern School",
      content: "The emergency alert feature gave me peace of mind when my son's bus broke down. I was immediately notified and could make alternate arrangements.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Parents & Schools Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by families and educational institutions nationwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
