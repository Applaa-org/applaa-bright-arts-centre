import { useState } from 'react';
import { Star, Quote, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [selectedRole, setSelectedRole] = useState('All');

  const roles = ['All', 'Student', 'Parent', 'Adult Student'];
  
  const filteredTestimonials = testimonials.filter(testimonial => 
    selectedRole === 'All' || testimonial.role === selectedRole
  );

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Student & Parent Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our community about their experiences at Bright Arts Centre
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={32} />
                ))}
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{testimonials.length}</p>
              <p className="text-gray-600">Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-2">98%</p>
              <p className="text-gray-600">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-600" />
            <span className="text-gray-600 mr-4">Filter by:</span>
            <div className="flex gap-2">
              {roles.map((role) => (
                <Button
                  key={role}
                  variant={selectedRole === role ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedRole(role)}
                >
                  {role}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <div className="relative mb-4">
                  <Quote className="text-blue-200 absolute -top-2 -left-2" size={40} />
                  <p className="text-gray-600 italic relative z-10">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.role}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No testimonials found for this category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedRole('All')}
              >
                View All Testimonials
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet some of our outstanding students and their achievements
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://picsum.photos/80/80?random=success1" 
                  alt="Success story"
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Emma Thompson</h3>
                  <p className="text-blue-600 mb-3">Piano Student • 5 years</p>
                  <p className="text-gray-600 mb-4">
                    "Starting piano at Bright Arts Centre was the best decision I ever made. 
                    From complete beginner to performing at the Royal Albert Hall - the journey 
                    has been incredible. The teachers believed in me every step of the way."
                  </p>
                  <div className="flex items-center space-x-4">
                    <Badge>ABRSM Grade 8</Badge>
                    <Badge>Royal Albert Hall Performer</Badge>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://picsum.photos/80/80?random=success2" 
                  alt="Success story"
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">James Wilson</h3>
                  <p className="text-blue-600 mb-3">Drama Student • 3 years</p>
                  <p className="text-gray-600 mb-4">
                    "The drama program here transformed my life. I went from being shy and 
                    introverted to landing a role in a West End production. The confidence 
                    and skills I gained are priceless."
                  </p>
                  <div className="flex items-center space-x-4">
                    <Badge>West End Debut</Badge>
                    <Badge>National Youth Theatre</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of our thriving community and start your own artistic journey
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/booking">Enroll Today</a>
          </Button>
        </div>
      </section>
    </div>
  );
}