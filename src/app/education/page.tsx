"use client"
import { Header } from "../components/header";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DateInput } from "../components/ui/date-input";
import { Trash2 } from "lucide-react"

export default function Education() {
    const [educations, setEducations] = useState<number[]>([1])
  
    const addEducation = () => {
      setEducations([...educations, educations.length + 1])
    }
  
    const removeEducation = (index: number) => {
      setEducations(educations.filter((_, i) => i !== index))
    }
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container px-4 py-8">
        <div className="container mx-auto max-w-2xl">
        <h1 className="mb-8 text-2xl font-bold">Education</h1>
        <div className="space-y-6">
        {educations.map((edu, index) => (
          <div key={edu} className="bg-white rounded-lg p-6 shadow-sm border relative">
            <button
              onClick={() => removeEducation(index)}
              className="absolute right-4 top-4 text-red-500 hover:text-red-700"
            >
              <Trash2 className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Education {edu}</h2>
            <div className="space-y-4">
              <div>
                <Input placeholder="Institution Name" className="mb-4" />
                <Input placeholder="Degree/Certification" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <DateInput name={`start-date-${edu}`} label="Start Date" />
                <DateInput name={`end-date-${edu}`} label="End Date" />
              </div>
            </div>
          </div>
        ))}

        <Button onClick={addEducation} className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100">
          + Add Education
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

