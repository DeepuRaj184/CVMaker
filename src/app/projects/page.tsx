"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DateInput } from "../components/ui/date-input"
import { Label } from "@/components/ui/label"
import { Header } from "../components/header"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
export default function PersonalInfo() {
  const [technologies, setTechnologies] = useState<string[]>([])
  const [techInput, setTechInput] = useState("")

  const addTechnology = () => {
    if (techInput.trim() && !technologies.includes(techInput.trim())) {
      setTechnologies([...technologies, techInput.trim()])
      setTechInput("")
    }
  }

  const removeTechnology = (tech: string) => {
    setTechnologies(technologies.filter((t) => t !== tech))
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container px-4 py-8">
        
        <div className="container mx-auto max-w-2xl">
        <h1 className="mb-8 text-2xl font-bold">Projects</h1>
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="space-y-4">
          <div>
            <Label htmlFor="project-name">
              Project Name <span className="text-red-500">*</span>
            </Label>
            <Input id="project-name" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <DateInput name="start-date" label="Start Date" required />
            <DateInput name="end-date" label="End Date" />
          </div>

          <div>
            <Label htmlFor="project-link">Project Link</Label>
            <Input id="project-link" placeholder="https://..." />
          </div>

          <div>
            <Label htmlFor="description">
              Description <span className="text-red-500">*</span>
            </Label>
            <Textarea id="description" placeholder="Describe your project..." className="min-h-[100px]" required />
          </div>

          <div>
            <Label>Technologies Used</Label>
            <div className="flex gap-2 mb-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="gap-1">
                  {tech}
                  <button
                    onClick={() => removeTechnology(tech)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Add technology..."
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTechnology()}
              />
              <Button onClick={addTechnology}>Add</Button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <Button className="w-full">Save Project</Button>
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

