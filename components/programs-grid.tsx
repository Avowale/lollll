"use client"

import { ProgramCard } from "./program-card"
import { FilterBar } from "./filter-bar"
import { useState } from "react"

const programs = [
  {
    id: 1,
    name: "Ultimate Trainer Pro",
    game: "Cyberpunk 2077",
    category: "Trainer",
    description: "Advanced trainer with 25+ features including unlimited health, ammo, and custom stats modification.",
    downloads: "125K",
    rating: 4.8,
    verified: true,
  },
  {
    id: 2,
    name: "Graphics Enhancement Mod",
    game: "Elden Ring",
    category: "Graphics Mod",
    description:
      "Ultra HD texture pack with ray tracing support and enhanced lighting effects for maximum visual fidelity.",
    downloads: "89K",
    rating: 4.9,
    verified: true,
  },
  {
    id: 3,
    name: "Speedrun Timer",
    game: "Multi-Game",
    category: "Utility",
    description:
      "Professional speedrun timer with split tracking, auto-save, and Twitch integration for live streaming.",
    downloads: "56K",
    rating: 4.7,
    verified: true,
  },
  {
    id: 4,
    name: "FPS Optimizer",
    game: "Starfield",
    category: "Performance",
    description: "Boost your frame rate with intelligent resource management and background process optimization.",
    downloads: "234K",
    rating: 4.6,
    verified: true,
  },
  {
    id: 5,
    name: "Inventory Manager",
    game: "Baldur's Gate 3",
    category: "Utility",
    description: "Organize and manage your inventory efficiently with smart sorting and auto-stack features.",
    downloads: "43K",
    rating: 4.5,
    verified: false,
  },
  {
    id: 6,
    name: "Difficulty Rebalance",
    game: "Hogwarts Legacy",
    category: "Gameplay Mod",
    description: "Comprehensive difficulty overhaul with customizable enemy stats, loot tables, and challenge modes.",
    downloads: "67K",
    rating: 4.8,
    verified: true,
  },
]

export function ProgramsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPrograms =
    selectedCategory === "All" ? programs : programs.filter((p) => p.category === selectedCategory)

  return (
    <section id="programs" className="py-20 relative z-10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-4">
            Browse <i className="font-light">Programs</i>
          </h2>
          <p className="font-mono text-sm text-muted max-w-xl mx-auto">
            Explore our curated collection of game enhancement tools
          </p>
        </div>

        <FilterBar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} {...program} />
          ))}
        </div>
      </div>
    </section>
  )
}
