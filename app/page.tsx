import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      
      <footer className="bg-background border-t py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Vey Seavlang. Built with Next.js 14, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
      </footer>
    </main>
  )
}