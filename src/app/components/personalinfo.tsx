"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useCV } from "../context/cv-context"
import { useRouter } from "next/navigation"
import type React from "react"

export function PersonalInfoForm() {
  const { cvData, updatePersonalInfo } = useCV()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    updatePersonalInfo({
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
    })

    router.push("/")
  }

  return (
    <div className="container px-4 mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold mb-8">Personal Information</h1>
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl mx-auto">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-base">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="fullName"
          name="fullName"
          defaultValue={cvData.personalInfo.fullName}
          placeholder="abc"
          required
          className="w-full p-3"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-base">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          defaultValue={cvData.personalInfo.email}
          placeholder="abc@gmail.com"
          required
          className="w-full p-3"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-base">
          Phone <span className="text-red-500">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          defaultValue={cvData.personalInfo.phone}
          placeholder="9876543210"
          required
          className="w-full p-3"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary" className="text-base">
          Professional Summary <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="summary"
          name="summary"
          placeholder="Write your professional summary here..."
          required
          className="w-full p-3 min-h-[150px]"
        />
      </div>

      <Button type="submit" className="w-full bg-[#6C5CE7] hover:bg-[#6C5CE7]/90 text-white py-6">
        Save Changes
      </Button>
    </form>
    </div>
  )
}

