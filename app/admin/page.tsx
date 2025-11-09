"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Trash2, Plus } from "lucide-react"

interface Category {
  id: string
  name: string
  slug: string
  description: string
  programCount: number
}

interface Program {
  id: number
  name: string
  game: string
  category: string
  description: string
  downloads: string
  rating: number
  verified: boolean
  categorySlug: string
}

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [programs, setPrograms] = useState<Program[]>([])

  const [newCategory, setNewCategory] = useState({
    name: "",
    slug: "",
    description: "",
  })

  const [newProgram, setNewProgram] = useState({
    name: "",
    game: "",
    category: "",
    description: "",
    categorySlug: "",
  })

  useEffect(() => {
    if (isAuthenticated) {
      const savedCategories = localStorage.getItem("nightclub_categories")
      const savedPrograms = localStorage.getItem("nightclub_programs")

      if (savedCategories) setCategories(JSON.parse(savedCategories))
      if (savedPrograms) setPrograms(JSON.parse(savedPrograms))
    }
  }, [isAuthenticated])

  const handleLogin = () => {
    if (password === "nightclub2024") {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password")
    }
  }

  const addCategory = () => {
    if (!newCategory.name || !newCategory.slug) {
      alert("Please fill in all category fields")
      return
    }

    const category: Category = {
      id: Date.now().toString(),
      name: newCategory.name,
      slug: newCategory.slug,
      description: newCategory.description,
      programCount: 0,
    }

    const updatedCategories = [...categories, category]
    setCategories(updatedCategories)
    localStorage.setItem("nightclub_categories", JSON.stringify(updatedCategories))

    setNewCategory({ name: "", slug: "", description: "" })
  }

  const deleteCategory = (id: string) => {
    const updatedCategories = categories.filter((cat) => cat.id !== id)
    setCategories(updatedCategories)
    localStorage.setItem("nightclub_categories", JSON.stringify(updatedCategories))
  }

  const addProgram = () => {
    if (!newProgram.name || !newProgram.categorySlug) {
      alert("Please fill in required program fields")
      return
    }

    const program: Program = {
      id: Date.now(),
      name: newProgram.name,
      game: newProgram.game,
      category: newProgram.category,
      description: newProgram.description,
      downloads: "0",
      rating: 0,
      verified: false,
      categorySlug: newProgram.categorySlug,
    }

    const updatedPrograms = [...programs, program]
    setPrograms(updatedPrograms)
    localStorage.setItem("nightclub_programs", JSON.stringify(updatedPrograms))

    setNewProgram({ name: "", game: "", category: "", description: "", categorySlug: "" })
  }

  const deleteProgram = (id: number) => {
    const updatedPrograms = programs.filter((prog) => prog.id !== id)
    setPrograms(updatedPrograms)
    localStorage.setItem("nightclub_programs", JSON.stringify(updatedPrograms))
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="font-sentient text-2xl">Вход в Админ-панель</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Войти
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container max-w-6xl">
        <h1 className="text-4xl font-sentient mb-8">
          Админ <i className="font-light">Панель</i>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Categories Management */}
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-lg">Управление категориями</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <Label htmlFor="cat-name">Название категории</Label>
                  <Input
                    id="cat-name"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                    placeholder="Например: Rust"
                  />
                </div>
                <div>
                  <Label htmlFor="cat-slug">Slug</Label>
                  <Input
                    id="cat-slug"
                    value={newCategory.slug}
                    onChange={(e) => setNewCategory({ ...newCategory, slug: e.target.value })}
                    placeholder="Например: rust"
                  />
                </div>
                <div>
                  <Label htmlFor="cat-desc">Описание</Label>
                  <Textarea
                    id="cat-desc"
                    value={newCategory.description}
                    onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                    placeholder="Описание категории"
                  />
                </div>
                <Button onClick={addCategory} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Добавить категорию
                </Button>
              </div>

              <div className="border-t pt-4 space-y-2">
                {categories.map((cat) => (
                  <div key={cat.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-mono text-sm font-semibold">{cat.name}</p>
                      <p className="text-xs text-muted">{cat.slug}</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => deleteCategory(cat.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Programs Management */}
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-lg">Управление программами</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <Label htmlFor="prog-name">Название чита</Label>
                  <Input
                    id="prog-name"
                    value={newProgram.name}
                    onChange={(e) => setNewProgram({ ...newProgram, name: e.target.value })}
                    placeholder="Название чита"
                  />
                </div>
                <div>
                  <Label htmlFor="prog-game">Игра</Label>
                  <Input
                    id="prog-game"
                    value={newProgram.game}
                    onChange={(e) => setNewProgram({ ...newProgram, game: e.target.value })}
                    placeholder="Название игры"
                  />
                </div>
                <div>
                  <Label htmlFor="prog-cat">Slug категории</Label>
                  <Input
                    id="prog-cat"
                    value={newProgram.categorySlug}
                    onChange={(e) => setNewProgram({ ...newProgram, categorySlug: e.target.value })}
                    placeholder="Например: rust"
                  />
                </div>
                <div>
                  <Label htmlFor="prog-desc">Описание</Label>
                  <Textarea
                    id="prog-desc"
                    value={newProgram.description}
                    onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
                    placeholder="Описание чита"
                  />
                </div>
                <Button onClick={addProgram} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Добавить чит
                </Button>
              </div>

              <div className="border-t pt-4 space-y-2 max-h-96 overflow-y-auto">
                {programs.map((prog) => (
                  <div key={prog.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-mono text-sm font-semibold">{prog.name}</p>
                      <p className="text-xs text-muted">{prog.categorySlug}</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => deleteProgram(prog.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
