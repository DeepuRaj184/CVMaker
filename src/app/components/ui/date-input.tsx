"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DateInputProps {
  label?: string
  name: string
  required?: boolean
}

export function DateInput({ label, name, required = false }: DateInputProps) {
  return (
    <div className="w-full">
      {label && (
        <Label htmlFor={name} className="mb-2 block">
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
      )}
      <Input type="date" id={name} name={name} required={required} placeholder="dd-mm-yyyy" className="w-full" />
    </div>
  )
}

