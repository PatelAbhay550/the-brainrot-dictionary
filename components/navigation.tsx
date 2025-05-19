"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Brain, Menu, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'
import { useState } from 'react'

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
    },
    {
      href: '/browse',
      label: 'Browse',
      active: pathname === '/browse',
    },
    {
      href: '/random',
      label: 'Random Term',
      active: pathname === '/random',
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <Brain className="h-6 w-6" />
                  <span className="text-lg font-extrabold">BRAINROT</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-4 px-2 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={`hover:text-foreground hover:bg-muted px-4 py-2 rounded-md transition-colors ${
                      route.active ? 'text-foreground font-medium' : 'text-muted-foreground'
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Brain className="h-6 w-6" />
            <span className="sr-only sm:not-sr-only font-extrabold">BRAINROT</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`hover:text-foreground transition-colors ${
                route.active ? 'text-foreground font-medium' : 'text-muted-foreground'
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/browse">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}