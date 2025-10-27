import { Link } from '@tanstack/react-router';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Booking', href: '/booking' }
  ];

  const courses = [
    { name: 'Piano Lessons', href: '/courses#piano' },
    { name: 'Guitar Classes', href: '/courses#guitar' },
    { name: 'Art Workshops', href: '/courses#art' },
    { name: 'Drama Classes', href: '/courses#drama' },
    { name: 'Vocal Training', href: '/courses#vocal' },
    { name: 'Musical Theatre', href: '/courses#musical' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BA</span>
              </div>
              <span className="text-xl font-bold">Bright Arts Centre</span>
            </div>
            <p className="text-blue-100 mb-4">
              Nurturing creativity and artistic excellence in the heart of the UK. 
              Inspiring the next generation of artists, musicians, and performers.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.href}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-200 mt-1" />
                <div>
                  <p className="text-blue-100">123 Arts Street</p>
                  <p className="text-blue-100">London, UK, SW1A 1AA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-200" />
                <p className="text-blue-100">+44 20 7123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-200" />
                <p className="text-blue-100">info@brightartscentre.co.uk</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-blue-200 mt-1" />
                <div>
                  <p className="text-blue-100">Mon-Fri: 9:00 AM - 8:00 PM</p>
                  <p className="text-blue-100">Sat-Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 Bright Arts Centre. All rights reserved. | 
            <Link to="/privacy" className="hover:text-white ml-2">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-white ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}