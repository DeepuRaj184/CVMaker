"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface Skill {
  name: string
  proficiency?: "Beginner" | "Intermediate" | "Advanced"
}

interface CVData {
  personalInfo: {
    fullName: string
    email: string
    phone: string
  }
  skills: {
    programmingLanguages: Skill[]
    frameworksAndLibraries: Skill[]
    toolsAndTechnologies: Skill[]
    softSkills: string[]
  }
}

interface CVContextType {
  cvData: CVData
  updatePersonalInfo: (data: CVData["personalInfo"]) => void
  addSkill: (category: keyof CVData["skills"], skill: Skill | string) => void
}

const defaultState: CVData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
  },
  skills: {
    programmingLanguages: [],
    frameworksAndLibraries: [],
    toolsAndTechnologies: [],
    softSkills: [],
  },
}

const CVContext = createContext<CVContextType | undefined>(undefined)

export function CVProvider({ children }: { children: React.ReactNode }) {
  const [cvData, setCVData] = useState<CVData>(defaultState)

  const updatePersonalInfo = (data: CVData["personalInfo"]) => {
    setCVData((prev) => ({
      ...prev,
      personalInfo: data,
    }))
  }

  const addSkill = (category: keyof CVData["skills"], skill: Skill | string) => {
    setCVData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: [...prev.skills[category], skill],
      },
    }))
  }

  return <CVContext.Provider value={{ cvData, updatePersonalInfo, addSkill }}>{children}</CVContext.Provider>
}

export function useCV() {
  const context = useContext(CVContext)
  if (context === undefined) {
    throw new Error("useCV must be used within a CVProvider")
  }
  return context
}

