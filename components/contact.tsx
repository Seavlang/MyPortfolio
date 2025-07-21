"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react"

export function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Seavlang",
      color: "hover:bg-gray-900 hover:text-white",
      description: "Check out my code and projects"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/seavlang",
      color: "hover:bg-blue-600 hover:text-white",
      description: "Professional network and experience"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/seavlang",
      color: "hover:bg-blue-500 hover:text-white",
      description: "Connect with me on Facebook"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/seavlang",
      color: "hover:bg-pink-500 hover:text-white",
      description: "Follow my daily updates"
    },
    {
      name: "Telegram",
      icon: MessageCircle,
      url: "https://t.me/seavlangg",
      color: "hover:bg-blue-400 hover:text-white",
      description: "Message me on Telegram"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or have questions about my work? Let's connect through these platforms or reach out directly!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Social Media Section */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Follow Me</CardTitle>
                <CardDescription>
                  Connect with me on social media and stay updated with my latest projects and insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <Button
                        key={social.name}
                        variant="outline"
                        className={`w-full justify-start gap-4 p-6 h-auto transition-all duration-300 ${social.color} border-2 hover:border-current`}
                        asChild
                      >
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          <IconComponent className="h-6 w-6" />
                          <div className="text-left">
                            <div className="font-semibold">{social.name}</div>
                            <div className="text-sm opacity-70">{social.description}</div>
                          </div>
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">sievlangvey@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">088 275 8284</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Toul Kork, Phnom Penh</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Available for collaborations</h3>
                <p className="text-sm opacity-90">
                  I'm currently available for teaching opportunities, technical mentoring, and project collaborations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}