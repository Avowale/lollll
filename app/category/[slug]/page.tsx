"use client"

import { ProgramCard } from "@/components/program-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { use } from "react"

const programsByCategory: Record<string, any[]> = {
  rust: [
    {
      id: 1,
      name: "Rust ESP Helper",
      game: "Rust",
      category: "Utility",
      description: "Advanced ESP tool for better game awareness and strategic gameplay.",
      downloads: "45K",
      rating: 4.7,
      verified: true,
    },
    {
      id: 2,
      name: "Resource Finder",
      game: "Rust",
      category: "Utility",
      description: "Locate resources efficiently across the map with smart markers.",
      downloads: "38K",
      rating: 4.5,
      verified: true,
    },
  ],
  "garrys-mod": [
    {
      id: 3,
      name: "Prop Hunt Enhanced",
      game: "Garry's Mod",
      category: "Gameplay Mod",
      description: "Enhanced prop hunt mode with custom models and improved mechanics.",
      downloads: "52K",
      rating: 4.8,
      verified: true,
    },
  ],
  minecraft: [
    {
      id: 4,
      name: "X-Ray Texture Pack",
      game: "Minecraft",
      category: "Resource Pack",
      description: "See through blocks to find valuable ores and hidden caves.",
      downloads: "128K",
      rating: 4.6,
      verified: true,
    },
    {
      id: 5,
      name: "Build Helper",
      game: "Minecraft",
      category: "Utility",
      description: "Advanced building tools with schematic support and auto-place features.",
      downloads: "95K",
      rating: 4.9,
      verified: true,
    },
  ],
  cs2: [
    {
      id: 6,
      name: "Aim Trainer",
      game: "CS2",
      category: "Training",
      description: "Improve your aim with professional training scenarios and analytics.",
      downloads: "210K",
      rating: 4.9,
      verified: true,
    },
  ],
  dota2: [
    {
      id: 7,
      name: "Hero Stats Tracker",
      game: "Dota 2",
      category: "Analytics",
      description: "Real-time hero statistics and performance tracking for competitive play.",
      downloads: "67K",
      rating: 4.7,
      verified: true,
    },
  ],
}

const categoryNames: Record<string, { en: string; ru: string }> = {
  rust: { en: "Rust", ru: "Раст" },
  "garrys-mod": { en: "Garry's Mod", ru: "Гэррис Мод" },
  minecraft: { en: "Minecraft", ru: "Майнкрафт" },
  cs2: { en: "CS2", ru: "КС2" },
  dota2: { en: "Dota 2", ru: "Дота 2" },
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const programs = programsByCategory[slug] || []
  const categoryName = categoryNames[slug]?.ru || slug

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container">
        <Link href="/">
          <Button variant="ghost" className="mb-8 font-mono text-xs">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к категориям
          </Button>
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sentient mb-4">
            {categoryName} <i className="font-light">Лучшие читы</i>
          </h1>
          <p className="font-mono text-sm text-muted">{programs.length} доступных программ</p>
        </div>

        {programs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-mono text-muted">Пока нет доступных программ для этой категории</p>
          </div>
        )}
      </div>
    </div>
  )
}
