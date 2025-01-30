import Link from "next/link"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b bg-[#6C5CE7]">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 text-white">
          <FileText className="h-6 w-6" />
          <span className="text-xl font-bold">CV Builder</span>
        </Link>
        <Button variant="secondary" size="sm">
          Generate PDF
        </Button>
      </div>
    </header>
  )
}

