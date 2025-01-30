"use client"

import { User, Briefcase, GraduationCap, Code, FolderGit2 } from "lucide-react"
import { Header } from "./components/header"
import { ProgressCard } from "./components/progress-card"
import { useCV } from "./context/cv-context"

export default function Home() {
  const { cvData } = useCV()

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="container px-4 py-8 flex-grow">
        <h1 className="mb-8 text-2xl font-bold">Your Progress</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProgressCard
            title="Personal Info"
            icon={User}
            href="/personalinfo"
            color="bg-[#6C5CE7]"
            info={{
              name: cvData.personalInfo.fullName,
              email: cvData.personalInfo.email,
              phone: cvData.personalInfo.phone,
            }}
          />
          <ProgressCard title="Experience" icon={Briefcase} href="/experience" color="bg-[#2196F3]" />
          <ProgressCard title="Education" icon={GraduationCap} href="/education" color="bg-[#4CAF50]" />
          <ProgressCard title="Skills" icon={Code} href="/skills" color="bg-[#FF9800]" />
          <ProgressCard title="Projects" icon={FolderGit2} href="/projects" color="bg-[#F50057]" />
        </div>
      </main>
      <footer className="py-4 text-center text-sm text-gray-500">
        {new Date().getFullYear()} CV Builder. All rights reserved.
      </footer>
    </div>
  )
}
