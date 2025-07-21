"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
        
            
            <div className="space-y-4">
                              <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
                  I'm <span className="text-yellow-400">Vey Seavlang</span>,<br />
                  <span className="text-green-800">IT Instructor.</span><br />
                </h1>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                                  I'm an IT instructor at Korea Software HRD Center, teaching the next generation of developers. 
                  Specializing in web development, data analytics, version control, and cloud deployment. 
                  Passionate about sharing knowledge and empowering students with cutting-edge technology skills.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" variant="outline" className="gap-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white px-8 py-3 rounded-full font-medium" asChild>
                <a href="#contact">
                  Get in touch
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-green-200 hover:bg-green-100" asChild>
                <a href="https://github.com/Seavlang" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              
              <Button variant="outline" size="icon" className="rounded-full border-green-200 hover:bg-green-100" asChild>
                <a href="https://www.linkedin.com/in/vey-seavlang-4912b0288" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              
              <Button variant="outline" size="icon" className="rounded-full border-green-200 hover:bg-green-100" asChild>
                <a href="https://www.facebook.com/share/14Ju3sbwGtf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              
              <Button variant="outline" size="icon" className="rounded-full border-green-200 hover:bg-green-100" asChild>
                <a href="https://www.instagram.com/_seavlang_?igsh=dW9ibGk2NHdlOHRx&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              
              <Button variant="outline" size="icon" className="rounded-full border-green-200 hover:bg-green-100" asChild>
                <a href="https://t.me/seavlangg" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">Telegram</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative">
            {/* Yellow circle background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-yellow-400 rounded-full opacity-20"></div>
            </div>
            
            {/* Main profile image */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative w-72 h-72">
                <Image
                  src="/images/profile.jpg"
                  alt="Vey Seavlang Profile Picture"
                  fill
                  className="rounded-full object-cover border-8 border-white shadow-xl"
                  priority
                />
              </div>
            </div>
            
            {/* Floating badges */}
                        <div className="absolute top-16 right-8 z-20">
              <div className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                IT Instructor
              </div>
            </div>
            
            <div className="absolute bottom-16 left-8 z-20">
              <div className="bg-yellow-400 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                KSHRD Faculty
              </div>
            </div>
            
            <div className="absolute top-32 left-4 z-20">
              <div className="bg-white border-2 border-green-200 text-green-800 px-3 py-2 rounded-full text-xs font-medium shadow-lg">
                Web Development
              </div>
            </div>
            
            <div className="absolute bottom-32 right-4 z-20">
              <div className="bg-white border-2 border-yellow-200 text-yellow-600 px-3 py-2 rounded-full text-xs font-medium shadow-lg">
                Data Analytics
              </div>
            </div>
            
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                Git & Deployment
              </div>
            </div>
            
            <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 z-20">
              <div className="bg-yellow-300 text-green-800 px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                Cloud & Docker
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}