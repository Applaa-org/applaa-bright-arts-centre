import { useParams, Link } from '@tanstack/react-router';
import { ArrowLeft, Clock, Users, Star, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { courses } from '@/data/courses';

export default function CourseDetail() {
  const { id } = useParams({ from: '/courses/$id' });
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Button asChild>
            <Link to="/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Button variant="secondary" className="mb-4" asChild>
              <Link to="/courses">
                <ArrowLeft className="mr-2" size={16} />
                Back to Courses
              </Link>
            </Button>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <Badge className="mb-3">{course.category}</Badge>
                <h1 className="text-4xl font-bold text-white mb-2">{course.title}</h1>
                <p className="text-xl text-gray-200">{course.description}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-3xl font-bold text-white mb-2">{course.price}/session</div>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <Link to="/booking">Enroll Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <p className="text-gray-600">
                  Our comprehensive {course.title.toLowerCase()} program is designed to provide students with 
                  a solid foundation in their chosen discipline while encouraging creative expression and 
                  personal growth. Whether you're a complete beginner or looking to advance your skills, 
                  our experienced instructors will guide you every step of the way.
                </p>
              </Card>

              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Star className="text-yellow-400 mr-3 mt-1" size={20} />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Structure</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Beginner Level</h4>
                      <p className="text-sm text-gray-600">Introduction to fundamentals</p>
                    </div>
                    <Badge>Weeks 1-4</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Intermediate Level</h4>
                      <p className="text-sm text-gray-600">Building skills and techniques</p>
                    </div>
                    <Badge>Weeks 5-8</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced Level</h4>
                      <p className="text-sm text-gray-600">Mastery and performance</p>
                    </div>
                    <Badge>Weeks 9-12</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="text-gray-400 mr-3" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-gray-400 mr-3" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Age Group</p>
                      <p className="font-semibold">{course.ageGroup}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-gray-400 mr-3" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Level</p>
                      <p className="font-semibold">{course.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-gray-400 mr-3" size={20} />
                    <div>
                      <p className="text-sm text-gray-600">Schedule</p>
                      <p className="font-semibold">Flexible</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h3>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{course.price}</p>
                  <p className="text-gray-600 mb-4">per session</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly (4 sessions)</span>
                      <span className="font-semibold">£{parseInt(course.price.replace('£', '')) * 4}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Term (12 sessions)</span>
                      <span className="font-semibold">£{parseInt(course.price.replace('£', '')) * 12 * 0.9} (10% off)</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                <Link to="/booking">Enroll Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}