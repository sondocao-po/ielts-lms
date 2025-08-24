import type React from "react"
import StudentSidebar from "@/components/student/student-sidebar"
import StudentHeader from "@/components/student/student-header"

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <StudentSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <StudentHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50/50">{children}</main>
      </div>
    </div>
  )
}
