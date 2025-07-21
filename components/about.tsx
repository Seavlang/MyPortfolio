import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, GraduationCap, Users, Code2, BookOpen, Award } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-6">
            <Users className="h-4 w-4" />
            About Me
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Meet <span className="text-green-600">Vey Seavlang</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From student to instructor - empowering the next generation of developers in Cambodia
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Story Card */}
          <Card className="lg:col-span-2 border-2 border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                My Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  I'm an IT instructor at <strong>Korea Software HRD Center</strong>, Cambodia's leading software training institute. 
                  Born in Battambang and based in Phnom Penh, I've made the inspiring journey from student to 
                  faculty member, now teaching and mentoring the next generation of IT professionals.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Currently, I teach multiple courses including <strong>Frontend Web Development</strong> (HTML, CSS, Tailwind, 
                  JavaScript, React.js, Next.js), <strong>Data Analytics</strong>, <strong>Version Control Systems</strong> (Git), and <strong>Cloud 
                  Deployment</strong> technologies (Google Cloud, Linux, Docker).
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">
                  My teaching approach combines theoretical knowledge with hands-on practical experience, 
                  empowering students with cutting-edge skills for successful careers in the tech industry.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Profile Card */}
          <Card className="border-2 border-yellow-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="relative w-24 h-24 mx-auto">
                  <Image
                    src="/images/profile.jpg"
                    alt="Vey Seavlang"
                    fill
                    className="rounded-full object-cover border-4 border-green-200"
                  />
                </div>
                
                <div>
                  <h3 className="font-bold text-xl text-green-800">Vey Seavlang</h3>
                  <p className="text-gray-600">IT Instructor & Mentor</p>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Toul Kork, Phnom Penh</span>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center justify-center gap-2 text-green-700">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-sm font-medium">KSHRD Faculty</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Students Taught</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-yellow-600 mb-2">6+</div>
              <div className="text-sm text-gray-600">Courses Instructed</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-sm text-gray-600">Years Teaching</div>
            </CardContent>
          </Card>
          
          <Card className="text-center border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-sm text-gray-600">Course Levels</div>
            </CardContent>
          </Card>
        </div>

        {/* Skills & Expertise */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-green-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                Technical Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Frontend Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Data Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Version Control</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Cloud Deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Java Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Spring Boot</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-yellow-700 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Teaching Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Hands-on Learning:</strong> Combining theory with practical projects
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Student-Centered:</strong> Adapting to individual learning styles
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Industry-Ready:</strong> Teaching current industry standards
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}