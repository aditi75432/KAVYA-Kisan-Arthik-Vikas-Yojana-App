"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Bell, HelpCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage, languages } from "@/contexts/language-context"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { currentLanguage, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: t("app.dashboard") },
    { href: "/wallet", label: t("app.wallet") },
    { href: "/loans", label: t("app.loans") },
    { href: "/schemes", label: t("app.schemes") },
    { href: "/market", label: t("app.market") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">{t("app.name")}</span>
          </Link>
        </div>
        <nav
          className={`${isMenuOpen ? "absolute inset-x-0 top-16 z-50 bg-white p-4 shadow-lg md:static md:shadow-none" : "hidden md:flex"} items-center gap-6`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${pathname === item.href ? "text-primary font-bold" : "hover:text-primary"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">{t("app.notifications")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t("app.notifications")}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>New subsidy available</DropdownMenuItem>
              <DropdownMenuItem>Loan application approved</DropdownMenuItem>
              <DropdownMenuItem>Market price alert</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                {languages.find((lang) => lang.code === currentLanguage)?.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Select Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {languages.map((language) => (
                <DropdownMenuItem key={language.code} onClick={() => setLanguage(language.code)}>
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">{t("app.profile")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t("app.profile")}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{t("app.profile")}</DropdownMenuItem>
              <DropdownMenuItem>{t("app.settings")}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{t("app.logout")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">{t("app.help")}</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

