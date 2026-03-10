'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">HRD Travel</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#destinations" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Destinations</a>
                <a href="#packages" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Packages</a>
                <a href="#contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your Next
            <span className="text-primary block">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the world like never before with our curated travel packages and expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Explore Destinations
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Watch Video
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked destinations that offer unforgettable experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Bali Paradise", price: "$1,299", duration: "7 days", rating: 4.9 },
              { name: "Swiss Alps", price: "$2,499", duration: "10 days", rating: 4.8 },
              { name: "Tokyo Adventure", price: "$1,899", duration: "8 days", rating: 4.7 },
              { name: "Santorini Sunset", price: "$1,599", duration: "6 days", rating: 4.9 }
            ].map((destination, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 bg-gradient-to-br from-blue-400 to-green-400">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-primary">{destination.price}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.duration}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{destination.rating}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Book Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with our travel experts to plan your perfect trip
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-blue-100">
                  <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-blue-100">
                  <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@hrdtravel.com</span>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Textarea placeholder="Tell us about your dream destination..." rows={4} />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">HRD Travel</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in creating unforgettable travel experiences around the world.
            </p>
            <p className="text-gray-400">&copy; 2025 HRD Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}