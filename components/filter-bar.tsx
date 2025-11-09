"use client"

interface FilterBarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = ["All", "Trainer", "Graphics Mod", "Utility", "Performance", "Gameplay Mod"]

export function FilterBar({ selectedCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 py-2 rounded-full font-mono text-sm whitespace-nowrap transition-all duration-200
            ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted border border-border hover:border-primary/50"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
