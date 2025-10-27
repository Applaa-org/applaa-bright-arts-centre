import { Heart, Target, Users, Award, BookOpen, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Arts",
      description: "We believe in the transformative power of artistic expression and its ability to enrich lives."
    },
    {
      icon: Target,
      title: "Excellence in Teaching",
      description: "Our experienced instructors are dedicated to providing the highest quality arts education."
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "We welcome students of all ages, backgrounds, and skill levels in a supportive environment."
    },
    {
      icon: Award,
      title: "Proven Success",
      description: "15 years of nurturing talent and helping students achieve their artistic goals."
    }
  ];

  const milestones = [
    { year: "2009", event: "Bright Arts Centre founded with 12 students" },
    { year: "2014", event: "Expanded to new purpose-built facility" },
    { year: "2018", event: "Won 'Best Arts School in London' award" },
    { year: "2022", event: "Reached 500+ active students milestone" },
    { year: "2024", event: "Launched online learning platform" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Bright Arts Centre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where creativity flourishes and artistic dreams come to life
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2009 by renowned arts educator Sarah Mitchell, Bright Arts Centre began as a small studio with a big vision: to make quality arts education accessible to everyone in our community.
              </p>
              <p className="text-gray-600 mb-4">
                What started with just 12 students and a handful of dedicated teachers has grown into a thriving arts hub with over 500 students, 20+ instructors, and state-of-the-art facilities. Our journey has been marked by countless performances, exhibitions, and most importantly, the artistic growth of our students.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we're proud to be recognized as one of London's premier arts education centres, offering comprehensive programs in music, art, and drama for students of all ages and abilities.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">500+</p>
                  <p className="text-gray-600">Students</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">20+</p>
                  <p className="text-gray-600">Instructors</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-pink-600">15</p>
                  <p className="text-gray-600">Years</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://picsum.photos/600/400?random=about" 
                alt="Our arts centre"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To provide exceptional arts education that inspires creativity, builds confidence, and nurtures talent in a supportive, inclusive environment. We strive to make the arts accessible to everyone, regardless of age, background, or experience level.
              </p>
            </Card>
            <Card className="p-8">
              <div className="flex items-center mb-4">
                <Sparkles className="text-purple-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To be the leading arts education centre in the UK, recognized for our innovative teaching methods, outstanding student achievements, and commitment to artistic excellence. We aim to create a community where every individual can discover and develop their unique artistic voice.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Teaching Philosophy</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <BookOpen className="text-blue-600 mr-3 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Student-Centered Learning</h4>
                    <p className="text-gray-600">We tailor our teaching methods to each student's unique learning style, pace, and goals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-purple-600 mr-3 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Collaborative Environment</h4>
                    <p className="text-gray-600">We foster teamwork and peer learning through group projects, ensembles, and performances.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="text-pink-600 mr-3 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Performance-Based</h4>
                    <p className="text-gray-600">Regular performances and exhibitions help students build confidence and showcase their progress.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://picsum.photos/600/400?random=teaching" 
                alt="Teaching in action"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our history
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8">
                <div className="w-24 text-right pr-4">
                  <span className="text-lg font-bold text-blue-600">{milestone.year}</span>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="flex-1 pl-4">
                  <p className="text-gray-600">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}