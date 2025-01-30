"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DateInput } from "../components/ui/date-input"
import { Trash2 } from "lucide-react"
import { Header } from "../components/header"

export default function Experience() {
  const [experiences, setExperiences] = useState<number[]>([1])
  const [showForm, setShowForm] = useState(false)

  const addExperience = () => {
    setExperiences([...experiences, experiences.length + 1])
  }

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container px-4 py-8">
        <div className="container mx-auto max-w-2xl">
        <h1 className="mb-8 text-2xl font-bold">Experience</h1>
        <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp} className="bg-white rounded-lg p-6 shadow-sm border relative">
            <button
              onClick={() => removeExperience(index)}
              className="absolute right-4 top-4 text-red-500 hover:text-red-700"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Experience {exp}</h2>
            <div className="space-y-4">
              <div>
                <Input placeholder="Company Name" className="mb-4" />
                <Input placeholder="Position" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <DateInput name={`start-date-${exp}`} label="Start Date" />
                <DateInput name={`end-date-${exp}`} label="End Date" />
              </div>
              <Textarea placeholder="Description" className="min-h-[100px]" />
            </div>
          </div>
        ))}

        <Button onClick={addExperience} className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100">
          + Add Experience
        </Button>

        <div className="flex gap-4">
          <Button className="w-full">Save Changes</Button>
          <Button variant="outline" className="w-full">
            Cancel
          </Button>
        </div>
      </div>
    </div>
      </main>
    </div>
  )
}

