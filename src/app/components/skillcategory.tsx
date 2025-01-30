"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCV } from "../context/cv-context"

interface SkillCategoryProps {
  title: string
  category: "programmingLanguages" | "frameworksAndLibraries" | "toolsAndTechnologies" | "softSkills"
}

export function SkillCategory({ title, category }: SkillCategoryProps) {
  const { cvData, addSkill } = useCV()
  const [skillName, setSkillName] = useState("")
  const [proficiency, setProficiency] = useState<"Beginner" | "Intermediate" | "Advanced" | "">("")

  const handleAddSkill = () => {
    if (skillName) {
      if (category === "softSkills") {
        addSkill(category, skillName)
      } else if (proficiency) {
        addSkill(category, { name: skillName, proficiency })
      }
      setSkillName("")
      setProficiency("")
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex gap-2">
        <Input
          placeholder="Skill name"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          className="flex-grow"
        />
        {category !== "softSkills" && (
          <Select value={proficiency} onValueChange={setProficiency}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Proficiency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        )}
        <Button onClick={handleAddSkill}>Add</Button>
      </div>
      <div className="space-y-2">
        {cvData.skills[category].map((skill, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded">
            {typeof skill === "string" ? (
              skill
            ) : (
              <>
                {skill.name} - {skill.proficiency}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

