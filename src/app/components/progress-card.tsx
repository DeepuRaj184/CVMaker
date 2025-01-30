import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface ProgressCardProps {
  title: string
  icon: LucideIcon
  href: string
  color: string
  info?: {
    name?: string
    email?: string
    phone?: string
  }
}

export function ProgressCard({ title, icon: Icon, href, color, info }: ProgressCardProps) {
  return (
    <Link href={href}>
      <div className="relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-center gap-4">
          <div className={`rounded-full ${color} p-3`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex items-center">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="px-4">
            {info && (
              <div className="mt-2 space-y-1 opacity-50">
                {info.name && <p className="text-sm">Name :{info.name}</p>}
                {info.email && <p className="text-sm">Email :{info.email}</p>}
                {info.phone && <p className="text-sm"> phone :{info.phone}</p>}
              </div>
            )}
            </div>

          </div>
        </div>
      </div>
    </Link>
  )
}

