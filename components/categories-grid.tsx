"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: "rust",
    name: "Rust",
    slug: "rust",
    description: "Инструменты для выживания",
    programCount: 12,
    color: "#CE422B",
  },
  {
    id: "garrys-mod",
    name: "Garry's Mod",
    slug: "garrys-mod",
    description: "Модификации для песочницы",
    programCount: 8,
    color: "#0099CC",
  },
  {
    id: "minecraft",
    name: "Minecraft",
    slug: "minecraft",
    description: "Утилиты для строительства",
    programCount: 24,
    color: "#6EAE3A",
  },
  {
    id: "cs2",
    name: "CS2",
    slug: "cs2",
    description: "Инструменты Counter-Strike 2",
    programCount: 15,
    color: "#F7B731",
  },
  {
    id: "dota2",
    name: "Dota 2",
    slug: "dota2",
    description: "Утилиты для MOBA",
    programCount: 10,
    color: "#AF1F31",
  },
]

export function CategoriesGrid() {
  return (
    <section id="categories" className="py-32 relative z-10">
      <div className="container max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-sentient mb-6">
            Категории <i className="font-light">Игр</i>
          </h2>
          <p className="font-mono text-sm text-muted/60 max-w-xl mx-auto tracking-wide">
            Выберите игру для просмотра доступных программ
          </p>
        </div>

        <div className="space-y-4">
          {categories.map((category, index) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
              <div
                className="group relative overflow-hidden border border-border/30 transition-all duration-500 hover:border-border/60 bg-card/20 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-10"
                  style={{ backgroundColor: category.color }}
                />

                <div className="relative flex items-center justify-between p-8 md:p-10">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-3">
                      <h3 className="text-4xl md:text-5xl font-sentient tracking-tight group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h3>
                      <div
                        className="h-2 w-2 rounded-full transition-all duration-500 group-hover:scale-150"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>

                    <div className="flex items-center gap-6">
                      <p className="font-mono text-sm text-muted/70 tracking-wide">{category.description}</p>
                      <div className="hidden md:flex items-center gap-2">
                        <div className="h-px w-8 bg-border/30" />
                        <span className="font-mono text-xs text-muted/50 whitespace-nowrap">
                          {category.programCount} программ
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="md:hidden font-mono text-xs text-muted/50">{category.programCount}</div>
                    <ArrowRight className="w-6 h-6 text-muted/40 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
