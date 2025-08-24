"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Package2,
  Settings,
  Users,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    }
  }, [pathname, isMobile])

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Students",
      icon: Users,
      href: "/dashboard/students",
      active: pathname === "/dashboard/students",
    },
    {
      label: "Classes",
      icon: GraduationCap,
      href: "/dashboard/classes",
      active: pathname === "/dashboard/classes",
    },
    {
      label: "Exercises",
      icon: BookOpen,
      href: "/dashboard/exercises",
      active: pathname === "/dashboard/exercises",
    },
    {
      label: "Exercise Builder",
      icon: Package2,
      href: "/dashboard/exercise-builder",
      active: pathname === "/dashboard/exercise-builder",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      href: "/dashboard/analytics",
      active: pathname === "/dashboard/analytics",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out`
            : "relative"
        } flex flex-col h-full bg-background border-r w-64 py-4`}
      >
        <div className="px-3 py-2">
          <Link href="/dashboard" className="flex items-center pl-3 mb-6">
            <Package2 className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">IELTS Nook</span>
          </Link>
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center py-2 px-3 rounded-lg text-sm group hover:bg-accent",
                  route.active ? "bg-accent text-accent-foreground" : "transparent",
                )}
              >
                <route.icon className={cn("h-5 w-5 mr-3", route.active ? "text-primary" : "text-muted-foreground")} />
                {route.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-auto px-3 py-2">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="#">
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile toggle button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 left-4 z-50 p-2 rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          <Menu className="h-6 w-6" />
        </button>
      )}
    </>
  )
}
