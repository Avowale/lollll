"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { SearchBar } from "./search-bar"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col min-h-svh justify-center pb-20">
      <GL hovering={hovering} />

      <div className="text-center relative">
        <Pill className="mb-6">NIGHTCLUB ИГРОВОЙ ХАБ</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sentient text-balance">
          Лучшие читы <br />
          <i className="font-light">для Ваших</i> Игр
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[560px] mx-auto leading-relaxed">
          Откройте для себя трейнеры, моды, утилиты и инструменты для ваших любимых игр. Просмотрите наш обширный
          каталог проверенных программ.
        </p>

        <SearchBar className="mt-12" />

        <div className="flex items-center justify-center gap-4 mt-10">
          <Link className="contents" href="/#categories">
            <Button
              variant="outline"
              className="font-mono text-xs bg-transparent"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Просмотреть категории
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
