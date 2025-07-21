import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, GraduationCap, Users, Code, Award, MapPin, Clock } from "lucide-react"

const experiences = [
  {
    title: "IT Instructor",
    company: "Korea Software HRD Center",
    duration: "2024 - Present",
    description: [
      "Currently teaching at Cambodia's leading software training center, instructing the next generation of IT professionals",
      "2024: Taught Frontend Web Development (HTML, CSS, Tailwind, JavaScript, React.js, Next.js) in Basic Course",
      "2024: Instructed Data Analytics concepts and tools in Advanced Course",
      "2025: Transitioned to teaching Version Control Systems (Git) and Deployment technologies in Basic Course",
      "2025: Teaching Google Cloud Platform, Linux administration, and Docker containerization",
      "Continuing to instruct Data Analytics in Advanced Course, mentoring students in statistical analysis and data visualization"
    ],
    technologies: ["HTML/CSS", "Tailwind CSS", "JavaScript", "React.js", "Next.js", "Git", "Google Cloud", "Linux", "Docker", "Data Analytics", "Python", "Power BI"]
  },
  {
    title: "HRD Center Trainee - Advanced Course",
    company: "Korea Software HRD Center",
    duration: "July 31 - December 07, 2023",
    description: [
      "Completed advanced 696-hour data analytics and statistics program",
      "Gained expertise in data analytics concepts and statistical analysis",
      "Mastered Excel for data analysis and Power BI for data visualization",
      "Learned Python libraries for data analytics and machine learning",
      "Developed skills in data warehouse management and predictive modeling",
      "Practiced web scraping and data collection techniques"
    ],
    technologies: ["Python", "Power BI", "Excel", "Statistics", "Data Analytics", "Machine Learning", "SQL"]
  },
  {
    title: "HRD Center Trainee - Basic Course",
    company: "Korea Software HRD Center",
    duration: "February 01 - July 20, 2023",
    description: [
      "Completed comprehensive 870-hour programming and web development course",
      "Mastered Java programming including OOP concepts and design patterns",
      "Developed web applications using HTML, CSS, JavaScript, and modern frameworks",
      "Built Spring Boot applications with RESTful web services",
      "Gained experience with database design and management (PostgreSQL, MySQL)",
      "Implemented security features and JSON Web Token authentication"
    ],
    technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "React", "PostgreSQL", "MySQL", "REST APIs"]
  },
  {
    title: "Volunteer Computer Teacher",
    company: "Raonjena Children's Choir/Shinhan Computer Class",
    duration: "April 2023 - September 2023",
    description: [
      "Taught basic computer skills to children aged 7-13 years old",
      "Introduced fundamental programming and coding concepts to young learners",
      "Developed age-appropriate lesson plans and learning materials",
      "Fostered interest in technology among underprivileged children",
      "Collaborated with other volunteers to create engaging educational experiences"
    ],
    technologies: ["Basic Programming", "Computer Literacy", "Educational Technology", "Teaching"]
  }
]

export function Experience() {
  const getExperienceIcon = (index: number) => {
    switch(index) {
      case 0: return Briefcase
      case 1: return GraduationCap
      case 2: return Code
      case 3: return Users
      default: return Briefcase
    }
  }

  const getExperienceColor = (index: number) => {
    switch(index) {
      case 0: return {
        bg: 'from-green-50 to-emerald-50',
        border: 'border-green-200',
        hover: 'hover:border-green-300',
        iconBg: 'bg-green-500',
        badgeBg: 'bg-green-100',
        badgeText: 'text-green-800',
        titleColor: 'text-green-700',
        companyColor: 'text-green-600'
      }
      case 1: return {
        bg: 'from-blue-50 to-indigo-50',
        border: 'border-blue-200',
        hover: 'hover:border-blue-300',
        iconBg: 'bg-blue-500',
        badgeBg: 'bg-blue-100',
        badgeText: 'text-blue-800',
        titleColor: 'text-blue-700',
        companyColor: 'text-blue-600'
      }
      case 2: return {
        bg: 'from-purple-50 to-violet-50',
        border: 'border-purple-200',
        hover: 'hover:border-purple-300',
        iconBg: 'bg-purple-500',
        badgeBg: 'bg-purple-100',
        badgeText: 'text-purple-800',
        titleColor: 'text-purple-700',
        companyColor: 'text-purple-600'
      }
      case 3: return {
        bg: 'from-orange-50 to-amber-50',
        border: 'border-orange-200',
        hover: 'hover:border-orange-300',
        iconBg: 'bg-orange-500',
        badgeBg: 'bg-orange-100',
        badgeText: 'text-orange-800',
        titleColor: 'text-orange-700',
        companyColor: 'text-orange-600'
      }
      default: return {
        bg: 'from-gray-50 to-slate-50',
        border: 'border-gray-200',
        hover: 'hover:border-gray-300',
        iconBg: 'bg-gray-500',
        badgeBg: 'bg-gray-100',
        badgeText: 'text-gray-800',
        titleColor: 'text-gray-700',
        companyColor: 'text-gray-600'
      }
    }
  }

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-6">
            <Briefcase className="h-4 w-4" />
            Professional Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-green-600">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From student to instructor - a journey of continuous learning and growth in technology
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-blue-400 via-purple-400 to-orange-400 rounded-full hidden lg:block opacity-30"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = getExperienceIcon(index)
              const colors = getExperienceColor(index)
              
              return (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-6 h-6 ${colors.iconBg} rounded-full border-4 border-white shadow-lg hidden lg:flex items-center justify-center z-10`}>
                    <IconComponent className="h-3 w-3 text-white" />
                  </div>
                  
                  <Card className={`lg:ml-20 border-2 ${colors.border} ${colors.hover} bg-gradient-to-br ${colors.bg} transition-all duration-500 shadow-xl hover:shadow-2xl hover:translate-y-[-4px] group-hover:scale-[1.02] backdrop-blur-sm`}>
                    <CardHeader className="pb-4">
                      {/* Mobile icon */}
                      <div className={`lg:hidden w-12 h-12 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <CardTitle className={`text-2xl md:text-3xl font-bold ${colors.titleColor}`}>
                            {exp.title}
                          </CardTitle>
                          {index === 0 && (
                            <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-400 text-white rounded-full text-sm font-bold shadow-lg">
                              <Award className="h-3 w-3" />
                              Current Role
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <CardDescription className={`text-lg font-semibold ${colors.companyColor}`}>
                            {exp.company}
                          </CardDescription>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600 font-medium">{exp.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Achievements */}
                      <div className="space-y-3">
                        {exp.description.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 group">
                            <div className={`w-2 h-2 ${colors.iconBg} rounded-full mt-2 flex-shrink-0 transition-all duration-300 group-hover:scale-125`}></div>
                            <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Technologies */}
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-600 mb-3">Technologies & Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 text-xs font-medium ${colors.badgeBg} ${colors.badgeText} rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-md`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}