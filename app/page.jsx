
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Users, 
  Globe, 
  Award,
  ChevronRight,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">ElegantShowcase</span>
            </div>
            
            <nav className="hidden md:flex space-x-10">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
              <a href="#stats" className="text-gray-600 hover:text-gray-900 transition-colors">Stats</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="rounded-full">
                Sign In
              </Button>
              <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                Get Started
              </Button>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#stats" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Stats</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <Button variant="outline" className="w-full justify-center rounded-full my-2">
                  Sign In
                </Button>
              </div>
              <div className="flex items-center px-5">
                <Button className="w-full justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 -z-10"></div>
          <div className="absolute inset-y-0 right-0 -z-10">
            <svg 
              width="404" 
              height="784" 
              fill="none" 
              viewBox="0 0 404 784" 
              className="absolute transform translate-x-1/2"
              aria-hidden="true"
            >
              <defs>
                <pattern 
                  id="pattern-squares" 
                  x="0" 
                  y="0" 
                  width="20" 
                  height="20" 
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" fill="rgba(99, 102, 241, 0.2)" />
                </pattern>
              </defs>
              <rect width="404" height="784" fill="url(#pattern-squares)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                  <span className="block">Beautiful design that</span>
                  <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">captures attention</span>
                </h1>
                <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Showcase your brand with an elegant, modern landing page that leaves a lasting impression on your visitors.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    Learn More
                  </Button>
                </div>
                <div className="mt-8 flex items-center justify-center lg:justify-start">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden">
                        <Image 
                          src={`https://images.unsplash.com/photo-1570295999919-56ceb5ecca6${i}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80`} 
                          width={32} 
                          height={32} 
                          alt={`User ${i}`} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-500">Join 10,000+ happy customers</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&h=800&q=80"
                    width={1064}
                    height={800}
                    alt="Elegant Design"
                    className="w-full h-auto object-cover rounded-2xl"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden md:block">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 h-5 w-5" />
                      <Star className="text-yellow-400 h-5 w-5" />
                      <Star className="text-yellow-400 h-5 w-5" />
                      <Star className="text-yellow-400 h-5 w-5" />
                      <Star className="text-yellow-400 h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium mt-1">Rated 5.0 by our customers</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to create a stunning online presence
              </p>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
                  title: "Modern Design",
                  description: "Clean, contemporary design that looks great on any device and impresses visitors."
                },
                {
                  icon: <Users className="h-8 w-8 text-purple-600" />,
                  title: "User-Focused",
                  description: "Intuitive interfaces designed with the user experience as the top priority."
                },
                {
                  icon: <Globe className="h-8 w-8 text-purple-600" />,
                  title: "Global Reach",
                  description: "Connect with customers around the world with multi-language support."
                },
                {
                  icon: <Award className="h-8 w-8 text-purple-600" />,
                  title: "Premium Quality",
                  description: "Attention to detail and quality that sets your brand apart from competitors."
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
                  title: "Fully Responsive",
                  description: "Looks perfect on any screen size from mobile phones to large desktops."
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
                  title: "Performance Optimized",
                  description: "Lightning fast load times and smooth animations for the best user experience."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="feature-card bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl"
                >
                  <div className="bg-purple-50 p-3 rounded-full w-fit mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it - hear from some of our satisfied customers
              </p>
            </div>
            
            <div className="testimonial-grid">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Marketing Director",
                  company: "TechCorp",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
                  quote: "This landing page completely transformed our online presence. We've seen a 40% increase in conversions since launching."
                },
                {
                  name: "Michael Chen",
                  role: "CEO",
                  company: "StartUp Inc.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
                  quote: "The elegant design perfectly captures our brand essence. Our customers constantly compliment our website now."
                },
                {
                  name: "Emily Rodriguez",
                  role: "Design Lead",
                  company: "Creative Solutions",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&h=256&q=80",
                  quote: "As a designer myself, I'm incredibly impressed with the attention to detail and aesthetic choices. Simply beautiful work."
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <Image 
                        src={testimonial.image} 
                        width={64} 
                        height={64} 
                        alt={testimonial.name} 
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've helped businesses around the world achieve remarkable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "10k+", label: "Happy Customers" },
                { value: "95%", label: "Satisfaction Rate" },
                { value: "40%", label: "Conversion Increase" },
                { value: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="stats-counter mb-3">{stat.value}</div>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create your beautiful landing page?</h2>
              <p className="text-xl mb-8 text-purple-100">
                Join thousands of satisfied customers and take your online presence to the next level.
              </p>
              <Button size="lg" className="rounded-full bg-white text-purple-600 hover:bg-gray-100">
                Get Started Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions or ready to start? Reach out to our team and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-purple-600 mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-medium">Email Us</h3>
                      <p className="text-gray-600">contact@elegantshowcase.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-purple-600 mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-medium">Call Us</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-purple-600 mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-medium">Visit Us</h3>
                      <p className="text-gray-600">123 Design Street, Creative City, 98765</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <Twitter className="h-5 w-5 text-gray-700" />
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <Facebook className="h-5 w-5 text-gray-700" />
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <Instagram className="h-5 w-5 text-gray-700" />
                    </a>
                    <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                      <Linkedin className="h-5 w-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ElegantShowcase</h3>
              <p className="text-gray-400 mb-4">
                Beautiful landing pages that capture attention and drive conversions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest news and offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-r-md"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} ElegantShowcase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
