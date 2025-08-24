"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  Calendar,
  FileText,
  Headphones,
  Home,
  LogOut,
  MessageSquare,
  Settings,
  User,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function StudentSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    }
  }, [pathname, isMobile])

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/student",
      active: pathname === "/student",
    },
    {
      label: "Materials",
      icon: BookOpen,
      href: "/student/materials",
      active: pathname === "/student/materials",
    },
    {
      label: "Progress",
      icon: BarChart3,
      href: "/student/progress",
      active: pathname === "/student/progress",
    },
    {
      label: "Schedule",
      icon: Calendar,
      href: "/student/schedule",
      active: pathname === "/student/schedule",
    },
    {
      label: "Practice Tests",
      icon: FileText,
      href: "/student/practice-tests",
      active: pathname === "/student/practice-tests",
    },
    {
      label: "Reading",
      icon: BookOpen,
      href: "/student/reading",
      active: pathname === "/student/reading",
    },
    {
      label: "Writing",
      icon: FileText,
      href: "/student/writing",
      active: pathname === "/student/writing",
    },
    {
      label: "Listening",
      icon: Headphones,
      href: "/student/listening",
      active: pathname === "/student/listening",
    },
    {
      label: "Speaking",
      icon: MessageSquare,
      href: "/student/speaking",
      active: pathname === "/student/speaking",
    },
    {
      label: "Profile",
      icon: User,
      href: "/student/profile",
      active: pathname === "/student/profile",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/student/settings",
      active: pathname === "/student/settings",
    },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}

      {/* Mobile toggle button */}
      {isMobile && (
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 md:hidden"
          size="icon"
          variant="outline"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "flex flex-col h-full bg-background border-r w-64 py-4 transition-transform duration-200 ease-in-out",
          isMobile ? `fixed inset-y-0 left-0 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}` : "relative",
        )}
      >
        <div className="px-3 py-2">
          <Link href="/student" className="flex items-center pl-3 mb-6">
            <BookOpen className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">IELTS Nook</span>
          </Link>
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center py-2 px-3 rounded-lg text-sm group hover:bg-accent transition-colors",
                  route.active ? "bg-accent text-accent-foreground" : "transparent",
                )}
                onClick={() => isMobile && setIsOpen(false)}
              >
                <route.icon className={cn("h-5 w-5 mr-3", route.active ? "text-primary" : "text-muted-foreground")} />
                {route.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-auto px-3 py-2">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/dashboard">
              <LogOut className="h-5 w-5 mr-3" />
              Switch to Admin
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}
