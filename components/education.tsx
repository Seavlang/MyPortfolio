import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor Degree of Management Information System",
    university: "SETEC Institute",
    duration: "February 2021 - December 2024",
    description: "Successfully completed a comprehensive degree program combining business management principles with information systems and technology. Specialized in data management, system analysis, and business intelligence with strong foundation in both technical and business aspects.",
    gpa: "Graduated",
    highlight: true
  },
  {
    degree: "Professional IT Training Program",
    university: "Korea Software HRD Center",
    duration: "February - December 2023",
    description: "Completed comprehensive 9-month software development training at Cambodia's leading IT training center. Mastered Java programming, web development, database management, and advanced data analytics. This intensive program is sponsored by Webcash Group and KB Bank of Korea.",
    gpa: "870+ Hours Completed",
    highlight: true,
    achievements: ["Basic Course (Feb-July): 870 hours", "Advanced Course (July-Dec): 696 hours", "Full StackDevelopment", "Data Analytics"]
  },
  {
    degree: "High School Certificate",
    university: "Pechenda High School",
    duration: "2019 - 2020",
    location: "Battambang",
    description: "Completed secondary education with strong foundation in mathematics and sciences, preparing for higher education in technology and business fields.",
    gpa: "Completed",
    highlight: false
  }
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-sm font-medium text-green-800 mb-6">
            Education
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-yellow-400">Academic</span><br />
            <span className="text-green-800">Journey</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My educational achievements and professional training experiences
          </p>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`transition-all duration-300 shadow-lg hover:shadow-xl ${
                edu.highlight 
                  ? 'border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-green-50' 
                  : 'border-2 hover:border-green-200'
              }`}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    edu.highlight ? 'bg-yellow-400' : 'bg-green-100'
                  }`}>
                    <GraduationCap className={`h-6 w-6 ${
                      edu.highlight ? 'text-green-800' : 'text-green-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl text-green-800">
                      {edu.degree}
                      {edu.highlight && (
                        <span className="ml-3 inline-flex px-3 py-1 text-xs font-medium bg-yellow-400 text-green-800 rounded-full">
                          Featured Training
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-green-600">
                      {edu.university}
                      {edu.location && `, ${edu.location}`}
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.duration}</span>
                      <span className="ml-4 font-medium text-green-700">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">{edu.description}</p>
                
                {edu.achievements && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-green-800 mb-2">Key Achievements:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2.5 flex-shrink-0"></span>
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Education Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-100">
            <div className="text-3xl font-bold text-green-800">1,566+</div>
            <div className="text-sm text-gray-600 mt-1">Total Training Hours</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-100">
            <div className="text-3xl font-bold text-yellow-600">10+</div>
            <div className="text-sm text-gray-600 mt-1">Technologies Mastered</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-100">
            <div className="text-3xl font-bold text-green-800">4</div>
            <div className="text-sm text-gray-600 mt-1">Educational Milestones</div>
          </div>
        </div>
      </div>
    </section>
  )
}