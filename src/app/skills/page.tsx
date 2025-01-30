"use client"

import { Header } from "../components/header"
import { SkillCategory } from "../components/skillcategory"

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Skills</h1>
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-8">
            <SkillCategory title="Programming Languages" category="programmingLanguages" />
            <SkillCategory title="Frameworks and Libraries" category="frameworksAndLibraries" />
            <SkillCategory title="Tools and Technologies" category="toolsAndTechnologies" />
            <SkillCategory title="Soft Skills" category="softSkills" />
          </div>
        </div>
      </main>
    </div>
  )
}

