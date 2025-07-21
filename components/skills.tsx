"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const skills = [
  { name: "JavaScript", color: "bg-yellow-500", category: "Web Frontend" },
  { name: "React.js", color: "bg-cyan-500", category: "Web Frontend" },
  { name: "Next.js", color: "bg-black", category: "Web Frontend" },
  { name: "HTML/CSS", color: "bg-orange-500", category: "Web Frontend" },
  { name: "Tailwind CSS", color: "bg-teal-500", category: "Web Frontend" },
  { name: "Git", color: "bg-orange-600", category: "Version Control" },
  { name: "Google Cloud", color: "bg-blue-600", category: "Cloud Platform" },
  { name: "Docker", color: "bg-blue-500", category: "DevOps" },
  { name: "Linux", color: "bg-gray-800", category: "Operating System" },
  { name: "Python", color: "bg-blue-700", category: "Data Analytics" },
  { name: "Power BI", color: "bg-yellow-600", category: "Data Analytics" },
  { name: "Java", color: "bg-red-600", category: "Backend" },
  { name: "Spring Boot", color: "bg-green-600", category: "Backend" },
  { name: "PostgreSQL", color: "bg-blue-800", category: "Database" },
  { name: "EXCEL", color: "bg-green-800", category: "Data Analytics" },
  { name: "Web Scraping", color: "bg-orange-800", category: "Data Analytics" },
  { name: "Machine Learning", color: "bg-blue-800", category: "Data Analytics" },
  { name: "Prompt Engineering", color: "bg-blue-800", category: "Data Analytics" },
]

const services = [
  {
    title: "Frontend Web Development",
    icon: "💻",
    description: "Teaching modern web development using HTML, CSS, Tailwind CSS, JavaScript, React.js, and Next.js. Focus on building responsive, interactive user interfaces.",
    technologies: ["HTML/CSS", "Tailwind CSS", "JavaScript", "React.js", "Next.js"],
    courseType: "Basic Course (2024)"
  },
  {
    title: "Version Control & Deployment",
    icon: "🚀",
    description: "Instructing Git version control systems and cloud deployment using Google Cloud Platform, Linux administration, and Docker containerization.",
    technologies: ["Git", "Google Cloud", "Linux", "Docker", "Docker Compose"],
    courseType: "Basic Course (2025)"
  },
  {
    title: "Data Analytics",
    icon: "📊",
    description: "Teaching comprehensive data analysis using Python, statistical methods, data visualization, and business intelligence tools for informed decision-making.",
    technologies: ["Python", "Statistics", "Data Visualization", "Web Scraping", "EXCEL", "Power BI", "Machine Learning"],
    courseType: "Advanced Course (2024-2025)"
  }
]

export function Skills() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto">
        {/* Teaching Services Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-6">
            Teaching Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-yellow-400">Courses</span> I Teach
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Currently instructing at Korea Software HRD Center, empowering the next generation of IT professionals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 border-2 hover:border-yellow-400 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <div className="mb-3">
                  <span className="inline-flex px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {service.courseType}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-yellow-100 text-green-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Technical Skills Grid */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-100 to-green-100 border-2 border-yellow-200 rounded-full text-base font-bold text-green-800 mb-8 shadow-lg">
            ⚡ Technical Mastery
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-yellow-400">Technologies</span><br />
            <span className="text-green-800">I Master & Teach</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Scroll through my technical expertise - each technology I've mastered through hands-on experience and now teach to empower students
          </p>
        </div>
        
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-125 hover:rotate-6"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-white p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-125 hover:rotate-6"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Skills Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-4 mx-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 min-w-max px-4">
              {skills.map((skill, index) => (
                <Card key={index} className="group hover:scale-110 transition-all duration-300 border-2 hover:border-yellow-400 shadow-lg hover:shadow-2xl flex-shrink-0 w-32 bg-gradient-to-br from-white to-gray-50 hover:from-yellow-50 hover:to-green-50">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 rounded-xl ${skill.color} mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3`}>
                      {skill.name.charAt(0)}
                    </div>
                    <h3 className="font-bold text-sm text-green-800 mb-2 group-hover:text-green-900 transition-colors">{skill.name}</h3>
                    <div className="inline-flex px-2 py-1 bg-gradient-to-r from-yellow-100 to-green-100 border border-yellow-200 rounded-full">
                      <p className="text-xs font-medium text-green-700">{skill.category}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}