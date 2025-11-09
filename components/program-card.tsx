"use client"

import { Download, Star, CheckCircle2 } from "lucide-react"
import { Button } from "./ui/button"

interface ProgramCardProps {
  name: string
  game: string
  category: string
  description: string
  downloads: string
  rating: number
  verified: boolean
}

export function ProgramCard({ name, game, category, description, downloads, rating, verified }: ProgramCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-mono text-lg text-foreground font-medium">{name}</h3>
            {verified && <CheckCircle2 className="w-4 h-4 text-primary" />}
          </div>
          <p className="text-sm text-muted font-mono">{game}</p>
        </div>
      </div>

      <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{description}</p>

      <div className="flex items-center justify-between mb-4">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-mono">
          {category}
        </span>
        <div className="flex items-center gap-1 text-sm text-muted font-mono">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span>{rating}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted font-mono">
          <Download className="w-4 h-4" />
          <span>{downloads}</span>
        </div>
        <Button size="sm" className="font-mono text-xs bg-transparent" variant="outline">
          Download
        </Button>
      </div>
    </div>
  )
}
